import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contacts from "../pages/Contacts/Contacts";
import SaibaMais from '../pages/SaibaMais/SaibaMais';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // O App será o pai de todas as rotas filhas (ele não tem nada pra mostrar)
    children: [
      {
        index: true, // Define a rota padrão como Home
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
