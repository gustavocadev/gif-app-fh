import { Gif } from './GifGrid';

type Props = {
  gif: Gif;
};

const GifItem = ({ gif }: Props) => {
  return (
    <figure className="card">
      <img key={gif.id} src={gif.url} alt={gif.title} />
      <p>{gif.title}</p>
    </figure>
  );
};
export default GifItem;
