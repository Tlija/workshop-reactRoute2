import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import { Navigation } from './Components/Navigation';
import TodoList from './Components/TodoList';
import UserListe from './Components/UserListe';
import UserProfiel from './Components/UserProfiel';
import {users,todos} from './data';

const App = () => {
  return (
    <div>
  <Navigation/>
  <Routes>
    <Route path="/" element={<Home />}  />
    <Route path="/users" element={<UserListe users={users} />}  />
    <Route path="/todos" element={<TodoList todos={todos} />}  />
    <Route path='/profile/:iduser' element={<UserProfiel users={users} todos={todos}/>}/>
  </Routes>
    </div>
  )
}

export default App