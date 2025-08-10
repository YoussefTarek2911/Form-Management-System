import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import FormBuilder from './pages/FormBuilder';
import FormFill from './pages/FormFill';
import Submissions from './pages/Submissions';

export default function App(){
  return (
    <BrowserRouter>
      <div style={{padding:16}}>
        <nav style={{display:'flex', gap:12, marginBottom:12}}>
          <Link to="/">Dashboard</Link>
          <Link to="/builder">Create Form</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/builder" element={<FormBuilder />} />
          <Route path="/form/:id" element={<FormFill />} />
          <Route path="/form/:id/submissions" element={<Submissions />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}