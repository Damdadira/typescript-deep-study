import React, { useState } from 'react';

type MyFormProps = {
  onSubmit: (form: { name: string; description: string }) => void;
};

export default function MyForm({ onSubmit }: MyFormProps){
  const [form, setForm] = useState({
    name: '',
    description: ''
  });

  const { name, description } = form;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    onSubmit(form);
    setForm({ name: '', description: '' }); //초기화
  };

  return(
    <form className='my-5' onSubmit={handleSubmit}>
      <input style={{border: '1px solid #74c6f5', marginRight: '1rem', borderRadius: '4px'}} name="name" value={name} onChange={onChange} />
      <input style={{border: '1px solid #74c6f5', marginRight: '1rem', borderRadius: '4px'}} name="description" value={description} onChange={onChange} />
      <button style={{background: '#3a89be', borderRadius: '4px', padding: '1px 12px', color: '#fff'}} type="submit">등록</button>
    </form>
  )
}