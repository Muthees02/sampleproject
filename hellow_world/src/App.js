import React,{ Component }from 'react'
import logo from './logo.svg';

import './App.css';
import  Greet  from './Components/Greet';
import Welcome from './Components/Welcom';
import Hello from './Components/Hello';
import Message from './Components/Message';
import Counter from './Components/Counter';
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick';

class App extends Component {
  render(){
  return (
    <div className="App">
      <ClassClick />
     <FunctionClick /> 
     
      <Counter />
       <Message />
      {/* <Greet name="Bruce" heroName="Batman">
      <p>This is Children props</p>
     </Greet>
     <Greet name="Clark" heroName="Superman" >
      <button>Action</button>
     </Greet> */}
     {/* <Greet name="Diana" heroName="Wonder Woman"></Greet> */}
      {/* <Welcome  name="Bruce" heroName="Batman" />
      <Welcome  name="Clark" heroName="Superman"/>
      <Welcome  name="Diana" heroName="Wonder Woman"/>  */}
     {/* <Hello />  */}
    </div>
  );
  }
}

export default App;
