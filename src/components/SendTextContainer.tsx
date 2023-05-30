import * as React from 'react';
function SendTextContainer() {
    return (
        <div className="bg-[#F0F2F5] max-w-full min-h-[62px] flex items-center justify-between p-3">
            <input type="text" className='flex-grow h-10 rounded-md m-1 p-2' placeholder='Type a message' />
            <button className='bg-[#00a884] text-gray-100 p-2 rounded-md w-28 h-10 m-1'>Send</button>
        </div>
    );
}

export default SendTextContainer;