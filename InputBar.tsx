import { useState, KeyboardEvent } from 'react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Send } from 'lucide-react';
import { containsSensitiveContent, CRISIS_RESPONSE } from '../utils/safetyFilters';
import { getBotResponse } from '../utils/botResponses';

interface InputBarProps {
  onSendMessage: (text: string, isFiltered: boolean) => void;
  disabled: boolean;
}

export function InputBar({ onSendMessage, disabled }: InputBarProps) {
  const [input, setInput] = useState('');

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed || disabled) return;

    const isFiltered = containsSensitiveContent(trimmed);
    onSendMessage(trimmed, isFiltered);
    setInput('');
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="border-t border-slate-200 bg-white p-4">
      <div className="max-w-3xl mx-auto flex gap-3">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
          disabled={disabled}
          className="flex-1 h-12 text-base focus:ring-2 focus:ring-blue-500"
          aria-label="Message input"
        />
        <Button
          onClick={handleSend}
          disabled={disabled || !input.trim()}
          className="h-12 px-6 bg-blue-500 hover:bg-blue-600 text-white"
          aria-label="Send message"
        >
          <Send className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}