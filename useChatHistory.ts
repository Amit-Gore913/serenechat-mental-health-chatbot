import { useState, useEffect } from 'react';
import { Message } from '../types';

const STORAGE_KEY = 'serenechat_history';

export function useChatHistory() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        const messagesWithDates = parsed.map((msg: any) => ({
          ...msg,
          timestamp: new Date(msg.timestamp)
        }));
        setMessages(messagesWithDates);
      } catch (error) {
        console.error('Failed to load chat history:', error);
      }
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    }
  }, [messages, isLoaded]);

  const addMessage = (text: string, sender: 'user' | 'bot', isFiltered = false) => {
    const newMessage: Message = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      text,
      sender,
      timestamp: new Date(),
      isFiltered
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const clearHistory = () => {
    setMessages([]);
  };

  return { messages, addMessage, clearHistory, isLoaded };
}