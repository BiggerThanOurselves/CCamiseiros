import './App.css';
import {Bio} from './Components/Bio';
import {Header} from './Components/Header';
import './reset.css'
import { BodyContainer } from './styles';

function App() {
  return (
    <div className="App">
      <Header />
      <BodyContainer>
        <div className='cu1'/>
        <Bio />
        <div className='cu2'/>
      </BodyContainer>
    </div>
  );
}

export default App;
