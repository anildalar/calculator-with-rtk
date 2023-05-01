import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Page2 from './pages/Page2';
import NoPage from './pages/NoPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="page2" element={<Page2 />}></Route>
        <Route path="*" element={<NoPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
