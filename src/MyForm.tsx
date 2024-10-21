import { useState } from 'react';

type MyFormProps = {
  onSubmit: (form: { name: string; description: string }) => void;
};

export default function MyForm({ onSubmit }: MyFormProps){
  const [form, setForm] = useState({
    name: '',
    description: ''
  });

  const { name, description } = form;

  //e값을 무엇으로 설정할지 모르기 때문에 any로 설정
  const onChange = (e: any) => {};
  const handleSubmit = (e:any) => {};

  return(
    <form className='my-5' onSubmit={handleSubmit}>
      <input style={{border: '1px solid #74c6f5', marginRight: '1rem', borderRadius: '4px'}} name="name" value={name} onChange={onChange} />
      <input style={{border: '1px solid #74c6f5', marginRight: '1rem', borderRadius: '4px'}} name="description" value={description} onChange={onChange} />
      <button style={{background: '#3a89be', borderRadius: '4px', padding: '1px 12px', color: '#fff'}} type="submit">등록</button>
    </form>
  )
}