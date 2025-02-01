// src/utils/stockPhotoAPI.ts
import axios from 'axios';

const UNSPLASH_API_KEY = import.meta.env.VITE_UNSPLASH_API_KEY;

export const fetchStockPhotos = async (query: string, page: number = 1, perPage: number = 10) => {
  try {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query,
        page,
        per_page: perPage,
        client_id: UNSPLASH_API_KEY,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching stock photos:', error);
    return [];
  }
};

// Add this function to trigger a download event
export const triggerDownload = async (photoId: string) => {
  try {
    await axios.get(`https://api.unsplash.com/photos/${photoId}/download`, {
      params: {
        client_id: UNSPLASH_API_KEY,
      },
    });
  } catch (error) {
    console.error('Error triggering download:', error);
  }
};