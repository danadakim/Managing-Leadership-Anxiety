
import React from 'react';
import { Message } from '../types';
import { UserIcon, BotIcon } from './Icons';

interface ChatMessageProps {
    message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
    const isUser = message.role === 'user';

    return (
        <div className={`flex items-start gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}>
            {!isUser && (
                <div className="w-8 h-8 flex-shrink-0 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                    <BotIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                </div>
            )}
            <div
                className={`max-w-xl rounded-xl px-4 py-3 shadow-sm ${
                    isUser
                        ? 'bg-brand-secondary text-white'
                        : 'bg-white dark:bg-gray-700 dark:text-gray-200 text-gray-800'
                }`}
            >
                <p className="text-sm whitespace-pre-wrap">{message.content}</p>
            </div>
             {isUser && (
                <div className="w-8 h-8 flex-shrink-0 bg-brand-secondary rounded-full flex items-center justify-center">
                    <UserIcon className="w-5 h-5 text-white" />
                </div>
            )}
        </div>
    );
};

export default ChatMessage;
