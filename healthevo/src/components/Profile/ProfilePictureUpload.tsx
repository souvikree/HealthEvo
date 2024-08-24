// import React, { useState } from 'react';
// import Image from 'next/image';
// import { Button, Box, Typography } from '@mui/material';
// import { CloudUpload } from '@mui/icons-material';

// const ProfilePictureUpload: React.FC = () => {
//     const [selectedFile, setSelectedFile] = useState<File | null>(null);

//     const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         if (e.target.files && e.target.files[0]) {
//             setSelectedFile(e.target.files[0]);
//         }
//     };

//     return (
//         <div className="mt-6 p-4 bg-white rounded-lg shadow-md mb-4">
//             <Typography variant="h6" className="text-gray-700 font-semibold mb-4">
//                 Profile Picture
//             </Typography>
//             <Box className="flex flex-col items-center">
//                 <label 
//                     htmlFor="profile-picture-input" 
//                     className="flex flex-col items-center cursor-pointer"
//                 >
//                     <Box className="relative w-24 h-24">
//                         {selectedFile ? (
//                             <Image
//                                 src={URL.createObjectURL(selectedFile)}
//                                 alt="Selected"
//                                 layout="fill"
//                                 objectFit="cover"
//                                 className="rounded-full"
//                             />
//                         ) : (
//                             <Box className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center">
//                                 <CloudUpload style={{ color: '#007BFF', fontSize: 40 }} />
//                             </Box>
//                         )}
//                     </Box>
//                     <input
//                         id="profile-picture-input"
//                         type="file"
//                         accept="image/*"
//                         onChange={handleFileChange}
//                         className="hidden"
//                     />
//                     <Typography className="mt-2 text-blue-500">Upload</Typography>
//                 </label>
//                 {selectedFile && (
//                     <Typography variant="body2" className="mt-2 text-gray-600">
//                         {selectedFile.name}
//                     </Typography>
//                 )}
//             </Box>
//         </div>
//     );
// };

// export default ProfilePictureUpload;
