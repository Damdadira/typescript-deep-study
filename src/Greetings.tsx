type GreetingsProps = {
  name: string;
  mark: string;
  optional?: string;
  onClick: (name: string) => void; //아무것도 리턴하지 않는다는 함수를 의미
}

export default function Greetings({name, mark, optional, onClick}: GreetingsProps) {
  const handleClick = () => onClick(name);

  return(
    <div className='text-xl'>
      Hello, {name} {mark}
      {optional && <p>{optional}</p>}
      <div className='mt-5'>
        <button className='bg-cyan-100 text-cyan-500 p-4' onClick={handleClick}>Click Me</button>
      </div>
    </div>
  )
};

Greetings.defaultProps = {
  mark: '!'
};
