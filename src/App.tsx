import Greetings from './Greetings'
import Counter from './Counter'

function App() {
  const onClick = (name: string) => {
    console.log(`${name} say hello`)
  }
  return (
    <>
      <div className='bg-cyan-300 text-cyan-700'>
        <div className='text-3xl font-bold underline'>hi</div>
      </div>
      <Greetings name='hi' onClick={onClick}></Greetings>
      <hr/>
      <Counter></Counter>
      <hr/>
    </>
  )
}

export default App