import * as React from 'react';
import SendTextContainer from './SendTextContainer';
import TextThreadContainer from './TextThreadContainer';
function Conversation() {
    return (
        <div className="w-[70%] h-[100%] bg-[#EFEAE2] flex flex-col-reverse">
            {/* /text-send-container  */}
            <SendTextContainer />
            <TextThreadContainer />
        </div>
    );
}

export default Conversation;