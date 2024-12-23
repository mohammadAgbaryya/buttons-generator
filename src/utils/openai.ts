import axios from 'axios';
import { sanitizeInput } from '.';
import { OPENAI_API_KEY, OPENAI_ENDPOINT } from '../consts/env';

const generateButtonWithAI = async (inputs: string): Promise<string> => {
  const messages = [
    {
      role: 'system',
      content: `
        You are a web development assistant. Your task is to generate a single styled HTML button with inline CSS.
        The button must:
        - Reflect the user provided inputs.
        - Include valid HTML and inline CSS only.
        - Use the exact text provided for the button label.
        - Handle vague inputs by interpreting them into appropriate CSS values.
        - Interpret vague descriptors (e.g., "very dark" or "super huge", or "super small") into concrete CSS values that are visually appropriate.
        - Sanitize and validate all inputs to prevent invalid or harmful HTML or CSS.
        - Ensure the generated button width is between 100px and 350px, regardless of the user's input. If the input uses unconventional units (e.g., rem, em, %, or vague descriptors like "very very big button"), convert them into pixel values within the specified range.
        - Make the button height proportional to its width to ensure a visually appealing design, slightly increasing the height as the width grows larger.
        - Handle large button text gracefully: if the text can fit within the width range, ensure it fits without breaking. If it exceeds the width, truncate the text with an ellipsis ("...").
        - Return only the valid HTML for the button without any additional text or explanation.
      `
        .replace(/\s+/g, ' ')
        .trim(),
    },
    {
      role: 'user',
      content: `Generate a button based on these inputs: ${inputs}`
        .replace(/\s+/g, ' ')
        .trim(),
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
