import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Course from './components/Course/Course';
import Dashboard from './components/Dashboard/Dashboard';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}/>
          <Route path='/about' element={<About></About>}/>
          <Route path='/contact' element={<Contact></Contact>}/>
          <Route path='/course' element={<Course></Course>}/>
          <Route path='/dashboard' element={<Dashboard> </Dashboard>}/>
          <Route path='*' element={<NotFound></NotFound>}/>
        </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
