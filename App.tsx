import { useState } from 'react';
import { useChatHistory } from './hooks/useChatHistory';
import { ChatContainer } from './components/ChatContainer';
import { InputBar } from './components/InputBar';
import { SessionControls } from './components/SessionControls';
import { getBotResponse } from './utils/botResponses';
import { CRISIS_RESPONSE } from './utils/safetyFilters';

function App() {
  const { messages, addMessage, clearHistory, isLoaded } = useChatHistory();
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = (text: string, isFiltered: boolean) => {
    addMessage(text, 'user', isFiltered);
    
    setIsTyping(true);
    
    setTimeout(() => {
      const response = isFiltered ? CRISIS_RESPONSE : getBotResponse(text);
      addMessage(response, 'bot');
      setIsTyping(false);
    }, 1000);
  };

  const handleClearChat = () => {
    clearHistory();
  };

  if (!isLoaded) {
    return (
      <div className="h-screen flex items-center justify-center bg-slate-50">
        <div className="text-slate-500">Loading...</div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col bg-slate-50">
      <SessionControls 
        onClearChat={handleClearChat} 
        messageCount={messages.length} 
      />
      
      <ChatContainer 
        messages={messages} 
        isTyping={isTyping} 
      />
      
      <InputBar 
        onSendMessage={handleSendMessage} 
        disabled={isTyping} 
      />
    </div>
  );
}

export default App;