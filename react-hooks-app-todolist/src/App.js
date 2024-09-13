import logo from './logo.svg';
import './App.css';
import Todo  from './components/Todo';

// import the library fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'

// import your icons
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'


function App(){
  return(
    <div className="App">
      <Todo/>
    </div>



  );
}

export default App;

library.add(fab, fas, far)