import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar'; 
import "./css/sb-admin-2.css"
import Topbar from './Topbar';
import Dashboard from './Dashboard';
import User from './User';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div id="wrapper">
      <Sidebar/>
      <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <Topbar/>
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/users" element={<User/>}></Route>
        </Routes>
      </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
