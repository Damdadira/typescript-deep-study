import { useState } from 'react';

export default function Counter(){
  const [count, setCount] = useState<number>(0); //Generics 사용
  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);
  
  return (
    <div className='my-5'>
      <div className='text-3xl font-bold m-4 text-cyan-500'>{count}</div>
      <div>
        <button className='bg-cyan-600 text-white px-4 py-2 mr-2' onClick={onIncrease}>+1</button>
        <button className='bg-cyan-600 text-white px-4 py-2' onClick={onDecrease}>-1</button>
      </div>
    </div>
  )
}


/**useState를 사용할때 어떤 상황에 Generics를 사용하는게 좋을까?
 * 상태가 null일 수도 있고 아닐 수도 있을때
 * ex) useState<Information | null>(null)
 */