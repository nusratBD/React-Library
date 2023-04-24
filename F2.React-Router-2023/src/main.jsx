import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../src/App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Main from './components/Layout/Main';
import Contact from './components/Contact/Contact';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [{
      path: "/",
      element: <Home></Home>,
      loader: () => fetch('data.json')
    },
  {
    path: "contact",
    element: <Contact></Contact>
  },
  {
    path:'*',
    element: <div>Not Found</div>
  }
]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
