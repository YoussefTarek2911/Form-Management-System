import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api';
import FieldRenderer from '../components/FieldRenderer';

export default function FormFill(){
  const { id } = useParams();
  const [form, setForm] = useState(null);
  const [answers, setAnswers] = useState({});

  useEffect(()=>{
    api.get(`/forms/${id}/`).then(({data})=>{
      setForm(data);
      const init = {}; (data.fields||[]).forEach(f=> init[f.key] = '');
      setAnswers(init);
    });
  }, [id]);

  if(!form) return <div>Loading...</div>;

  const onSubmit = async()=>{
    for(const f of form.fields||[]){
      if(f.required && !answers[f.key]){ return alert(`Field "${f.label}" is required`); }
    }
    await api.post(`/forms/${id}/submit/`, { answers });
    alert('Submitted!');
    const init = {}; (form.fields||[]).forEach(f=> init[f.key] = '');
    setAnswers(init);
  };

  return (
    <div style={{display:'grid', gap:12}}>
      <h2>{form.title}</h2>
      <div>{form.description}</div>
      {(form.fields||[]).map(f=> (
        <FieldRenderer key={f.key} field={f} value={answers[f.key]} onChange={v=> setAnswers({...answers, [f.key]: v})} />
      ))}
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
}