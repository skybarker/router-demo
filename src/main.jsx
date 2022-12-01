import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import './index.css';
import Home from "./routes/Home";
import Error from './routes/Error';
import Contact from './routes/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
    children: [{
      path: "/contacts/:id",
      element: <Contact />,
    }]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
)
