import './App.css';
import React, {useState, useEffect} from 'react';
import NavBar from './NavBar';
import HomePage from './HomePage';
import NewChoreForm from './NewChoreForm';
import NewRoomForm from "./NewRoomForm"
import LogInPage from './LogInPage';
import {BrowserRouter, Route, NavLink, Switch, Routes} from "react-router-dom";
import { ChromeReaderModeSharp } from '@mui/icons-material';


function App() {
  
  const [chores, setChores] = useState([])
  const [rooms, setRooms] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:3000/chores")
      .then((response) => response.json())
      .then((data) => setChores(data))
    fetch("http://localhost:3000/rooms")
      .then((response) => response.json())
      .then((roomData) => setRooms(roomData))
      }, [] );


  function addChore(newChore) {
    setChores([...chores, newChore])
  }

  function addRoom(newRoom) {
    setRooms([...rooms, newRoom])
  }
  
  
  
  return (
    <div className="App">
      <header className="App-header">

        <NavBar />

        <Switch>
        
          <Route exact path="/createchore">
           
            <NewChoreForm 
              addChore={addChore}
            />

          </Route>

          <Route exact path="/createroom">
           
           <NewRoomForm
            addRoom={addRoom}
           />

         </Route>

          <Route exact path="/login">

            <LogInPage/>

          </Route>
          
          <Route exact path="/">

            <HomePage 
              // room={rooms}
              // addRoom={addRoom}
              chores={chores}
            />
          
          </Route>



        </Switch>

      </header>
    </div>
  );
}

export default App;
