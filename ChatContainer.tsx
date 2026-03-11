import { Message } from '../types';
import { MessageBubble } from './MessageBubble';
import { Card, CardContent } from '../components/ui/card';
import { Loader2, Bot } from 'lucide-react';

interface ChatContainerProps {
  messages: Message[];
  isTyping: boolean;
}

export function ChatContainer({ messages, isTyping }: ChatContainerProps) {
  return (
    <Card className="flex-1 border-0 shadow-none bg-transparent">
      <CardContent className="h-full p-4 overflow-y-auto">
        <div className="max-w-3xl mx-auto">
          {messages.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full text-center py-12">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">💙</span>
              </div>
              <h2 className="text-xl font-semibold text-slate-800 mb-2">
                Welcome to SereneChat
              </h2>
              <p className="text-slate-600 max-w-sm">
                I'm here to listen and support you. Share what's on your mind, 
                and I'll respond with care and understanding.
              </p>
            </div>
          )}
          
          {messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}
          
          {isTyping && (
            <div className="flex gap-3 mb-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center">
                <Bot className="w-4 h-4 text-slate-600" />
              </div>
              <div className="bg-white border border-slate-200 px-4 py-3 rounded-2xl rounded-bl-md shadow-sm">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}