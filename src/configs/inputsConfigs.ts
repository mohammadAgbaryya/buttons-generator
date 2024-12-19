const inputsConfigs = [
  {
    id: 'color',
    name: 'Color',
    type: 'text',
    placeholder: "Enter a color (e.g., 'red')",
    validator: (value: string) => (value ? '' : 'Color is required'),
  },
  {
    id: 'size',
    name: 'Size',
    type: 'text',
    placeholder: "Enter a size (e.g., 'large')",
    validator: (value: string) => (value ? '' : 'Size is required'),
  },
  {
    id: 'text',
    name: 'Button Text',
    type: 'text',
    placeholder: 'Enter button text',
    validator: (value: string) => (value ? '' : 'Text is required'),
  },
];

export default inputsConfigs;
