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
import JobPage,{jobLoader} from './Pages/JobPage'
import AddJobPage from './Pages/AddJobPage'

const App = () => {

  const router=createBrowserRouter(
    createRoutesFromElements (
    <Route path='/' element={<Mainlayout />}>
       <Route index element={<HomePage />} />
       <Route path='/jobs' element={<JobsPage />} />
        <Route path='/add-job' element={<AddJobPage />} />
       <Route path='/jobs/:id' element={<JobPage/>} loader={jobLoader}/>
        <Route path='*' element={<NotFoundPage />} />
    </Route>
   
  )
  )
  return (
   
   <RouterProvider router={router} />
   
  )
}

export default App


