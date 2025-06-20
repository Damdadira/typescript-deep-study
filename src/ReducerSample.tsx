import { useReducer } from 'react';

type Color = 'red' | 'orange' | 'yellow';

type State = {
  count: number;
  text: string;
  color: Color;
  isGood: boolean;
};

type Action =
  | { type: 'SET_COUNT'; count: number }
  | { type: 'SET_TEXT'; text: string }
  | { type: 'SET_COLOR'; color: Color }
  | { type: 'TOGGLE_GOOD' };

function reducer(state: State, action: Action): State {
  switch(action.type){
    case 'SET_COUNT':
      return {
        ...state,
        count: action.count
      };
    case 'SET_TEXT':
      return {
        ...state,
        text: action.text
      };
    case 'SET_COLOR':
      return {
        ...state,
        color: action.color
      };
    case 'TOGGLE_GOOD':
      return {
        ...state,
        isGood: !state.isGood
      };
    default:
      throw new Error('Unhandled action');
  }
}

export default function ReducerSample() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    text: 'hello',
    color: 'red',
    isGood: true
  });

  const setCount = () => dispatch({ type: 'SET_COUNT', count: 5 }); //count를 넣지 않으면 에러 발생
  const setText = () => dispatch({ type: 'SET_TEXT', text: 'bye' }); //text를 넣지 않으면 에러 발생
  const setColor = () => dispatch({ type: 'SET_COLOR', color: 'orange' }); //color를 넣지 않으면 에러 발생
  const toggleGood = () => dispatch({ type: 'TOGGLE_GOOD' });

  return(
    <div className='my-5'>
      <p>
        <code style={{color: '#bd88b1'}}>count: </code> {state.count}
      </p>
      <p>
        <code style={{color: '#bd88b1'}}>text: </code> {state.text}
      </p>
      <p>
        <code style={{color: '#bd88b1'}}>color: </code> {state.color}
      </p>
      <p>
        <code style={{color: '#bd88b1'}}>isGood: </code> {state.isGood ? 'true' : false}
      </p>
      <div className='mt-4'>
        <button style={{background: '#e98eb1', color: '#fff', padding: '4px 12px', marginRight: '0.5rem'}} onClick={setCount}>SET_COUNT</button>
        <button style={{background: '#e98eb1', color: '#fff', padding: '4px 12px', marginRight: '0.5rem'}} onClick={setText}>SET_TEXT</button>
        <button style={{background: '#e98eb1', color: '#fff', padding: '4px 12px', marginRight: '0.5rem'}} onClick={setColor}>SET_COLOR</button>
        <button style={{background: '#e98eb1', color: '#fff', padding: '4px 12px'}} onClick={toggleGood}>TOGGLE_GOOD</button>
      </div>
    </div>
  )
}