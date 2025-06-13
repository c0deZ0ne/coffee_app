/* eslint-disable @typescript-eslint/no-unused-vars */
import {create} from 'zustand';
import {Producer} from 'immer';
import {persist, createJSONStorage} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BeansData from '../data/BeansData';
import CoffeeData from '../data/CoffeeData';

export const useStore = create(
  persist(
    (get, set) => ({
      CoffeeList: CoffeeData,
      BeansList: BeansData,
      CartPrice: 0,
      CartList: [],
      FavoriteList: [],
      OrderHistory: [],
    }),
    {
      name: 'coffee-app-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
