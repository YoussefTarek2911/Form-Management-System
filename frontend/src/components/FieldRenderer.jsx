export default function FieldRenderer({ field, value, onChange }) {
  if (field.type === 'number') {
    return (
      <div style={{display:'grid', gap:6}}>
        <label>{field.label}{field.required ? ' *' : ''}</label>
        <input type="number" value={value||''} onChange={e=>onChange(e.target.value)} />
      </div>
    );
  }
  if (field.type === 'select') {
    return (
      <div style={{display:'grid', gap:6}}>
        <label>{field.label}{field.required ? ' *' : ''}</label>
        <select value={value||''} onChange={e=>onChange(e.target.value)}>
          <option value="">-- choose --</option>
          {(field.options||[]).filter(Boolean).map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>
    );
  }
  return (
    <div style={{display:'grid', gap:6}}>
      <label>{field.label}{field.required ? ' *' : ''}</label>
      <input value={value||''} onChange={e=>onChange(e.target.value)} />
    </div>
  );
}