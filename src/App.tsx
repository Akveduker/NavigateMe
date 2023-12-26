import AppLayout from '@pages/AppLayout/AppLayout';
import Game from '@pages/Game/Game';
import Rules from '@pages/Rules/Rules';
import Score from '@pages/Score/Score';
import roots from '@utils/constants/roots';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Rules />} />
        <Route path={roots.game}>
          <Route element={<Game />} index />
        </Route>
        <Route path={roots.score} element={<Score />} />
      </Route>
    </Routes>
  );
};

export default App;
