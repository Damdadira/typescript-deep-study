import Greetings from './Greetings'

function App() {
  const onClick = (name: string) => {
    console.log(`${name} say hello`)
  }
  return (
    <>
      <div className='bg-cyan-300 text-cyan-700 mb-3'>
        <div className='text-3xl font-bold underline'>hi</div>
      </div>
      <Greetings name='hi' onClick={onClick}></Greetings>
    </>
  )
}

export default App


//8장. 리액트 프로젝트에서 타입스크립트 > 2. 리액트 컴포넌트 타입스크립...