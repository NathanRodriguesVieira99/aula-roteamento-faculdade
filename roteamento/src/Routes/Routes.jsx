import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contacts from "../pages/Contacts/Contacts";
import SaibaMais from "../pages/SaibaMais/SaibaMais";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />, // Tela de com a rota inicial
  },
  {
    path: '/app',
    element: <App />, // App como a rota principal
    children: [
      {
        index: true, // Rota padrão dentro de App
        element: <Home />
      },
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contacts',
        element: <Contacts />
      },
      {
        path: 'saiba_mais',
        element: <SaibaMais />
      }
    ]
  }
]);

export default router;
