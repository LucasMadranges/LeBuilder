import Burger from '@/assets/food/burger.png';

export function useDb() {
  return [
    {
      id: 1,
      name: 'La Base',
      price: '15.95€',
      img: Burger,
    },
    {
      id: 2,
      name: 'La Banquet',
      price: '17.95€',
      img: Burger,
    },
    {
      id: 3,
      name: 'Le Festin',
      price: '18.95€',
      img: Burger,
    },
  ];
}
