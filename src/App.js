import Cards from "./components/Cards";
import Carousel from "./components/Carousel";
import Counter from "./components/Counter";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Prenav from "./components/Prenav";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    zxcz
    <Prenav/>
    <Counter/>
    <Navbar/>
    <Carousel/>
    <Cards/>
    <Footer/>
    <ToastContainer
    position="top-left"
    autoClose={1000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    theme="light"
    />

</>
  );
}

export default App;
