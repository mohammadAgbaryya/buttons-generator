import DOMPurify from 'dompurify';
import beautify from 'js-beautify';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import InputConfig from '../models/InputConfig';

export const sanitizeInput = (input: string): string => {
  return DOMPurify.sanitize(input);
};

export const formatHTML = (html: string): string => {
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
