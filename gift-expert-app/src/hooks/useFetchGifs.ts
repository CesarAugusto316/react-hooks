import { useEffect, useState } from 'react';
import { Gif } from '../App';
import gifsService from '../services/gifsService';

/** 
 * 
 * We can generalize this hook logic for more endpoints and methods (POST, GET, PUT... ect)
 */
export const useFetchGifs = (searchQuery: string) => {
  const [categories, setCategories] = useState<Gif[]>([]);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    setIsLoading(true);
    gifsService.search(searchQuery)
      .then((res) => {
        setCategories(res);
      })
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false));
  }, [searchQuery]);

  return { categories, isLoading };
};
