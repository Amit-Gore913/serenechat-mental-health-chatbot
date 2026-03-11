import { Button } from '../components/ui/button';
import { MessageSquare } from 'lucide-react';

interface SessionControlsProps {
  onClearChat: () => void;
  messageCount: number;
}

export function SessionControls({ onClearChat, messageCount }: SessionControlsProps) {
  return (
    <div className="border-b border-slate-200 bg-white px-4 py-3">
      <div className="max-w-3xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <MessageSquare className="w-4 h-4 text-blue-600" />
          </div>
          <div>
            <h1 className="font-semibold text-slate-800">SereneChat</h1>
            <p className="text-xs text-slate-500">
              {messageCount === 0 ? 'Start a conversation' : `${messageCount} messages`}
            </p>
          </div>
        </div>
        
        {messageCount > 0 && (
          <Button
            onClick={onClearChat}
            variant="ghost"
            size="sm"
            className="text-slate-600 hover:text-slate-800 hover:bg-slate-100"
            aria-label="Start new chat"
          >
            New Chat
          </Button>
        )}
      </div>
    </div>
  );
}