import React, { useEffect, useState } from "react";
import UserProfile from './component/userProfile/userProfile';
import Toogle from './component/toggle/toggle';
import Input from './component/common/input/input';
import SelectBox from './component/common/selectBox/selectBox';
import Button from  './component/common/knob/knob';
import { SEARCH_BY, SEARCH, OPTIONS, SEARCH_BY_DEFAULT, API_URL, SWITCH_VIEW } from './utils/constants';
import { searchByFilters } from './utils/utils';
import TableLayout from './component/tableLayout/tableLayout';
import './App.css';

const App = () => {
  const [usersProfile, setUsersProfile] = useState([]);
  const [tabularLayout, setTabularLayout] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [searchByValue, setSearchByValue] = useState(SEARCH_BY_DEFAULT);
  
  // call the user list API
  const getUserLists = () => {
    const getUsers = fetch(API_URL);
    getUsers.then(response => {
      response.json().then(res => {
        setUsersProfile(res);
      })
    })
  }

   // call the getUserLists function when the components load
  useEffect(() => {
    getUserLists();
  }, []);

  // delete the selected user
  const handleDelete = (id) => {
    const updatedList = usersProfile.filter(val => val.id !== id);
    setUsersProfile(updatedList);
  }

  // edit the selected user
  const handleEdit = (id) => {
    // will open the popup to display the details
    // on save should update the state 
    console.log('edit', id);
  }

   // call the onChangeLayoutHandler while changing the layout
  const onChangeLayoutHandler = () => {
    setTabularLayout(!tabularLayout);
  }
   // call the searchHandler while entering the search value 
  const searchHandler = (e) => {
    setSearchValue(e.target.value);
  }

  // call the searchByHandler while searching with name/email
  const searchByHandler = (e) => {
    setSearchByValue(e.target.value)
  }

  const searchBy = () => {
    const getSearchByData = searchByFilters(usersProfile, searchByValue, searchValue);
    setUsersProfile(getSearchByData);
  }

  // refresh the user listing 
  const refreshHandler = () => {
    getUserLists();
  }
  
  const generateList = () => {
    if (tabularLayout) {
      return <TableLayout rows={usersProfile} />
    }
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
                    value={searchByValue}
                    searchLabel={SEARCH_BY}
                    options={OPTIONS}
                    disabled={tabularLayout}
                    /> 
                  </div>
                  <div className="carHeader--search-input">
                   <Input
                    value={searchValue}
                    onChangeHandler={searchHandler}
                    label={SEARCH}
                    />
                  </div>
                 <div className="carHeader--search-button">
                   <Button text={SEARCH} disabled={tabularLayout} onClickHandler={searchBy} />
                 </div>
                 <div className="carHeader--search-button">
                   <Button text={'Refresh'} onClickHandler={refreshHandler} />
                 </div>
             </div>
        <div className="cardHeader--switch">
           {SWITCH_VIEW} <Toogle checked={tabularLayout} handleChange={onChangeLayoutHandler} />
        </div>
      </div>
      <div className="card-layout">
        {generateList()}
      </div>
    </div>
  );
}

export default App;
