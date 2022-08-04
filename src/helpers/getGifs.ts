import { GifResponse } from '../types/GifResponse';

const getGifs = async (category: string) => {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
      category
    )}&limit=10&api_key=${import.meta.env.VITE_API_KEY}`
  );

  const { data }: GifResponse = await response.json();

  const gifs = data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.downsized_medium.url,
  }));
  return gifs;
};

export { getGifs };
