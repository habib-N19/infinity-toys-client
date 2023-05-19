import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layout/Main'
import Login from '../pages/Login/Login'
import Register from '../pages/SignUp/Register'
import Blogs from '../pages/Blogs/Blogs'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import AddNewToy from '../pages/AddNewToy/AddNewToy'

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
      }
    ]
  }
])
export default router
