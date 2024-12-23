import beautify from 'js-beautify';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import InputConfig from '../models/InputConfig';
import { hasOnlyAllowedChars } from './security';

export const formatHTML = (html: string): string => {
  if (!html) return '';

  return beautify.html(html, {
    indent_size: 2,
    wrap_line_length: 80,
    end_with_newline: true,
  });
};

export const highlightCode = (code: string): string => {
  return Prism.highlight(code, Prism.languages.html, 'html');
};

export const getInitialValues = (
  configs: InputConfig[]
): Record<string, string> => {
  const initialValues: Record<string, string> = {};
  configs.forEach((input) => {
    initialValues[input.id] = input.props?.defaultValue || '';
  });
  return initialValues;
};

export const isValidColor = (color: string): boolean => {
  const s = new Option().style;
  s.color = color;
  return s.color !== '';
};

export const validateInput = (inputName: string, value?: string): string => {
  if (!value || value.trim() === '') {
    return `${inputName} is required!`;
  }

  if (!hasOnlyAllowedChars(value)) {
    return `${inputName} contains unallowed characters.`;
  }

  return '';
};
