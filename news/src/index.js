import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import HomePage from './pages/HomePage';

const router = createBrowserRouter([
  
    {
      path: '/',
      element: <HomePage />
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
     <RouterProvider router={router} />
    
  </>
);