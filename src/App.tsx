import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="bg-white w-[90vw] h-[94vh] flex flex-col">
        <div className="w-full h-[7%] bg-[#F0F2F5]"></div>
        <div className="w-full h-[93%] flex">
            <div className="w-[30%] h-full bg-white flex flex-col pr-[1%] overflow-y-auto">
                <div className="h-[72px] flex flex-row items-center hover:bg-[#1d3963] pr-1">
                    <div className="my-[5px] ml-[15px] mr-[5px]">
                        <img className="h-[49px] w-[49px] rounded-[50%]" src={logo} />
                    </div>
                    <div className="border-b border-b-[#e9edef] flex flex-row flex-grow-[2] h-full items-center ml-[3%]">
                        <div className="flex flex-col flex-grow-[2]">
                            <div className="flex">
                                <h1 className='font-medium'>StarBoy</h1>
                            </div>
                            <div>
                                <span>How are you?</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <span>3/7/2023</span>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="w-[70%] h-[100%] bg-[#EFEAE2] flex flex-col-reverse">
              {/* /text-send-container  */}
              <div className="bg-[#F0F2F5] max-w-full min-h-[62px]"> 
                <input type="text" />
              </div>
            </div>
        </div>
    </div>
  ); 
}

export default App;
