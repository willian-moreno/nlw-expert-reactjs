import { Route, Routes } from 'react-router-dom';
import { App } from './app';

export function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={<App />}
      ></Route>
    </Routes>
  )
}