// src/utils/sharing.ts
export const shareToFacebook = (url: string) => {
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
};

export const shareToTwitter = async (url: string, text: string = '') => {
  // Step 1: Open Twitter's tweet composer with pre-filled text
  window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, '_blank');

  try {
    // Step 2: Download the image
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to download image');

    const blob = await response.blob();
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'image.png'; // Set the file name
    link.click();

    // Step 3: Show instructions
    alert('The image has been downloaded. Please attach it to your tweet manually.');
  } catch (error) {
    console.error('Error downloading image:', error);
    alert('Failed to download the image. Please try again.');
  }
};

export const shareToInstagram = () => {
  alert('Download the image and share it on Instagram manually.');
};