import React, { useEffect, useState } from "react";
import UserProfile from './component/userProfile/userProfile';
import Toogle from './component/toggle/toggle';
import Input from './component/common/input/input';
import SelectBox from './component/common/selectBox/selectBox';
import { OPTIONS, SEARCH_BY_DEFAULT } from './utils/common';
import './App.css';

const App = () => {
  const [usersProfile, setUsersProfile] = useState([]);
  const [cardLayout, setCardLayout] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [searchBy, setSearchBy] = useState(SEARCH_BY_DEFAULT);

  useEffect(() => {
    const getUsers = fetch('https://api.jsonbin.io/b/5ff9808096f2345c303a8a2b');
    getUsers.then(response => {
      response.json().then(res => {
        setUsersProfile(res);
      })
    })
  }, []);

  const handleDelete = (id) => {
    const updatedList = usersProfile.filter(val => val.id !== id);
    setUsersProfile(updatedList);
  }

  const handleEdit = (id) => {
    console.log('edit', id);
    // will open the popup to display the details
    // on save should update the state 
  }

  const handleChange = () => {
    setCardLayout(!cardLayout);
  }

  const searchHandler = (e) => {
    setSearchValue(e.target.value);
  }

  const searchByHandler = (e) => {
    setSearchBy(e.target.value)
  }
  
  const generateUserProfileList = () => {
    console.log(usersProfile)
    const list = usersProfile.map((item,index) => {
      return (
        <UserProfile
          id={item.id}
          key={index}
          firstName={item.firstName}
          lastName={item.lastName}
          email={item.email}
          contactInfo={item.contact}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      )
    });

    return list;
  }
  return (
    <div className="card-container">
      <div className="card-header">
        <div className="cardHeader--search">
           <div className="carHeader--search-select">
             <SelectBox
              handleChange={searchByHandler}
              value={searchBy}
              searchLabel={'Search By'}
              options={OPTIONS} /> 
            </div>
           <div className="carHeader--search-input">
             <Input
              value={searchValue}
              onChangeHandler={searchHandler}
              label="Search"
             />
            </div>
        </div>
        <div className="cardHeader--switch">
           Switch View: <Toogle checked={cardLayout} handleChange={handleChange} />
        </div>
      </div>
      <div className="card-layout">
        {generateUserProfileList()}
      </div>
    </div>
  );
}

export default App;
