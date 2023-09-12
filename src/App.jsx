import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

import Login from "./Pages/Login";
import CheckoutPage from './Pages/CheckoutPage';
import Final from './Pages/Final';

function App() {
  return (
    <div className="App bg-black min-w-screen min-h-screen p-0 m-0 ">
      <Router>
      <Routes>
        <Route path='/checkout' element={<CheckoutPage/>}/>
        <Route path='/' element={<Login/>}/>
        <Route exact path="/final/*" element={<Final/>} />


      </Routes>

    </Router>

    </div>
  );
}

export default App;
