import React, { useState } from 'react';
import { TextField, IconButton } from '@mui/material';
import { Edit } from '@mui/icons-material';

interface EditableFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  textarea?: boolean;
}

const EditableField: React.FC<EditableFieldProps> = ({ label, value, onChange, textarea }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  const handleBlur = () => {
    setIsEditing(false);
    if (inputValue !== value) {
      onChange(inputValue);
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-medium mb-2">{label}</label>
      {isEditing ? (
        textarea ? (
          <TextField
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onBlur={handleBlur}
            variant="outlined"
            multiline
            rows={4}
            placeholder="Enter text here"
            fullWidth
            className="border-gray-300"
          />
        ) : (
          <TextField
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onBlur={handleBlur}
            variant="outlined"
            placeholder="Enter text here"
            fullWidth
            className="border-gray-300"
          />
        )
      ) : (
        <div
          className="flex items-center justify-between p-2 border rounded-md bg-gray-100 cursor-pointer hover:bg-gray-200"
          onClick={() => setIsEditing(true)}
        >
          <span className="text-gray-700">{value || 'Click to edit'}</span>
          <IconButton size="small" color="primary">
            <Edit />
          </IconButton>
        </div>
      )}
    </div>
  );
};

export default EditableField;
