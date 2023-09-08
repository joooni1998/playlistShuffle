import React from 'react';
import { Route, Routes } from 'react-router-dom';
// eslint-disable-next-line import/no-unresolved
import { Analytics } from '@vercel/analytics/react';
import HomePage from './components/HomePage/HomePage';
import PlaylistPage from './components/PlaylistPage/PlaylistPage';
import './app.css';
import ErrorPage from './components/ErrorPage/ErrorPage';
import AboutPage from './components/AboutPage/AboutPage';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/:id" element={<PlaylistPage />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Analytics />
    </>
  );
}
export default App;
