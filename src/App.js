import './App.css';
import {Header} from './Components/Header';
import './reset.css'
import { BodyContainer } from './styles';

function App() {
  return (
    <div className="App">
      <Header />
      <BodyContainer>
        <div className='cu'/>
        <div className='cu1'/>
        <div className='cu2'/>
      </BodyContainer>
    </div>
  );
}

export default App;
