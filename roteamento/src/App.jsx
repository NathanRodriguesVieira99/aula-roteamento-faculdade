import { Outlet, useLocation } from "react-router-dom";
import './styles/App.css';

import Header from './components/Header'
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();

  const isHomePage = location.pathname === '/app'

  return (
    <>
      <Header />
      <Nav />
      <div className="app-container">
        <main>
          {isHomePage && (
            <div style={{
              backgroundColor: '#000',
              color: '#fff',
              padding: '1rem',
              borderRadius: '5px',
              marginBottom: '1rem',
            }}>
              <h2>página inicial!</h2>
            </div>
          )}
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
};
export default App;
