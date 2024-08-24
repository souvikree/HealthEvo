import React, { useState } from 'react';
import Image from 'next/image';
import { Box, Typography, TextField, IconButton } from '@mui/material';
import { Edit, CloudUpload } from '@mui/icons-material';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { selectUser } from '../../redux/slices/selectors';
import { setUser } from '../../redux/slices/userSlice';

interface EditableFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  textarea?: boolean;
}

const EditableField: React.FC<EditableFieldProps> = ({ label, value, onChange, textarea }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };

  return (
    <Box className="mb-4">
      <Typography variant="body1" className="font-medium text-gray-800 mb-1">
        {label}
      </Typography>
      {textarea ? (
        <TextField
          multiline
          rows={4}
          value={value}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          className="border-gray-300"
          sx={{ borderRadius: 1 }}
        />
      ) : (
        <TextField
          value={value}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          className="border-gray-300"
          sx={{ borderRadius: 1 }}
        />
      )}
    </Box>
  );
};

const Profile: React.FC = () => {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFieldChange = (field: string, value: string) => {
    dispatch(setUser({ [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
      // Optionally dispatch action to update the profile picture in the state
    }
  };

  return (
    <Box className=" p-6 rounded-lg shadow-lg  max-w-lg mx-auto">
      <Typography variant="h5" className="font-semibold text-gray-900 mb-6">
        Profile Information
      </Typography>
      <Box className="flex items-center mb-8">
        <Box className="relative w-28 h-28 rounded-full overflow-hidden border border-gray-300">
          <Image
            src={selectedFile ? URL.createObjectURL(selectedFile) : user.profilePicture || '/default-avatar.png'}
            alt="Profile"
            layout="fill"
            objectFit="cover"
          />
        </Box>
        <Box className="ml-6">
          <Typography variant="h6" className="font-semibold text-gray-900">
            {user.name}
          </Typography>
          <Typography variant="body2" className="text-gray-600">
            {user.email}
          </Typography>
          <IconButton
            color="primary"
            className="mt-2"
            onClick={() => alert('Edit profile feature coming soon!')}
          >
            <Edit />
          </IconButton>
        </Box>
      </Box>
      <Box className="mb-8">
        <Typography variant="h6" className="text-gray-900 font-semibold mb-4">
          Profile Picture
        </Typography>
        <Box className="flex flex-col items-center">
          <label 
            htmlFor="profile-picture-input" 
            className="flex flex-col items-center cursor-pointer"
          >
            <Box className="relative w-28 h-28 border border-gray-300 rounded-full overflow-hidden flex items-center justify-center bg-gray-100">
              {selectedFile ? (
                <Image
                  src={URL.createObjectURL(selectedFile)}
                  alt="Selected"
                  layout="fill"
                  objectFit="cover"
                />
              ) : (
                <CloudUpload className="text-gray-500" style={{ fontSize: 40 }} />
              )}
            </Box>
            <input
              id="profile-picture-input"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
            <Typography className="mt-2 text-blue-600">Upload</Typography>
          </label>
          {selectedFile && (
            <Typography variant="body2" className="mt-2 text-gray-700">
              {selectedFile.name}
            </Typography>
          )}
        </Box>
      </Box>
      <EditableField
        label="Address"
        value={user.address || ''}
        onChange={(value) => handleFieldChange('address', value)}
      />
      <EditableField
        label="Medical History"
        value={user.medicalHistory || ''}
        onChange={(value) => handleFieldChange('medicalHistory', value)}
        textarea
      />
    </Box>
  );
};

export default Profile;
