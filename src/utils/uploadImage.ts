// src/utils/uploadImage.ts
export const uploadImage = async (dataUrl: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      const formData = new FormData();
      formData.append('file', dataUrl);
      formData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);
  
      fetch(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`, {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((result) => {
          if (result.secure_url) {
            resolve(result.secure_url); // Return the uploaded image URL
          } else {
            reject(new Error('Failed to upload image'));
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  };