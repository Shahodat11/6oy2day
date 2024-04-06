import logo from './logo.svg';
import './App.css';
import Headertop from './components/headertop/Headertop';
import Navbar from './components/navbar/Navbar';
import Main from './components/main/Main';
import Categories from './components/categories/Categories';
import OurProducts from './components/ourproducts/OurProducts';


function App() {
  return (
    <div className="App">
      <Headertop/>
      <Navbar/>
      <Main/>
      <Categories/>
      <OurProducts/>
    </div>
  );
}

export default App;
