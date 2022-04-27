import { Route, Routes } from 'react-router-dom';
import './App.css';
import Grandpa from './components/grandpa/Grandpa';
import Header from './components/header/Header';
import Home from './components/home/Home';
import OrderReview from './components/orderReview/OrderReview';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/order-review' element={<OrderReview></OrderReview>}></Route>
        <Route path='/grandpa' element={<Grandpa></Grandpa>}></Route>
      </Routes>
    </div>
  );
}

export default App;
