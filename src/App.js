import { BrowserRouter, Form, Route, Routes} from 'react-router-dom';
import './App.css';
import Inputform from './postview/form';
import Landingpage from './postview/landing-page';
import Postviewpage from './postview/postview';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landingpage/>}/>
      <Route path="/postview" element={<Postviewpage/>}/>
      <Route path='/form' element={<Inputform/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
