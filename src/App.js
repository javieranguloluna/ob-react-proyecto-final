import logo from './logo.svg';
import './App.css';
// import Greeting from './components/pure/greeting';
// import GreetingF from './components/pure/greetingF';
import GreetingStyled from './components/pure/geetingStyled'
import TaskListComponent from './components/container/task_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente propio */}
        {/* <Greeting name="Javi"></Greeting>
        <GreetingF name="Javi"></GreetingF> */}

        <GreetingStyled name="Javi"></GreetingStyled>
        
        <TaskListComponent></TaskListComponent>
        
      </header>
    </div>
  )
}

export default App
