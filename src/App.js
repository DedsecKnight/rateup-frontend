import './App.css';
import BusinessForm from './components/BusinessForm/BusinessForm'
import Header from './components/Header/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-body">
        <BusinessForm />
      </div>
    </div>
  );
}

export default App;
