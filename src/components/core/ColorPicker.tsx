import React, { useState } from 'react';
import { Box, TextField, Popover, InputAdornment, IconButton } from '@mui/material';
import { SketchPicker } from 'react-color';
import PaletteIcon from '@mui/icons-material/Palette';

const ColorPicker: React.FC<{
  id: string;
  value: string;
  onChange: (event: { target: { value: string } }) => void;
  placeholder?: string;
}> = ({ id, value, onChange, placeholder }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
    setAnchorEl(event.currentTarget as HTMLButtonElement);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (color: { hex: string }) => {
    onChange({ target: { value: color.hex } });
  };

  const open = Boolean(anchorEl);

  return (
    <Box>
      <TextField
        id={id}
        fullWidth
        value={value}
        label={placeholder}
        InputProps={{
          startAdornment: (
            <Box
              sx={{
                width: 24,
                height: 21,
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
        onClick={handleClick}
        inputProps={{ readOnly: true, sx: { cursor: 'pointer' } }}
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
        <SketchPicker color={value} onChange={handleChange} />
      </Popover>
    </Box>
  );
};

export default ColorPicker;
