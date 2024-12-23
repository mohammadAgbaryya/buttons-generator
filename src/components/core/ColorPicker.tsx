import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Popover from '@mui/material/Popover';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { SketchPicker } from 'react-color';
import PaletteIcon from '@mui/icons-material/Palette';
import { isValidColor } from '../../utils';

const ColorPicker: React.FC<{
  id: string;
  value: string;
  onChange: (event: { target: { value: string } }) => void;
  placeholder?: string;
}> = ({ id, value, onChange, placeholder }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
  ) => {
    setAnchorEl(event.currentTarget as HTMLButtonElement);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlePickerChange = (color: { hex: string }) => {
    onChange({ target: { value: color.hex } });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ target: { value: event.target.value } });
  };

  const open = Boolean(anchorEl);

  return (
    <Box>
      <TextField
        id={id}
        fullWidth
        value={value}
        label={value ? placeholder : undefined}
        placeholder={!value ? placeholder : undefined}
        InputProps={{
          startAdornment: (
            <Box
              sx={{
                width: 24,
                height: 21,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: isValidColor(value) ? value : 'transparent',
                borderRadius: '50%',
                border: '1px solid #ccc',
                marginRight: '8px',
                position: 'relative',
              }}
            >
              {!isValidColor(value) && (
                <Box
                  sx={{
                    position: 'absolute',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    color: '#ccc',
                  }}
                >
                  ?
                </Box>
              )}
            </Box>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleClick}>
                <PaletteIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        onChange={handleInputChange}
        inputProps={{ sx: { cursor: 'text' } }}
      />

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <SketchPicker color={value} onChange={handlePickerChange} />
      </Popover>
    </Box>
  );
};

export default ColorPicker;
