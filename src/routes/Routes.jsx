import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layout/Main'
import Login from '../pages/Login/Login'
import Register from '../pages/SignUp/Register'
import Blogs from '../pages/Blogs/Blogs'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
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
      }
    ]
  }
])
export default router
