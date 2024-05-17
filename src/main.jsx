import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import { Route } from 'react-router-dom'
import { createRoutesFromElements } from 'react-router-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './components/Home.jsx'
import Events from './components/Events.jsx'
import Forms from './components/Forms.jsx'
import CollegeLibrary from './components/CollegeLibrary.jsx'
import PersonalLibrary from './components/PersonalLibrary.jsx'
import Profile from './components/Profile.jsx'
import { SignIn } from './Auth/SignIn.jsx'
import { SignUp } from './Auth/SignUp.jsx'

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout />}>
//       <Route path='' element={<Home />} />
//       <Route path='events' element={<Events />} />
//       <Route path='forms' element={<Forms />} />
//       <Route path='collegelibrary' element={<CollegeLibrary />} />
//       <Route path='personallibrary' element={<PersonalLibrary />} />
//       <Route path='profile' element={<Profile />} />
//       <Route path='sign-in' element={<SignIn />} />
//       <Route path='sign-up' element={<SignUp />} />
//     </Route>
//   )
// )

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "events",
        element: <Events/>
      },
      {
        path: "forms",
        element: <Forms/>
      },
      {
        path: "collegelibrary",
        element: <CollegeLibrary/>
      },
      {
        path: "personallibrary",
        element: <PersonalLibrary/>
      },
      {
        path: "profile/:userId",
        element: <Profile/>
      }
    ],
  },
  {
    path: "/sign-up",
    element: <SignUp/>,
  },
  {
    path: "/sign-in",
    element: <SignIn/>,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
