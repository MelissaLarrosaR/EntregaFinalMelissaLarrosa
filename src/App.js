import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="d-flex justify-content-center">
        <div className="row d-flex justify-content-center">
          <ItemListContainer name={'Bandejas'} price={'$250'} />
          <ItemListContainer name={'Hojillas'} price={'$50'} />
          <ItemListContainer name={'Semillas'} price={'$1700'} />
          <ItemListContainer name={'Macetas'} price={'$80'} />
        </div>
      </div>

    </div>
  );
}

export default App;
