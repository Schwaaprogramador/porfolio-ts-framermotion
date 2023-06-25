
import Home from './componentes/Home/Home';
import Info from './componentes/Info/Info';
import Scroll from './componentes/Scroll/Scroll';
import styled from './App.module.css';

function App() {

  return (
    <>
      <Home/>
      <div className={styled.body}>

      <Info/>
      <Scroll/>

      </div>
      
    </>
  )
}

export default App
