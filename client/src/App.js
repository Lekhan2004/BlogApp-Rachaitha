import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from './redux/store';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Blogs from './pages/Blogs';
import Blogitem from './pages/Blogitem';
import CreateBlog from './pages/CreateBlog';
import Layout from './components/Layout';
import ErrorPage from './pages/ErrorPage';
import About from "./pages/About"

function App() {
  return (
    <Provider store = {store}>
      <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="about" element={<About />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="blog/:id" element={<Blogitem />} />
          <Route path="createblog" element={<CreateBlog />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Router>
    </Provider>
  );
}

export default App;
