import { BrowserRouter, Routes, Route, Router }  from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cards from './components/Cards';
import MobileMoney from './components/MobileMoney';
import Bank from './components/Bank';
import Card from './components/Card';
import Transaction_details from './components/Transaction';

function App() {
  return (
    <> 
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Cards/>}></Route>
          <Route path='/mobilemoney' element={<MobileMoney/>}></Route>
          <Route path='/bank' element={<Bank/>}></Route>
          <Route path='/card' element={<Card/>}></Route>
          <Route path='/transaction-details' element={<Transaction_details/>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
