import * as React from 'react';
import ChatList from './ChatList';
import Conversation from './Conversation';
function Main() {
  return (
    <div className="w-full h-[93%] flex">
      <ChatList />
      <Conversation />
    </div>
  );
}

export default Main;