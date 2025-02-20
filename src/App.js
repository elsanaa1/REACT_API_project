import { useEffect, useState } from 'react';
import './App.css';
import UserList from './UserList.js ';
import axios from 'axios';

function App() {
  // list of users state 
  const [listOfUSer,setListOfUSer]=useState([]);
  // handle get api jsonplaceholder using axios ,inside useeffect method 
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/todos/')        
        .then(response => setListOfUSer(response.data))
        .catch(error => {
          console.error('Error fetching data:', error);
        });
  },[])
  return (
    <div className="App">
      {/* userlist component */}
      <UserList  listOfUSer={listOfUSer}/>
    </div>
  );
}

export default App;
