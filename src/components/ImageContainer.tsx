import * as React from 'react';
import logo from './../logo.svg';
function ImageContainer() {
    return (
        <div className="my-[5px] ml-[15px] mr-[5px]">
            <img className="h-[49px] w-[49px] rounded-[50%]" src={logo} />
        </div>
    );
}

export default ImageContainer;