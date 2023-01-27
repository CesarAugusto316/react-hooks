import { FC, useEffect, useState } from 'react';
import { Gif } from '../App';
import { useFetchGifs } from '../hooks/useFetchGifs';
import gifsService from '../services/gifsService';



interface Props {
  // categories?: Gif[],
  searchQuery: string
}

export const CategoriesList: FC<Props> = ({ searchQuery }) => {

  // const [categories, setCategories] = useState<Gif[]>([]);
  // const [isLoading, setIsLoading] = useState(false);
  const [counter, setCounter] = useState(0);
  const { categories, isLoading } = useFetchGifs(searchQuery);


  // useEffect(() => {
  //   gifsService.search(searchQuery)
  //     .then((res) => {
  //       setCategories(res);
  //       console.log(res);
  //     })
  //     .catch(err => console.log(err));

  // }, [searchQuery]);

  const Categories = categories.map((cat) => (
    // if categories.length === 0 'No categories found';
    <li key={cat.id}>
      <h3>{cat.title}</h3>
      <img src={cat.imageUrl} alt={cat.title} />
    </li>
  ));

  return (
    <ul>
      <button type="button" onClick={() => setCounter(prev => prev + 1)}>
        Counter{counter}
      </button>

      {isLoading ?
        <p>is loading...</p>
        : Categories}
    </ul>
  );
};
