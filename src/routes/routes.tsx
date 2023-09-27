import { Route, Routes } from 'react-router-dom';
import Home from 'src/pages/Home';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" Component={Home} />
    </Routes>
  );
}
