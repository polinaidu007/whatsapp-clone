import * as React from 'react';
import SentText from './SentText';
import ReceivedText from './ReceivedText';
function TextThreadContainer() {
    return (
        <div className='flex flex-col-reverse max-w-full h-4/5 overflow-y-auto flex-grow'>
            <SentText />
            <ReceivedText />
        </div>
    );
}

export default TextThreadContainer;