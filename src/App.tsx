import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import ChatList from './components/ChatList';
import Conversation from './components/Conversation';

function App() {
  return (
    <div className="bg-white w-[90vw] h-[94vh] flex flex-col" >
      <Header />
      <Main />
    </div>
  )
}

export default App;
