import { BotResponse } from '../types';

export const BOT_RESPONSES: BotResponse[] = [
  {
    keywords: ['sad', 'depressed', 'down', 'unhappy', 'crying', 'cry'],
    responses: [
      "I hear you, and it's okay to feel this way. Your feelings are valid.",
      "That sounds really difficult. I'm here with you through this.",
      "It takes courage to share how you're feeling. Thank you for trusting me.",
      "I'm sorry you're going through this. You don't have to face it alone.",
    ]
  },
  {
    keywords: ['anxious', 'anxiety', 'worried', 'nervous', 'scared', 'panic'],
    responses: [
      "Anxiety can feel overwhelming. Let's take a breath together. You're safe right now.",
      "It's understandable to feel that way. What's one small thing that feels manageable right now?",
      "Those feelings are real, but they don't define you. You've gotten through difficult moments before.",
      "I'm here. Would it help to tell me more about what's on your mind?",
    ]
  },
  {
    keywords: ['lonely', 'alone', 'isolated', 'no friends', 'nobody'],
    responses: [
      "Feeling lonely is painful, but you're truly not alone. I'm here to listen.",
      "Connection is important. Even small interactions can help. What brings you comfort?",
      "It's brave to reach out when you're feeling isolated. I'm glad you're here.",
      "Loneliness is a feeling, not your permanent state. This moment will pass.",
    ]
  },
  {
    keywords: ['tired', 'exhausted', 'burnout', 'overwhelmed', 'stressed'],
    responses: [
      "It sounds like you've been carrying a lot. It's okay to rest.",
      "Your body and mind are telling you something. What would rest look like for you right now?",
      "You don't have to do everything at once. What's one thing you can put down for now?",
      "I hear how tired you are. Be gentle with yourself today.",
    ]
  },
  {
    keywords: ['happy', 'good', 'great', 'wonderful', 'excited'],
    responses: [
      "That's wonderful to hear! What's bringing you joy today?",
      "I'm glad you're feeling good. Those moments are worth savoring.",
      "It's lovely when things feel lighter. What contributed to this positive feeling?",
      "Thank you for sharing that with me. Your happiness matters.",
    ]
  },
  {
    keywords: ['thank', 'thanks', 'appreciate', 'grateful'],
    responses: [
      "You're very welcome. I'm always here for you.",
      "It's my privilege to listen. Thank you for trusting me.",
      "You deserve support. I'm glad I can be here for you.",
      "Anytime. Remember, reaching out is a sign of strength.",
    ]
  },
  {
    keywords: ['help', 'advice', 'what should i', 'guidance'],
    responses: [
      "I'm here to listen and support you. What's on your mind?",
      "While I can't give professional advice, I can help you explore your thoughts. What would feel helpful to talk about?",
      "Sometimes just talking things through can bring clarity. What's weighing on you?",
      "I care about what you're going through. Tell me more.",
    ]
  }
];

export const DEFAULT_RESPONSES = [
  "Thank you for sharing that with me. I'm here to listen.",
  "I hear you. Your feelings matter.",
  "That's an important thing to share. Can you tell me more?",
  "I'm here with you. What else would you like to talk about?",
  "It takes courage to express yourself. I appreciate you opening up.",
  "I'm listening. Please continue whenever you're ready.",
  "Your thoughts and feelings are valid here.",
];

export function getBotResponse(userMessage: string): string {
  const lowerMessage = userMessage.toLowerCase();
  
  for (const category of BOT_RESPONSES) {
    if (category.keywords.some(keyword => lowerMessage.includes(keyword))) {
      const responses = category.responses;
      return responses[Math.floor(Math.random() * responses.length)];
    }
  }
  
  return DEFAULT_RESPONSES[Math.floor(Math.random() * DEFAULT_RESPONSES.length)];
}