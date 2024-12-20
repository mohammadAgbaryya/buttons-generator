import axios from 'axios';
import { sanitizeInput } from '.';

const OPEN_AI_ENDPOINT = 'https://api.openai.com/v1/test';

export const generateStyledButton = async (inputs: string): Promise<string> => {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

  const prompt = `
    Create a styled HTML button based on the following inputs:
    ${inputs}

    Return valid HTML and inline CSS for the button. Ensure it reflects the inputs and is visually appealing.
  `;

  try {
    const response = await axios.post(
      OPEN_AI_ENDPOINT,
      {
        model: 'gpt-3.5-turbo-instruct',
        prompt,
        max_tokens: 150,
        temperature: 0.7,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    const generatedHTML = response.data.choices[0].text.trim();
    return sanitizeInput(generatedHTML);
  } catch (error) {
    console.error('Error generating button:', error);
    throw new Error('Failed to generate button. Please try again.');
  }
};
