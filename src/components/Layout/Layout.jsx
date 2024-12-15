import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Header from '../Header/Header'

const Layout = ({ children }) => {
    return (
        <main className='d-flex'>
            <Sidebar />
            <div className="col-2"></div>
            <section className='col-10'>
                <Header />
                {children}
            </section>
        </main>
    )
}

export default Layout