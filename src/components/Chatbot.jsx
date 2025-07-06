// components/ChatBot.jsx
import { useState } from 'react';
import { FaRobot } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { from: 'bot', text: 'Hi! How can I help you today?' }
    ]);
    const [input, setInput] = useState('');

    const sendMessage = () => {
        if (!input.trim()) return;
        setMessages([...messages, { from: 'user', text: input }]);
        setInput('');

        // Fake bot reply
        setTimeout(() => {
            setMessages((prev) => [...prev, { from: 'bot', text: "I'm just a demo 🤖" }]);
        }, 600);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {/* Toggle button */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="w-14 h-14 rounded-full bg-blue-600 dark:bg-yellow-600 text-white flex items-center justify-center shadow-lg hover:bg-blue-700"
                >
                    <FaRobot size={28} />
                </button>
            )}

            {/* Chat window */}
            {isOpen && (
                <div className="w-80 h-96 bg-white dark:bg-zinc-800 rounded-xl shadow-xl flex flex-col overflow-hidden">
                    <div className="flex items-center justify-between bg-blue-600 dark:bg-yellow-600 text-white px-4 py-2">
                        <span>ChatBot</span>
                        <button onClick={() => setIsOpen(false)}><IoMdCloseCircle /></button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 space-y-2 text-sm">
                        {messages.map((msg, idx) => (
                            <div
                                key={idx}
                                className={`px-3 py-2 rounded-lg max-w-[80%] ${msg.from === 'bot'
                                    ? 'bg-gray-200 dark:bg-zinc-700 text-black dark:text-white self-start'
                                    : 'bg-blue-500 dark:bg-yellow-600 text-white self-end'
                                    }`}
                            >
                                {msg.text}
                            </div>
                        ))}
                    </div>

                    <div className="flex border-t border-gray-300 dark:border-zinc-600">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                            className="flex-1 px-3 py-2 outline-none text-black dark:text-white bg-white dark:bg-zinc-800"
                            placeholder="Type your message..."
                        />
                        <button
                            onClick={sendMessage}
                            className="px-4 bg-blue-600 text-white hover:bg-blue-700 dark:bg-yellow-600"
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatBot;
