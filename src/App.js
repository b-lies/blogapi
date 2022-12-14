import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Contact from './pages/Contact';
import About from './pages/About';
import BlogData from './BlogData';
import SinglePost from './pages/SinglePost';
import { Navigate } from 'react-router-dom';


function App() {
  
  return (
    <div className="App">
      <Router>
        <Header/>
          <Routes>
            <Route path='/' element={<BlogData/>} />
            <Route path='/:slug' element={<SinglePost/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path="*" element={<Navigate to="/about" />} />
          </Routes>
          <Footer/> 
      </Router>
    </div>
  );
}

export default App;
