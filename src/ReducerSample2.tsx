import { useSampleState, useSampleDispatch } from './SampleContext';

export default function ReducerSample() {
  const state = useSampleState();
  const dispatch = useSampleDispatch();

  const setCount = () => dispatch({ type: 'SET_COUNT', count: 5 }); //count를 넣지 않으면 에러 발생
  const setText = () => dispatch({ type: 'SET_TEXT', text: 'bye' }); //text를 넣지 않으면 에러 발생
  const setColor = () => dispatch({ type: 'SET_COLOR', color: 'orange' }); //color를 넣지 않으면 에러 발생
  const toggleGood = () => dispatch({ type: 'TOGGLE_GOOD' });

  return(
    <div className='my-5'>
      <p>
        <code style={{color: '#a57fd1'}}>count: </code> {state.count}
      </p>
      <p>
        <code style={{color: '#a57fd1'}}>text: </code> {state.text}
      </p>
      <p>
        <code style={{color: '#a57fd1'}}>color: </code> {state.color}
      </p>
      <p>
        <code style={{color: '#a57fd1'}}>isGood: </code> {state.isGood ? 'true' : false}
      </p>
      <div className='mt-4'>
        <button style={{background: '#b35cc9', color: '#fff', padding: '4px 12px', marginRight: '0.5rem'}} onClick={setCount}>SET_COUNT</button>
        <button style={{background: '#b35cc9', color: '#fff', padding: '4px 12px', marginRight: '0.5rem'}} onClick={setText}>SET_TEXT</button>
        <button style={{background: '#b35cc9', color: '#fff', padding: '4px 12px', marginRight: '0.5rem'}} onClick={setColor}>SET_COLOR</button>
        <button style={{background: '#b35cc9', color: '#fff', padding: '4px 12px'}} onClick={toggleGood}>TOGGLE_GOOD</button>
      </div>
    </div>
  )
}