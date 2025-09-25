import React, { useState, useEffect, useRef } from 'react';
import { WhatsAppIcon, CloseIcon } from './icons/SocialIcons';

interface Message {
  id: number;
  text: string;
  sender: 'bot' | 'user';
}

const TypingIndicator: React.FC = () => (
  <div className="flex items-center space-x-1.5 p-2">
    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse-dot-1"></div>
    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse-dot-2"></div>
    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse-dot-3"></div>
  </div>
);

const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const initialMessages: Message[] = [
    { id: 1, text: "Hi there! 👋 I'm a bot, but Shubham is not far.", sender: 'bot' },
  ];

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([initialMessages[0]]);
      setIsTyping(true);

      setTimeout(() => {
        setMessages(prev => [...prev, { id: 2, text: "Have a project in mind or a question about my work? Let's talk!", sender: 'bot' }]);
        setIsTyping(false);
      }, 2500);
    }
  }, [isOpen]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);


  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40">
        <button 
          onClick={toggleChat}
          className="bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300"
          aria-label={isOpen ? "Close chat" : "Open chat"}
        >
          {isOpen ? <CloseIcon className="w-8 h-8"/> : <WhatsAppIcon className="w-8 h-8" />}
        </button>
      </div>

      <div 
        className={`fixed bottom-24 right-6 z-40 w-80 md:w-96 bg-gray-800 rounded-lg shadow-2xl border border-gray-700 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
      >
        <header className="bg-gray-900 p-4 rounded-t-lg flex justify-between items-center">
          <div>
            <h3 className="text-white font-bold">Chat with Shubham</h3>
            <p className="text-sm text-gray-400">Usually replies within a few hours</p>
          </div>
          <button onClick={toggleChat} className="text-gray-400 hover:text-white" aria-label="Close chat window">
            <CloseIcon className="w-6 h-6"/>
          </button>
        </header>

        <div className="p-4 h-80 overflow-y-auto bg-gray-800/50">
          {messages.map((msg) => (
             <div key={msg.id} className={`flex ${msg.sender === 'bot' ? 'justify-start' : 'justify-end'} mb-3`}>
                <div className={`py-2 px-4 rounded-lg max-w-[80%] ${msg.sender === 'bot' ? 'bg-gray-700 text-white' : 'bg-cyan-600 text-white'}`}>
                  {msg.text}
                </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start mb-3">
              <div className="py-2 px-4 rounded-lg bg-gray-700">
                <TypingIndicator />
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>
        
        <footer className="p-4 bg-gray-900 rounded-b-lg">
          <a
            href="https://wa.me/910000000000?text=Hello%20Shubham!"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-green-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-600 transition-colors"
          >
            Start a Chat on WhatsApp
          </a>
        </footer>
      </div>
    </>
  );
};

export default WhatsAppWidget;