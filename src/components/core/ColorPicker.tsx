import React, { useState } from 'react';
import { Box, TextField, Popover, InputAdornment, IconButton } from '@mui/material';
import { SketchPicker } from 'react-color';
import PaletteIcon from '@mui/icons-material/Palette';

const ColorPicker: React.FC<{
  id: string;
  value: string;
  onChange: Function;
  placeholder?: string;
}> = ({ id, value, onChange, placeholder }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (color: { hex: string }) => {
    onChange({ target: { value: color.hex } }); // Pass the selected color hex to the parent
  };

  const open = Boolean(anchorEl);

  return (
    <Box>
      {/* Color Picker Input Field */}
      <TextField
        id={id}
        fullWidth
        value={value}
        onChange={onChange} // Allow manual input
        placeholder={placeholder}
        InputProps={{
          startAdornment: (
            <Box
              sx={{
                width: 24,
                height: 24,
                backgroundColor: value,
                borderRadius: '50%',
                border: '1px solid #ccc',
                marginRight: '8px',
              }}
            />
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleClick}>
                <PaletteIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      {/* Popup Color Picker */}
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <SketchPicker color={value} onChange={handleChange} />
      </Popover>
    </Box>
  );
};

export default ColorPicker;
