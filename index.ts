export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  isFiltered?: boolean;
}

export interface BotResponse {
  keywords: string[];
  responses: string[];
}