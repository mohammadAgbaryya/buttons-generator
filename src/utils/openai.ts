import axios from 'axios';
import { sanitizeInput } from '.';
import { OPENAI_API_KEY, OPENAI_ENDPOINT } from '../consts/env';

const generateButtonWithAI = async (inputs: string): Promise<string> => {
  const prompt = `
    Create a styled HTML button based on the following inputs:
    ${inputs}

    Return valid HTML and inline CSS for the button. Ensure it reflects the inputs and is visually appealing.
  `;

  try {
    const response = await axios.post(
      OPENAI_ENDPOINT,
      {
        model: 'gpt-3.5-turbo-instruct',
        prompt,
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

    const generatedHTML = response.data.choices[0].text.trim();
    return sanitizeInput(generatedHTML);
  } catch (error) {
    console.error('Error generating button:', error);
    throw new Error('Failed to generate button. Please try again.');
  }
};

export default generateButtonWithAI;
