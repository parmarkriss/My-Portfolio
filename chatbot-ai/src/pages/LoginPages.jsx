import React, { useEffect, useState } from 'react';
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import HomePages from './HomePages';
import messages from '../components/Message';

// Adding the getDayOfYear function to Date object for easy calculation
Date.prototype.getDayOfYear = function () {
    const start = new Date(this.getFullYear(), 0, 0);
    const diff = this - start;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
};

const LoginPages = () => {
    const { user } = useUser();
    const [message, setMessage] = useState('');
    const [lastMessageDay, setLastMessageDay] = useState(null);

    useEffect(() => {
        // Get the current day of the year (1-365)
        const currentDayOfYear = new Date().getDayOfYear();

        // Get the last day stored in localStorage
        const storedMessageDay = localStorage.getItem('lastMessageDay');

        // If the stored day doesn't match today's day, show a new message
        if (storedMessageDay !== currentDayOfYear.toString()) {
            // Get a new message for today (using modulo to ensure messages loop if less than 365)
            const messageIndex = currentDayOfYear % messages.length;
            setMessage(messages[messageIndex]);

            // Save the new day to localStorage and update state
            localStorage.setItem('lastMessageDay', currentDayOfYear);
            setLastMessageDay(currentDayOfYear);
        } else {
            // If the day is the same, retrieve the last stored message
            setMessage(messages[storedMessageDay % messages.length]);
        }
    }, []);

    // Get the current hour for greeting
    const currentHour = new Date().getHours();

    // Function to return the greeting message based on time
    const getGreeting = () => {
        if (currentHour < 12) {
            return "Good Morning";
        } else if (currentHour < 18) {
            return "Good Afternoon";
        } else {
            return "Good Evening";
        }
    };

    return (
        <div>
            {/* Header section - Only shows if user is signed in */}
            <SignedIn>
                <div className="login p-4 shadow-lg flex justify-between items-center py-[10px] px-[50px]">
                    <div className="flex items-center">
                        <img src="/images/chatbot.png" alt="ChatBot" className='w-[40px] me-[10px]' />
                        <h1 className="text-[28px] font-semibold text-gray-700">ChatBot-Ai</h1>
                    </div>
                    <div className="flex items-center space-x-4">
                        <UserButton />
                    </div>
                </div>
            </SignedIn>

            {/* Centered sign-out and sign-in section */}
            <div className="flex justify-center items-center min-h-screen">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-[400px] text-center">
                    <SignedOut>
                        <div className="mb-4 text-center">
                            <p className="text-[26px] font-bold text-[#800020] mb-[10px]">
                                Welcome back! Sign in to get started and experience the best of ChatBot-Ai.
                            </p>
                            <p className="text-[18px] text-[#2F4F6D] mb-[20px]">
                                Your AI assistant is just one click away. Let's get started!
                            </p>
                            <SignInButton className="w-[200px] h-[50px] bg-gradient-to-r from-[#6D4FC2] to-[#593bab] text-[#fff] py-2 rounded-[10px] hover:opacity-90 transition duration-300 border-none shadow-lg">
                                Sign In
                            </SignInButton>
                        </div>
                    </SignedOut>


                    <SignedIn>
                        <div className="mb-4">
                            {user && (
                                <>
                                    <h2 className="text-2xl font-semibold">{getGreeting()}, Hii {user.firstName}!</h2>
                                    <p className="mt-4 text-lg text-gray-600">{message}</p> {/* Display the unique message */}
                                    <HomePages />
                                </>
                            )}
                        </div>
                    </SignedIn>
                </div>
            </div>
        </div>
    );
};

export default LoginPages;
