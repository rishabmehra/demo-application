import React, { useEffect, useState } from "react";
import UserProfile from './component/userProfile/userProfile';
import './App.css';

const App = () => {
  const [usersProfile, setUsersProfile] = useState([]);

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
  
  const generateUserProfileList = () => {
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
        />
      )
    });

    return list;
  }
  return (
    <div className="card-container">
      <div className="card-layout">
        {generateUserProfileList()}
      </div>
    </div>
  );
}

export default App;
