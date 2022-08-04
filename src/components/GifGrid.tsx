import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';
import GifItem from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

type Props = {
  category: string;
};

export type Gif = {
  id: string;
  title: string;
  url: string;
};

const GifGrid = ({ category }: Props) => {
  const { gifs, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <p>Loading...</p>}
      <section className="card-grid">
        {gifs.map((gif) => (
          <GifItem gif={gif} key={gif.id} />
        ))}
      </section>
    </>
  );
};
export default GifGrid;
