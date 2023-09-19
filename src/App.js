import {MyBookShelf} from './pages/MyBookShelf';
import {BookSearchPage} from './pages/BookSearchPage';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route  index  element={<BookSearchPage/>}/>
    {/* <Route   path='BookSearchPage' element={<BookSearchPage/>}/> */}
    <Route  path='MyBookShelf' element={<MyBookShelf/>}/>
    </Routes>
    </BrowserRouter>
</>
  );
}

export default App;
