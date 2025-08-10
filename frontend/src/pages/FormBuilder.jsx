import { useState } from 'react';
import api from '../api';
import FieldEditor from '../components/FieldEditor';

export default function FormBuilder(){
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [fields, setFields] = useState([]);

  const addField = (f) => {
    if(!f.key) return alert('Field key is required');
    if(fields.some(x=>x.key===f.key)) return alert('Key must be unique');
    setFields([...fields, f]);
  };
  const removeField = (key) => setFields(fields.filter(f=>f.key!==key));

  const save = async()=>{
    const payload = { title, description, fields };
    const {data} = await api.post('/forms/', payload);
    alert('Saved! Form ID: '+data.id);
  };

  return (
    <div style={{display:'grid', gap:12}}>
      <h2>Form Builder</h2>
      <input placeholder="Form title" value={title} onChange={e=>setTitle(e.target.value)} />
      <textarea placeholder="Description" value={description} onChange={e=>setDescription(e.target.value)} />
      <FieldEditor onAdd={addField} />
      <div>
        <h4>Fields</h4>
        {fields.map(f=> (
          <div key={f.key} style={{border:'1px solid #eee', padding:8, borderRadius:6, marginBottom:6}}>
            <b>{f.label}</b> ({f.type}) — key: {f.key} {f.required? '• required':''}
            {f.type==='select' && <div>Options: {(f.options||[]).filter(Boolean).join(', ')}</div>}
            <button onClick={()=>removeField(f.key)}>Remove</button>
          </div>
        ))}
      </div>
      <button onClick={save}>Save Form</button>
    </div>
  );
}