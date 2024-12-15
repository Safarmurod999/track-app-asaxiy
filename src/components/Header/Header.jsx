
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Header = ({ toggle, setToggle }) => {
    return (
        <Navbar className="bg-body-tertiary w-100 py-3 px-3">
            <Container>
                <button onClick={() => setToggle(!toggle)} className='fs-5'>
                    <i className="fa-solid fa-bars"></i>
                </button>
                <Nav.Link href="/converter">Manager App</Nav.Link>
            </Container>
        </Navbar>
    )
}

export default Header