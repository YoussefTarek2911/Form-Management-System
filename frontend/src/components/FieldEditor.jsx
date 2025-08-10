// src/components/FieldEditor.jsx
import { useState } from "react";

export default function FieldEditor({ onAdd }) {
  const [field, setField] = useState({ key:"", label:"", type:"text", required:false, options:[] });
  const addOption = () => setField(f => ({...f, options:[...f.options, ""]}));
  const setOption = (i, val) => setField(f => ({...f, options: f.options.map((o,idx)=> idx===i?val:o)}));
  return (
    <div style={{display:"grid", gap:8, border:"1px solid #ddd", padding:12, borderRadius:8}}>
      <input placeholder="key (unique)" value={field.key} onChange={e=>setField({...field, key:e.target.value})}/>
      <input placeholder="label" value={field.label} onChange={e=>setField({...field, label:e.target.value})}/>
      <select value={field.type} onChange={e=>setField({...field, type:e.target.value})}>
        <option value="text">Text</option>
        <option value="number">Number</option>
        <option value="select">Multiple Choice</option>
      </select>
      <label>
        <input type="checkbox" checked={field.required} onChange={e=>setField({...field, required:e.target.checked})}/>
        Required
      </label>
      {field.type === "select" && (
        <div>
          <div style={{marginBottom:8}}>Options</div>
          {field.options.map((opt,i)=> (
            <input key={i} placeholder={`Option ${i+1}`} value={opt} onChange={e=>setOption(i, e.target.value)} />
          ))}
          <button onClick={addOption}>+ Add option</button>
        </div>
      )}
      <button onClick={()=> onAdd(field)}>Add Field</button>
    </div>
  );
}
