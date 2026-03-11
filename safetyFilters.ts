export const SENSITIVE_KEYWORDS = [
  'suicide',
  'kill myself',
  'end my life',
  'want to die',
  'hurt myself',
  'self harm',
  'cut myself',
  'overdose',
  'no point living',
  'better off dead',
  'hate everyone',
  'worthless',
  'hopeless',
];

export const CRISIS_RESPONSE = "I care about your safety and want you to know you're not alone. If you're in crisis, please reach out for help:\n\n• National Suicide Prevention Lifeline: 988\n• Crisis Text Line: Text HOME to 741741\n• International resources: findahelpline.com\n\nYou matter, and there are people who want to support you.";

export function containsSensitiveContent(text: string): boolean {
  const lowerText = text.toLowerCase();
  return SENSITIVE_KEYWORDS.some(keyword => 
    lowerText.includes(keyword.toLowerCase())
  );
}