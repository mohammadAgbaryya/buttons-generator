import DOMPurify from 'dompurify';

export const sanitizeInput = (input: string): string => {
  const purifiedInput = DOMPurify.sanitize(input);
  return purifiedInput;
};

export const hasOnlyAllowedChars = (input: string): boolean => {
  const allowedCharsRegex = /^[a-zA-Z0-9#.,()%\- ]*$/;
  return allowedCharsRegex.test(input);
};
