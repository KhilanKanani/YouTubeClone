import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from "./Component/Navbar"
import SideBar from "./Component/SideBar"
import Home from './Component/Home'
import PlayingVideo from './Component/PlayingVideo'
import { useState } from 'react'
import SearchToMobile from './OtherComponent/SearchToMobile'

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const Router = createBrowserRouter([
    {
      path: '/',
      element:
        <div className={`flex ${isSidebarOpen ? "xl:justify-end justify-center" : "justify-center"}`}>
          <Navbar toggleSidebar={() => setIsSidebarOpen(prev => !prev)} />
          <SideBar isOpen={isSidebarOpen} />
          <Home isOpen={isSidebarOpen} />
        </div>
    },

    {
      path: '/search',
      element:
        <div>
          <SearchToMobile />
        </div>
    },

    {
      path: '/playVideo/:id',
      element:
        <div className='flex justify-center'>
          <Navbar toggleSidebar={() => setIsSidebarOpen(prev => !prev)} />
          <SideBar isOpen={isSidebarOpen} />
          <PlayingVideo />
        </div>
    }
  ])


  return (
    <div>
      <RouterProvider router={Router} />
    </div>
  )
}

export default App
