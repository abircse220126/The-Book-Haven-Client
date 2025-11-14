import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import App from './App.jsx'
import Root from './Component/Layout/Root.jsx';
import Home from './Component/HomePage/Home/Home.jsx';
import Register from './Component/Register/Register.jsx';
import Login from './Component/Login/Login.jsx';
import ViewDetails from './ViewDetails/ViewDetails.jsx';
import AddBook from './Component/AddBook/AddBook.jsx';
import MyBook from './Component/MyBook/MyBook.jsx';
// import AllBooksPage from './Component/AllBooksPage/AllBooksPage.jsx';
import AuthProvider from './Context/AuthContext/AuthProvider.jsx';
// import AllBookPages from './Component/AllBooksPage/AllBookPages.jsx';
import AllBooksPage from './Component/AllBooksPage/AllBooksPage .jsx';
import Delete from './Component/DeletePage/Delete.jsx';
// import Updata from './Component/UpdatePage/Updata.jsx';
import UpdateBookPage from './Component/UpdatePage/UpdateBookPage.jsx';
// import AllBook from './Component/AllBookPage/AllBook.jsx';
// import AllBooksPage from './Component/AllBookPage/AllBookPage.jsx';
// import AuthProvider from './Context/AuthContext/AuthProvider.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
      {
        index : true , Component:Home
      },
      {
        path:"/register",
        Component: Register
      },
      {
        path:"/login",
        Component:Login
      },
      {
        path:"/viewdetails/:id",
        loader:({params})=>fetch(`http://localhost:3000/viewdetails/${params.id}`) ,
        Component:ViewDetails
      },

      {
        path:"/addbook",
        Component:AddBook
      },
      {
        path:"mybook",
        Component:MyBook

      },
      {
        path:"all-book",
        Component:AllBooksPage
        
      },
      {
        path:"/delete/:id",
        Component:Delete
      },
       {
         path:"/update-book/:id",
         loader:({params})=>fetch(`http://localhost:3000/viewdetails/${params.id}`),
         Component:UpdateBookPage 
      },
      {
        
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />,
    </AuthProvider>
  </StrictMode>,
)
