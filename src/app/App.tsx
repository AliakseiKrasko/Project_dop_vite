import './App.css'
import { Decks } from '../features/decks/Decks.tsx'
import { GlobalError } from './GlobalError/GlobalError.tsx'
import { LinearLoader } from '../common/components/Loader/LinearLoader.tsx'
import { useState } from 'react'
import { useAppSelector } from './store.ts'
import { appSelectors } from './app-selectors.ts'

export const App = () => {
  const decks = useAppSelector(appSelectors)
  return (
    <div>
      { decks.status === 'loading' && <LinearLoader /> }
      <Decks />
      <GlobalError />
    </div>
  )
}
