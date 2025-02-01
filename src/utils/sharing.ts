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

export const shareToInstagram = async (url: string) => {
  try {
    // Fetch the image as a blob
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to download image');
    const blob = await response.blob();

    // Check if the Web Share API is supported
    if (navigator.share) {
      const caption =
        "✨ Just created this stunning design with ImprintWords! 🎨💬 Design your own custom quotes and posters effortlessly. Try it now: https://imprint-words.vercel.app/";

      await navigator.share({
        title: 'Check out this design!',
        text: caption,
        files: [new File([blob], 'image.png', { type: blob.type })],
      });

      alert('Image shared successfully!');
    } else {
      // Fallback for unsupported browsers
      const link = document.createElement('a');
      link.href = url;
      link.download = 'image.png';
      link.click();

      alert(
        'Your browser does not support direct sharing. The image has been downloaded. Please upload it to Instagram manually.'
      );
    }
  } catch (error) {
    console.error('Error sharing to Instagram:', error);
    alert('Failed to share the image. Please try again.');
  }
};