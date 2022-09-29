
import './App.css';
import LoadData from './componets/LoadData/LoadData';
import Header from './componets/Header/Header';
import FAQ from './componets/FAQ/FAQ';

function App() {

  
  return (
    <div className='container-row'>
          <Header></Header>
      
        <div >
            <LoadData></LoadData>
        </div>
        <br />
        <hr />
        <br />
        <h2 className='text-center display-1 text-primary'>FAQ</h2>
        <br />
        <div>
          <FAQ></FAQ>
        </div>
      
    </div>
  );
}

export default App;
