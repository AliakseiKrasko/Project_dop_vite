import { AppRootState, useAppSelector } from './store.ts'
import { selectDecks } from '../features/decks/decks-selectors.ts'

export const appSelectors = (state: AppRootState) => state.app

