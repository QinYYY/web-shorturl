import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import LoginPage, { ResetPwd } from './Components/LoginPage';
import { checkEmail } from './CommonFunc';


function App() {



  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/resetPwd' element={<ResetPwd></ResetPwd>}></Route>
          <Route path='/loginPage' element={<LoginPage></LoginPage>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}








export default App;
