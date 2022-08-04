import { useEffect, useState } from 'react';
import { Gif } from '../components/GifGrid';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category: string) => {
  const [gifs, setGifs] = useState([] as Gif[]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newGifs = await getGifs(category);
    setGifs(newGifs);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);

  return {
    gifs,
    isLoading,
  };
};
