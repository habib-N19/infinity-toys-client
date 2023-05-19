import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layout/Main'
import Login from '../pages/Login/Login'
import Register from '../pages/SignUp/Register'
import Blogs from '../pages/Blogs/Blogs'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import AddNewToy from '../pages/AddNewToy/AddNewToy'
import AllToys from '../pages/AllToys/AllToys'
import ToyDetails from '../pages/toyDetails/ToyDetails'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/blog',
        element: <Blogs></Blogs>
      },
      {
        path: '/addNewToy',
        element: <AddNewToy></AddNewToy>
      },
      {
        path: '/allToys',
        element: <AllToys></AllToys>,
        loader: () => fetch('http://localhost:5000/allToys')
      },
      {
        path: '/allToys/:id',
        element: <ToyDetails></ToyDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allToys/${params.id}`)
      },
      {
        path: 
      }
    ]
  }
])
export default router
