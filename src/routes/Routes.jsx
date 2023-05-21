import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layout/Main'
import Login from '../pages/Login/Login'
import Register from '../pages/SignUp/Register'
import Blogs from '../pages/Blogs/Blogs'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import AddNewToy from '../pages/AddNewToy/AddNewToy'
import AllToys from '../pages/AllToys/AllToys'
import ToyDetails from '../pages/toyDetails/ToyDetails'
import MyToys from '../pages/MyToys/MyToys'
import UpdateMyToy from '../pages/MyToys/UpdateMyToy'
import Home from '../pages/Home/Home/Home'
import PrivateRoutes from './PrivateRoutes'
import Loading from '../pages/shared/Loading/Loading'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/loading',
        element: <Loading></Loading>
      },
      {
        path: '/blog',
        element: <Blogs></Blogs>
      },
      {
        path: '/addNewToy',
        element: (
          <PrivateRoutes>
            <AddNewToy></AddNewToy>
          </PrivateRoutes>
        )
      },
      {
        path: '/allToys',
        element: <AllToys></AllToys>,
        loader: () =>
          fetch('https://infinity-toy-store-server.vercel.app/allToys')
      },
      {
        path: '/allToys/:id',
        element: (
          <PrivateRoutes>
            <ToyDetails></ToyDetails>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://infinity-toy-store-server.vercel.app/allToys/${params.id}`
          )
      },
      {
        path: '/myToys',
        element: (
          <PrivateRoutes>
            <MyToys></MyToys>
          </PrivateRoutes>
        )
      },
      {
        path: '/myToys/:id',
        element: (
          <PrivateRoutes>
            <UpdateMyToy></UpdateMyToy>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://infinity-toy-store-server.vercel.app/myToys/${params.id}`
          )
      }
    ]
  }
])
export default router
