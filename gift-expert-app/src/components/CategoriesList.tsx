import { FC, useEffect, useState } from 'react';
import { Gif } from '../App';
import gifsService from '../services/gifsService';



interface Props {
  // categories?: Gif[],
  searchQuery: string
}

export const CategoriesList: FC<Props> = ({ searchQuery }) => {
  const [categories, setCategories] = useState<Gif[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [counter, setCounter] = useState(0);


  useEffect(() => {
    gifsService.search(searchQuery)
      .then((res) => {
        setCategories(res);
        console.log(res);
      })
      .catch(err => console.log(err));

  }, [searchQuery]);


  return (
    <ul>
      <button type="button" onClick={() => setCounter(prev => prev + 1)}>
        Counter{counter}
      </button>

      {categories.map((cat) => (
        <li key={cat.id}>
          <h3>{cat.title}</h3>
          <img src={cat.imageUrl} alt={cat.title} />
        </li>
      ))}
    </ul>
  );
};
