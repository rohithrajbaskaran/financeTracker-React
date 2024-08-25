import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import HomePage from './pages/HomePage.jsx'
import Edit from './pages/Edit.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import Report from './pages/Report.jsx';
import { DataContextProvider } from './useContext/DataContext.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/edit',
    element: <Edit />
  },
  {
    path: '/report',
    element: <Report />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </DataContextProvider>
    
  </StrictMode>,
)
