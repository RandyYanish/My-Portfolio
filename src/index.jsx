import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <homePage />,
      },
      {
        path: 'about',
        element: <aboutPage />,
      },
      {
        path: 'skills',
        element: <skillsPage />,
      },
      {
        path: 'work',
        element: <workPage />,
      },
      {
        path: 'contact',
        element: <contactPage />,
      },
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
