import React, { useState } from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
import beautify from 'js-beautify';
import ToggleGroup from './core/ToggleGroup';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

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
    border: '1px solid #ccc',
    borderRadius: 1,
    minHeight: 274,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#fff',
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
        <Box
          sx={{
            ...placeholderStyles,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Skeleton
            variant="rectangular"
            width={160}
            height={50}
            sx={{
              borderRadius: 2,
            }}
          />
        </Box>
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
              padding: 4,
            }}
          >
            {formattedCode}
          </Box>
        ) : (
          <Box dangerouslySetInnerHTML={{ __html: generatedHTML }} sx={{ ...placeholderStyles }} />
        )
      ) : (
        <Typography
          variant="body1"
          sx={{
            ...placeholderStyles,
            color: '#888',
          }}
        >
          <AutoAwesomeIcon sx={{ color: '#D4AF37', mr: 1 }} />
          Your generated {view === View.CODE ? 'code' : 'button'} will appear here!
        </Typography>
      )}
    </Box>
  );
};

export default GeneratedArea;
