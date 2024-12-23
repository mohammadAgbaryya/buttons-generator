import axios from 'axios';
import generateButtonWithAI from '../../../src/utils/openai';
import { sanitizeInput } from '../../../src/utils/security';

jest.mock('axios');

jest.mock('../../../src/utils/security', () => ({
  sanitizeInput: jest.fn((input) => input),
}));

jest.mock('../../../src/consts/env', () => ({
  OPENAI_API_KEY: 'test-api-key',
  OPENAI_ENDPOINT: 'test-api-ep',
}));

describe('generateButtonWithAI', () => {
  const mockedAxios = axios as jest.Mocked<typeof axios>;

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return sanitized HTML for a valid API response', async () => {
    // Arrange
    const mockInputs = 'color: red; text: Click Me; size: large;';
    const mockResponse = {
      data: {
        choices: [
          {
            message: {
              content:
                '<button style="color: red; font-size: large;">Click Me</button>',
            },
          },
        ],
      },
    };

    mockedAxios.post.mockResolvedValueOnce(mockResponse);

    // Act
    const result = await generateButtonWithAI(mockInputs);

    // Assert
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
