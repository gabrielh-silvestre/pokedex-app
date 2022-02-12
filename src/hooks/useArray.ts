import { useCallback, useState } from 'react';

export function useArray(initialValue: any[]) {
  const [array, setArray] = useState(initialValue);

  const actions = {
    deleteByIndex: useCallback((indexToDelete: number) => {
      setArray((prevArr) => prevArr.filter((_, i) => i !== indexToDelete));
    }, []),
    push: useCallback((newItem) => {
      setArray((prevArr) => [...prevArr, newItem]);
    }, []),
    sortBy: useCallback((sortCallback: (a: any, b: any) => number) => {
      setArray((prevArr) => {
        const copyArray = [...prevArr];
        return copyArray.sort(sortCallback);
      });
    }, []),
  };

  return { array, actions };
}
