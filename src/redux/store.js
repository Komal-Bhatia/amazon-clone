import { configureStore } from '@reduxjs/toolkit';
import amazon from './amazon';

export const store = configureStore({
  reducer: {amazon},
});
