import { useState } from 'react'

function Main({ content }) {

  const [size, setSize] = useState(12)


  return <div style={{fontSize: size}}>

    <button className='btn btn-primary' onClick={() => setSize(size + 1)}>
      +
    </button>

      {content}
    
    <button className='btn btn-neutral' onClick={()=> setSize(size - 1)}>
      -
    </button>

  </div>

}


function App() {

  return (
    <>

      <Main content={"Tämä on propsi 1"}></Main>
      <Main content={"Tämä on propsi 2"}></Main>


    </>
  )
}

export default App
