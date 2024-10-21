import Greetings from './Greetings'
import Counter from './Counter'
import MyForm from './MyForm'

function App() {
  const onClick = (name: string) => {
    console.log(`${name} say hello`)
  }

  const onSubmit = (form: {name: string; description: string }) => {
    console.log(form)
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
      <MyForm onSubmit={onSubmit}></MyForm>
    </>
  )
}

export default App