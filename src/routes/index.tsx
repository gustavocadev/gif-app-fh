import { useState } from 'react';
import AddCategory from '../components/AddCategory';
import GifGrid from '../components/GifGrid';

const Index = () => {
  const [categories, setCategories] = useState<string[]>([
    'weathering with you',
  ]);

  console.log(categories);
  const onAddCategory = (value: string) => {
    setCategories([value, ...categories]);
  };
  return (
    <>
      <h1>index</h1>
      <AddCategory
        // setCategories={setCategories}
        onNewCategory={(value) => onAddCategory(value)}
      />
      {categories.map((category) => (
        <GifGrid category={category} key={category} />
      ))}
    </>
  );
};
export default Index;
