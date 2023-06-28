import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';


import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import { useAppDispatch } from './redux/store';
import { contentfulGetProjectsDataThunk } from './redux/reducers/projectsSlice';

function App() {
  const dispatch = useAppDispatch()

  useEffect(()=> {
    dispatch(contentfulGetProjectsDataThunk())
  }, [])

  return (
    <div className="text-center">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App;
