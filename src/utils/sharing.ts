export type SocialPlatform = 'twitter' | 'facebook' | 'linkedin';

export function generateShareUrl(platform: SocialPlatform, imageUrl: string, quote: string): string {
  const encodedQuote = encodeURIComponent(quote);
  const encodedUrl = encodeURIComponent(imageUrl);

  switch (platform) {
    case 'twitter':
      return `https://twitter.com/intent/tweet?text=${encodedQuote}&url=${encodedUrl}`;
    case 'facebook':
      return `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
    case 'linkedin':
      return `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
    default:
      throw new Error('Unsupported platform');
  }
}

export function openShareWindow(url: string): void {
  if (!url || url.trim() === '') {
    console.error('Invalid URL provided to openShareWindow:', url);
    return;
  }

  const width = 550;
  const height = 400;
  const left = (window.innerWidth - width) / 2;
  const top = (window.innerHeight - height) / 2;

  const newWindow = window.open(
    url,
    'share',
    `width=${width},height=${height},left=${left},top=${top},toolbar=0,status=0`
  );

  if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
    console.error('Popup blocked or failed to open the sharing window.');
  }
}
