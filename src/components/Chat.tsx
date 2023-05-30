import * as React from 'react';
import ImageContainer from './ImageContainer';
import NameMsgPreview from './NameMsgPreview';
import DateContainer from './DateContainer';
function Chat() {
    return (
        <div className="h-[72px] flex flex-row items-center hover:bg-[#1d3963] pr-1">
            <ImageContainer />
            <div className="border-b border-b-[#e9edef] flex flex-row flex-grow-[2] h-full items-center ml-[3%]">
                <NameMsgPreview />
                <DateContainer />
            </div>
        </div>
    );
}

export default Chat;