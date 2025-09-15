
import React, { useState } from 'react';
import { SendIcon } from './Icons';

interface MessageInputProps {
    onSendMessage: (text: string) => void;
    isLoading: boolean;
}

const MessageInput: React.FC<MessageInputProps> = ({ onSendMessage, isLoading }) => {
    const [text, setText] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim() && !isLoading) {
            onSendMessage(text);
            setText('');
        }
    };

    return (
        <div className="bg-white dark:bg-gray-800 p-4 border-t border-gray-200 dark:border-gray-700">
            <form onSubmit={handleSubmit} className="flex items-center gap-3 container mx-auto">
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Ask a question about the chapter..."
                    className="flex-1 w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-brand-secondary dark:text-white"
                    disabled={isLoading}
                />
                <button
                    type="submit"
                    className="p-3 bg-brand-secondary text-white rounded-full hover:bg-brand-primary disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                    disabled={isLoading || !text.trim()}
                    aria-label="Send message"
                >
                    <SendIcon className="w-5 h-5" />
                </button>
            </form>
        </div>
    );
};

export default MessageInput;
