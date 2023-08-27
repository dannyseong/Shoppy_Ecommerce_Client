import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage.jsx';
import AllProducts from './components/AllProducts.jsx';
import NewProduct from './components/NewProduct.jsx';
import ProductDetail from './components/ProductDetail.jsx';
import MyCart from './components/MyCart.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/products', element: <AllProducts /> },
      { path: '/products/new', element: <NewProduct /> },
      { path: '/products/:id', element: <ProductDetail /> },
      { path: '/carts', element: <MyCart /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
