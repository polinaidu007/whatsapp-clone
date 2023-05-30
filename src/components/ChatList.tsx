import * as React from 'react';
import Chat from './Chat';
function ChatList() {
    return (
        <div className="w-[30%] h-full bg-white flex flex-col pr-[1%] overflow-y-auto">
            <Chat />

        </div>
    );
}

export default ChatList;