import React, { useState, useEffect, useRef, useCallback } from 'react';
import type { Chat } from '@google/genai';
import { Message } from './types';
import { initChat, sendMessageToAI } from './services/geminiService';
import ChatWindow from './components/ChatWindow';
import MessageInput from './components/MessageInput';
import Header from './components/Header';
import ErrorDisplay from './components/ErrorDisplay';
import ReflectionQuestions from './components/ReflectionQuestions';

const App: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([
        {
            role: 'model',
            content: "Hello. It takes courage to explore the stories we tell ourselves. I'm here to guide you through some powerful ideas from Chapter 4 of 'Managing Leadership Anxiety'. Where should we start our conversation today?",
        },
    ]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const chatRef = useRef<Chat | null>(null);

    useEffect(() => {
        try {
            chatRef.current = initChat();
        } catch (e: any) {
            setError(`Failed to initialize AI Chat: ${e.message}`);
            console.error(e);
        }
    }, []);

    const handleSendMessage = useCallback(async (text: string) => {
        if (!text.trim() || isLoading) return;

        const newUserMessage: Message = { role: 'user', content: text };
        setMessages(prevMessages => [...prevMessages, newUserMessage]);
        setIsLoading(true);
        setError(null);

        try {
            if (!chatRef.current) {
                throw new Error("Chat is not initialized.");
            }
            const aiResponse = await sendMessageToAI(chatRef.current, text);
            const newAiMessage: Message = { role: 'model', content: aiResponse };
            setMessages(prevMessages => [...prevMessages, newAiMessage]);
        } catch (e: any) {
            const errorMessage = `An error occurred: ${e.message}. Please check your API key and network connection.`;
            setError(errorMessage);
            const errorAiMessage: Message = { role: 'model', content: "I'm sorry, I encountered an error and can't respond right now." };
             setMessages(prevMessages => [...prevMessages, errorAiMessage]);
            console.error(e);
        } finally {
            setIsLoading(false);
        }
    }, [isLoading]);

    return (
        <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-900 font-sans">
            <Header />
            <ChatWindow messages={messages} isLoading={isLoading} />
            <ErrorDisplay error={error} />
            <ReflectionQuestions onQuestionSelect={handleSendMessage} />
            <MessageInput onSendMessage={handleSendMessage} isLoading={isLoading} />
        </div>
    );
};

export default App;