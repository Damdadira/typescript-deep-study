import { useReducer } from 'react';

type Action = { type: 'INCREASE' } | { type: 'DECREASE' }; //이렇게 '|' 으로 액션 나열

function reducer(state: number, action: Action): number {
  switch(action.type){
    case 'INCREASE':
      return state + 1;
    case 'DECREASE':
      return state - 1;
    default:
      throw new Error('unhandled action');
  }
}

export default function Counter(){
  const [count, dispatch] = useReducer(reducer, 0);
  const onIncrease = () => dispatch({ type: 'INCREASE' });
  const onDecrease = () => dispatch({ type: 'DECREASE' });
  
  return (
    <div className='my-5'>
      <div className='text-3xl font-bold m-4 text-cyan-400'>{count}</div>
      <div>
        <button className='bg-cyan-500 text-white px-4 py-2 mr-2' onClick={onIncrease}>+1</button>
        <button className='bg-cyan-500 text-white px-4 py-2' onClick={onDecrease}>-1</button>
      </div>
    </div>
  )
}


