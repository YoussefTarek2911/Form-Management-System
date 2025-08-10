import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api';
import * as XLSX from 'xlsx';

export default function Submissions(){
  const { id } = useParams();
  const [form, setForm] = useState(null);
  const [subs, setSubs] = useState([]);

  const load = async()=>{
    const f = await api.get(`/forms/${id}/`); setForm(f.data);
    const {data} = await api.get(`/forms/${id}/submissions/`); setSubs(data);
  };
  useEffect(()=>{ load(); }, [id]);

  const toFlatRow = (sub) => ({ id: sub.id, submitted_at: sub.submitted_at, ...sub.answers });
  const exportXLSX = () => {
    const rows = subs.map(toFlatRow);
    const ws = XLSX.utils.json_to_sheet(rows);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Submissions');
    XLSX.writeFile(wb, `${form?.title || 'form'}_submissions.xlsx`);
  };
  const exportCSV = () => {
    const rows = subs.map(toFlatRow);
    const headers = Object.keys(rows[0]||{id:'',submitted_at:''});
    const csv = [headers.join(','), ...rows.map(r=> headers.map(h=> JSON.stringify(r[h] ?? '')).join(','))].join('\n');
    const blob = new Blob([csv], {type:'text/csv'});
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `${form?.title || 'form'}_submissions.csv`;
    a.click();
  };

  if(!form) return <div>Loading...</div>;

  return (
    <div style={{display:'grid', gap:12}}>
      <h2>Submissions — {form.title}</h2>
      <div style={{display:'flex', gap:8}}>
        <button onClick={exportCSV}>Export CSV</button>
        <button onClick={exportXLSX}>Export Excel</button>
      </div>
      <table border="1" cellPadding="6" style={{borderCollapse:'collapse'}}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Submitted At</th>
            {(form.fields||[]).map(f=> <th key={f.key}>{f.label}</th>)}
          </tr>
        </thead>
        <tbody>
          {subs.map(s=> (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{new Date(s.submitted_at).toLocaleString()}</td>
              {(form.fields||[]).map(f=> (
                <td key={f.key}>{String((s.answers||{})[f.key] ?? '')}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}