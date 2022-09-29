import logo from './logo.svg';
import './App.css';
import LoadData from './componets/LoadData/LoadData';
import Header from './componets/Header/Header';
import Aside from './componets/Aside/Aside';

function App() {

  
  return (
    <div className='container-row'>
          <Header></Header>
      
        <div >
            <LoadData></LoadData>
        </div>
      
    </div>
  );
}

export default App;
