import React from 'react'
import Navbar from './(components)/Navbar/index.jsx'
import Sidebar from './(components)/Sidebar/index.jsx'

const DashboardWrapper = ({children}) => {
  return (
    <div className='flex bg-zinc-950 text-zinc-300 w-full min-h-screen'>
        {/* <Sidebar /> */}
        SideBar
        <main className='dark flex flex-col w-full h-full py-7 px-9 bg-zinc-900 md:pl-24'>
            <Navbar />
            {children}
        </main>
    </div>
  )
}

export default DashboardWrapper