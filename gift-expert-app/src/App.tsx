import { FC, useState } from 'react';
import { AddCategoty } from './components/AddCategoty';
import { CategoriesList } from './components/CategoriesList';
// import gifsService from './services/gifsService';


export interface Gif {
  id: string,
  imageUrl: string,
  title: string
}

export const App: FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  // const [categories, setCategories] = useState<Gif[]>([]);
  // const [isLoading, setIsLoading] = useState(false);


  const onAddCategory = (searchQuery: string) => {
    setSearchQuery(searchQuery);
  };

  // /**
  //  * 
  //  * @param searchQuery is the inputText value from gifForm
  //  */
  // const onAddCategory = async (searchQuery: string) => {
  //   setIsLoading(true);
  //   try {
  //     const res = await gifsService.search(searchQuery);
  //     setCategories(res);
  //   }
  //   catch (error) {
  //     console.log(error);
  //   }
  //   finally {
  //     setIsLoading(false);
  //   }
  // };

  return (
    <div>
      <h1>GiftExpert App</h1>

      <AddCategoty onAddCategory={onAddCategory} />

      <CategoriesList searchQuery={searchQuery} />
    </div>
  );
};
