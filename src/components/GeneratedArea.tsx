import React, { useState } from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
import beautify from 'js-beautify';
import ToggleGroup from './core/ToggleGroup';

type GeneratedAreaProps = {
  loading: boolean;
  generatedHTML: string | null;
};

enum View {
  UI = 'ui',
  CODE = 'code',
}

const GeneratedArea: React.FC<GeneratedAreaProps> = ({ loading, generatedHTML }) => {
  const [view, setView] = useState<View>(View.UI);

  const placeholderStyles = {
    padding: 2,
    border: '1px solid #ccc',
    borderRadius: 5,
    minHeight: 270,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const formatHTML = (html: string): string => {
    return beautify.html(html, {
      indent_size: 2,
      wrap_line_length: 80,
      end_with_newline: true,
    });
  };

  const formattedCode = generatedHTML ? formatHTML(generatedHTML) : '';

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <ToggleGroup
        value={view}
        options={[
          { value: View.UI, label: 'Show UI' },
          { value: View.CODE, label: 'Show Code' },
        ]}
        onChange={(newView) => setView(newView as View)}
      />

      {loading ? (
        <Skeleton variant="rectangular" sx={placeholderStyles} />
      ) : generatedHTML ? (
        view === View.CODE ? (
          <Box
            component="pre"
            sx={{
              ...placeholderStyles,
              overflow: 'auto',
              textAlign: 'left',
              fontFamily: 'monospace',
              whiteSpace: 'pre-wrap',
              wordWrap: 'break-word',
              maxHeight: '400px',
            }}
          >
            {formattedCode}
          </Box>
        ) : (
          <Box dangerouslySetInnerHTML={{ __html: generatedHTML }} sx={placeholderStyles} />
        )
      ) : (
        <Typography
          variant="body1"
          sx={{
            ...placeholderStyles,
            color: '#888',
          }}
        >
          Your generated {view === View.CODE ? 'code' : 'button'} will appear here!
        </Typography>
      )}
    </Box>
  );
};

export default GeneratedArea;
