import Greetings from './Greetings'
import Counter from './Counter'
import MyForm from './MyForm'
import Counter2 from './Counter2'
import ReducerSample from './ReducerSample'

function App() {
  const onClick = (name: string) => {
    console.log(`${name} say hello`)
  }

  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form)
  }

  return (
    <>
      <div className='bg-cyan-300 text-cyan-700'>
        <div className='text-3xl font-bold underline'><code>hi, hello</code></div>
      </div>
      <Greetings name='ya' onClick={onClick}></Greetings>
      <hr/>
      <Counter></Counter>
      <hr/>
      <MyForm onSubmit={onSubmit}></MyForm>
      <hr/>
      <Counter2></Counter2>
      <hr/>
      <ReducerSample></ReducerSample>
      <hr/>
    </>
  )
}

export default App