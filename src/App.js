
import './App.css';
import LoadData from './componets/LoadData/LoadData';
import Header from './componets/Header/Header';

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
