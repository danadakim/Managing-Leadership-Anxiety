
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-white dark:bg-gray-800 shadow-md p-4 z-10">
            <div className="container mx-auto">
                <h1 className="text-xl md:text-2xl font-bold text-brand-primary dark:text-gray-100">
                    Leadership Anxiety Chatbot
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    Based on Chapter 4 of 'Managing Leadership Anxiety' by Steve Cuss
                </p>
            </div>
        </header>
    );
};

export default Header;
