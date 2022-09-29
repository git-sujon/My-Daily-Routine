import logo from './logo.svg';
import './App.css';
import LoadData from './componets/LoadData/LoadData';
import Header from './componets/Header/Header';
import Aside from './componets/Aside/Aside';

function App() {
  return (
    <div className='container-row'>
      <Header></Header>
      
      <div className='row'>
        <div className='col-12 col-md-9'>
      <LoadData></LoadData>
        </div>
        <div className='col-12 col-md-3'>
        <Aside></Aside>
        </div>
      </div>
    </div>
  );
}

export default App;
