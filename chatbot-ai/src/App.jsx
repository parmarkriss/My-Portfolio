import React from 'react'
import ChatbotIcon from './components/ChatbotIcon'
import Chatform from './components/Chatform';

const App = () => {
  return (
    <div className="container">
      <div className="chatbot-popup relative w-[420px] h-[500px] overflow-hidden bg-[#fff] rounded-[15px] flex flex-col">
        {/* Chatbot Header */}
        <div className="chat-header flex p-[15px] [22px] items-center justify-between bg-[#6D4FC2]">
          <div className="header-info flex gap-4 items-center">
            <ChatbotIcon />
            <h2 className="logo-text text-[#fff] text-[1.31rem] font-semibold">
              Chatbot
            </h2>
          </div>
          <button className="material-symbols-rounded w-[40px] h-[40px] border-none outline-none text-[#fff] pt-[2px] bg-[#6D4FC2] transition-all duration-200 ease-in-out text-[1.31rem] cursor-pointer rounded-full hover:bg-[#593bab] ml-auto">
            keyboard_arrow_down
          </button>
        </div>

        {/* Chatbot Body */}
        <div className="chatbot-body mb-[82px]  flex-1 p-[25px] [22px] h-[460px] overflow-y-auto flex gap-[20px] flex-col shadow-custom">
          <div className="message bot-message flex gap-11 items-center">
            <ChatbotIcon />
            <p className="message-text p-[12px] [16px] max-w-[75%] whitespace-pre-line text-[0.95rem] break-words bg-[#F6F2FF] rounded-[13px] [13px] [13px] [13px]">Hey There 👋 <br /> How Can Help you Today?</p>
          </div>

          <div className="message user-message flex gap-11 flex-col items-end">
            <p className="message-text p-[12px] [16px] max-w-[75%] whitespace-pre-line text-[0.95rem] break-words bg-[#6D4FC2] text-[#fff] rounded-tl-[13px] rounded-tr-[13px] rounded-bl-[13px] rounded-br-[3px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, neque!</p>
          </div>
        </div>

        {/* Chat Footer */}
        <div className="chat-footer  bottom-0 left-0 w-full bg-white p-[15px] rounded-b-[15px]">
           <Chatform/>
        </div>

      </div>
    </div>
  )
}

export default App;
