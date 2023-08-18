import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Join from './components/Join';
import Chat from './components/Chat';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Join />,
  },
  {
    path: '/chat',
    element: <Chat />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
