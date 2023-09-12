import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Blogs from "./Pages/Blogs";
import HomeCustomers from "./Pages/HomeCustomers";
import Login from "./Pages/Login";
import ManageEventsPage from "./Pages/ManageEventsPage";
import Tickets from "./Pages/Tickets";
import YogaNhealth from "./Pages/YogaNhealth";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ManageEarningsPage from './Pages/MangeEarningsPage'
import CheckoutPage from './Pages/CheckoutPage';

function App() {
  return (
    <div className="App bg-black min-w-screen min-h-screen p-0 m-0 ">
      {/* <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Blogs />} />
        <Route path="/home-customers" element={<HomeCustomers />} />
        <Route path="/yoga-n-health" element={<YogaNhealth />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/manage-events" element={<ManageEventsPage />} />
        <Route path="/manage-earnings" element={<ManageEarningsPage />} />
      </Routes>
      <Footer />

    </Router> */}

<CheckoutPage/>
    {/* <Login/> */}

    </div>
  );
}

export default App;
