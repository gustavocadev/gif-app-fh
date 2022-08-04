import { Dispatch, FormEvent, SetStateAction, useState } from 'react';

type Props = {
  // setCategories: Dispatch<SetStateAction<string[]>>;
  onNewCategory: (value: string) => void;
};

const AddCategory = ({ onNewCategory }: Props) => {
  const [newCategory, setNewCategory] = useState('');

  const handleAddCategory = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (newCategory.trim().length <= 1) return;
    onNewCategory(newCategory);
    setNewCategory('');
  };

  return (
    <form onSubmit={handleAddCategory}>
      <input
        type="text"
        placeholder="Buscar por categoría"
        onChange={(e) => setNewCategory(e.currentTarget.value)}
        value={newCategory}
      />
      <button type="submit">Agregar</button>
    </form>
  );
};
export default AddCategory;
