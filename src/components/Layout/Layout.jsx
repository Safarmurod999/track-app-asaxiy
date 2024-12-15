import React, { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Header from '../Header/Header'

const Layout = ({ children }) => {
    const [toggle, setToggle] = useState(false);
    return (
        <main className='d-flex'>
            <Sidebar toggle={toggle} setToggle={setToggle} />
            {/* <div className="col-2"></div> */}
            <section className={`main position-absolute top-0 end-0 overflow-hidden ${toggle ? 'toggle' : ''}`}>
                <Header toggle={toggle} setToggle={setToggle} />
                {children}
            </section>
        </main>
    )
}

export default Layout