import axios from 'axios';
import { OPENAI_API_KEY, OPENAI_ENDPOINT } from '../consts/env';
import GPT4_SYSTEM_PROMPT from '../consts/gpt4SystemPrompt';
import { sanitizeInput } from './security';

const generateButtonWithAI = async (inputs: string): Promise<string> => {
  const messages = [
    {
      role: 'system',
      content: GPT4_SYSTEM_PROMPT,
    },
    {
      role: 'user',
      content: `Generate a button based on these inputs: ${inputs}`,
    },
  ];

  try {
    const response = await axios.post(
      OPENAI_ENDPOINT,
      {
        model: 'gpt-4',
        messages,
        max_tokens: 150,
        temperature: 0.7,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
      }
    );

    // Extract the response and sanitize it
    const generatedHTML = response.data.choices[0].message.content.trim();
    return sanitizeInput(generatedHTML);
  } catch (error) {
    console.error('Error generating button:', error);
    throw new Error('Failed to generate button. Please try again.');
  }
};

export default generateButtonWithAI;
