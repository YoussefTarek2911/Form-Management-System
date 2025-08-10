import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';

export default function Dashboard(){
  const [forms, setForms] = useState([]);
  const load = async()=>{ const {data} = await api.get('/forms/'); setForms(data); };
  useEffect(()=>{ load(); },[]);
  const del = async(id)=>{ await api.delete(`/forms/${id}/`); load(); };
  return (
    <div style={{display:'grid', gap:12}}>
      <h2>Form Management Dashboard</h2>
      <Link to="/builder"><button>Create New Form</button></Link>
      <div style={{display:'grid', gap:8}}>
        {forms.map(f => (
          <div key={f.id} style={{border:'1px solid #ddd', padding:12, borderRadius:8}}>
            <div style={{fontWeight:600}}>{f.title}</div>
            <div>{f.description}</div>
            <div style={{display:'flex', gap:8, marginTop:8}}>
              <Link to={`/form/${f.id}`}><button>Open</button></Link>
              <Link to={`/form/${f.id}/submissions`}><button>Submissions</button></Link>
              <button onClick={()=>del(f.id)} style={{color:'#b00020'}}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}