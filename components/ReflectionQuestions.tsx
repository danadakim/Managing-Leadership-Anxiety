import React from 'react';
import { REFLECTION_QUESTIONS } from '../constants';
import { LightbulbIcon } from './Icons';

interface ReflectionQuestionsProps {
    onQuestionSelect: (question: string) => void;
}

const ReflectionQuestions: React.FC<ReflectionQuestionsProps> = ({ onQuestionSelect }) => {
    return (
        <div className="bg-white dark:bg-gray-800 pt-4 px-4">
            <div className="container mx-auto">
                <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3 flex items-center gap-2">
                    <LightbulbIcon className="w-5 h-5" />
                    Reflection Starters
                </h3>
                <div className="flex flex-wrap gap-2">
                    {REFLECTION_QUESTIONS.flatMap(section => section.questions).map((question, index) => (
                        <button
                            key={index}
                            onClick={() => onQuestionSelect(question)}
                            className="px-3 py-1.5 text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-secondary"
                            title={question}
                        >
                            "{question.substring(0, 50)}..."
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ReflectionQuestions;
