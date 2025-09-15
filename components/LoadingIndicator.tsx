
import React from 'react';
import { BotIcon } from './Icons';

const LoadingIndicator: React.FC = () => {
    return (
        <div className="flex items-start gap-3 justify-start">
             <div className="w-8 h-8 flex-shrink-0 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                    <BotIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </div>
            <div className="max-w-xl rounded-xl px-4 py-3 shadow-sm bg-white dark:bg-gray-700">
                <div className="flex items-center space-x-1">
                    <span className="text-gray-500 dark:text-gray-400">Thinking</span>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse [animation-delay:-0.3s]"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse [animation-delay:-0.15s]"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                </div>
            </div>
        </div>
    );
};

export default LoadingIndicator;
