import { Message } from '../types';
import { User, Bot, AlertTriangle } from 'lucide-react';
import { cn } from '../utils/cn';

interface MessageBubbleProps {
  message: Message;
}

export function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.sender === 'user';
  const timeStr = message.timestamp.toLocaleTimeString('en-US', { 
    hour: 'numeric', 
    minute: '2-digit',
    hour12: true 
  });

  return (
    <div className={cn(
      "flex gap-3 mb-4 animate-in fade-in slide-in-from-bottom-2 duration-300",
      isUser ? "flex-row-reverse" : "flex-row"
    )}>
      <div className={cn(
        "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center",
        isUser ? "bg-blue-500" : "bg-slate-200"
      )}>
        {isUser ? (
          <User className="w-4 h-4 text-white" />
        ) : (
          <Bot className="w-4 h-4 text-slate-600" />
        )}
      </div>
      
      <div className={cn(
        "max-w-xs sm:max-w-md lg:max-w-lg px-4 py-3 rounded-2xl shadow-sm",
        isUser 
          ? "bg-blue-500 text-white rounded-br-md" 
          : "bg-white text-slate-800 border border-slate-200 rounded-bl-md"
      )}>
        {message.isFiltered && (
          <div className="flex items-center gap-1 mb-2 text-amber-600">
            <AlertTriangle className="w-3 h-3" />
            <span className="text-xs font-medium">Safety resources provided</span>
          </div>
        )}
        <p className="text-sm leading-relaxed whitespace-pre-wrap">
          {message.text}
        </p>
        <span className={cn(
          "text-xs mt-2 block",
          isUser ? "text-blue-100" : "text-slate-400"
        )}>
          {timeStr}
        </span>
      </div>
    </div>
  );
}