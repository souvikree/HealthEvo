// redux/slices/selectors.ts
import { RootState } from '../store';

export const selectUser = (state: RootState) => state.user;
