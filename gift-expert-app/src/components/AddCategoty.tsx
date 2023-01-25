import { FC, FormEventHandler, useState } from 'react';


interface Props {
  onAddCategory: (cat: string) => void
}

export const AddCategoty: FC<Props> = ({ onAddCategory }) => {
  const [querySearch, setQuerySearch] = useState('');

  const submitHandler: FormEventHandler = (e) => {
    e.preventDefault();

    onAddCategory(querySearch);
    setQuerySearch('');
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        value={querySearch}
        onChange={(e) => setQuerySearch(e.target.value)}
        placeholder="Add Category"
      />

      <button
        type="submit"
        className="bg-green-500 p-2 rounded uppercase font-semibold"
      >
        agregar
      </button>
    </form>
  );
};
