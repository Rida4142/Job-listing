import React from 'react'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'

import Mainlayout from './Layout/Mainlayout'
import HomePage from './Pages/HomePage'
import JobsPage from './Pages/JobsPage'
import NotFoundPage from './Pages/NotFoundPage'

const App = () => {

  const router=createBrowserRouter(
    createRoutesFromElements (
    <Route path='/' element={<Mainlayout />}>
       <Route index element={<HomePage />} />
       <Route path='/jobs' element={<JobsPage />} />
        <Route path='*' element={<NotFoundPage />} />
    </Route>
   
  )
  )
  return (
   
   <RouterProvider router={router} />
   
  )
}

export default App


