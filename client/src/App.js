import { BrowserRouter, Routes, Route} from 'react-router-dom';
import LandingPage from './components/landingPage';
import Login from './components/user/login';
import Dashboard from './dashboard';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element={<LandingPage />} />
        <Route path = '/dashboard' element = {<Dashboard />} />
        <Route path = '/login' element = {<Login />} />
      </Routes>
    </BrowserRouter>
  )
}