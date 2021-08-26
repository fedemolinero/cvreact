import './App.css';
import Header from './sections/header/Header';
import Body from './sections/body/Body';
import Footer from './sections/footer/Footer';

function App() {
  const addDataFormHandler = data => {
    console.log('In App.js');
    console.log(data);
  };

  return (
    <div className="App">
      <Header />
      <Body onAddDataOnForm={addDataFormHandler} />
      <Footer />
    </div>
  );
}

export default App;
