import { Outlet} from "react-router-dom";
import './styles/App.css';

import Header from './components/Header'
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <div className="app-container">
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
};
export default App;
