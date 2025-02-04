import React from 'react'

const Chatform = () => {
    return (
        <div>
            <form action="#" className="chat-form flex items-center bg-white outline outline-1 outline-[#CCCCE5] rounded-[50px] focus-within:outline-[#6D4FC2] focus-within:outline-[2px] shadow-[0_0_8px_rgba(0,0,0,0.06)]">
                <input
                    type="text"
                    placeholder="Message..."
                    className="message-input border-none outline-none p-[20px] bg-none h-[48px] text-[0.95rem] w-full rounded-[50px] peer"
                    required
                />
                <button
                    className="material-symbols-rounded h-[35px] w-[35px] bg-[#6D4FC2] text-[#fff] flex-shrink-0 border-none outline-none cursor-pointer ml-2 hover:bg-[#593bab] transition ease 0.2s rounded-[50px] mr-[5px] hidden peer-valid:block"
                >
                    arrow_upward
                </button>
            </form>
        </div>
    )
}

export default Chatform
