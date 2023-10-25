import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import App from './App.tsx'
import Login from './login/Login.tsx';
import Register from './register/Register.tsx';
import ErrorPage from './errorPage/ErrorPage.tsx';
import './index.css'
import Level from './level/Level.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <ErrorPage />
  },
  {
    path: "/level",
    element: <Level />,
    errorElement: <ErrorPage />
  }
])

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App />} errorElement={<ErrorPage />}>
//       <Route path="login" element={<Login />} errorElement={<ErrorPage />}></Route>
//       <Route path="register" element={<Register />} errorElement={<ErrorPage />}></Route>
//     </Route>
//   )
// )

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
