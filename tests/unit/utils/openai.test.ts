import axios from 'axios';
import generateButtonWithAI from '../../../src/utils/openai';
import { sanitizeInput } from '../../../src/utils';

jest.mock('axios');

jest.mock('../../../src/utils', () => ({
  sanitizeInput: jest.fn((input) => input),
}));

jest.mock('../../../src/consts/env', () => ({
  OPENAI_API_KEY: 'test-api-key',
  OPENAI_ENDPOINT: 'https://api.openai.com/v1/completions',
}));

describe('generateButtonWithAI', () => {
  const mockedAxios = axios as jest.Mocked<typeof axios>;

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should generate a button with valid HTML and CSS based on inputs', async () => {
    // Arrange
    const mockInputs = 'color: red; text: Click Me; size: large;';
    const mockResponse = {
      data: {
        choices: [
          {
            text: '<button style="color: red; font-size: large;">Click Me</button>',
          },
        ],
      },
    };

    mockedAxios.post.mockResolvedValueOnce(mockResponse);

    // Act
    const result = await generateButtonWithAI(mockInputs);

    // Assert
    expect(mockedAxios.post).toHaveBeenCalledWith(
      'https://api.openai.com/v1/completions',
      expect.objectContaining({
        model: 'gpt-3.5-turbo-instruct',
        prompt: expect.stringContaining(
          'Create a styled HTML button based on the following inputs'
        ),
        max_tokens: 150,
        temperature: 0.7,
      }),
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer test-api-key`,
        },
      }
    );
    expect(sanitizeInput).toHaveBeenCalledWith(
      '<button style="color: red; font-size: large;">Click Me</button>'
    );
    expect(result).toBe(
      '<button style="color: red; font-size: large;">Click Me</button>'
    );
  });

  it('should throw an error when the API request fails', async () => {
    // Arrange
    const mockInputs = 'color: blue; text: Submit;';
    mockedAxios.post.mockRejectedValueOnce(new Error('API error'));

    // Act & Assert
    await expect(generateButtonWithAI(mockInputs)).rejects.toThrow(
      'Failed to generate button. Please try again.'
    );

    expect(mockedAxios.post).toHaveBeenCalledTimes(1);
  });
});
