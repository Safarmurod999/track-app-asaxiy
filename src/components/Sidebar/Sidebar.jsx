import { routesArr } from '../../data/data'
import { Link, useLocation } from 'react-router'
import logo from "../../assets/asaxiy-logo.svg"

const Sidebar = ({ toggle, setToggle }) => {
    const { pathname } = useLocation();

    return (
        <aside className={`sidebar position-fixed top-0 h-100 bg-dark px-2 py-3 z-3 ${toggle ? 'toggle' : ''}`}>
            <div className="text-center">
                <img src={logo} alt="logo" />
            </div>
            <button onClick={() => setToggle(!toggle)} className='position-absolute sidebar-btn'>
                <i className="fa-solid fa-xmark text-white"></i>
            </button>
            <ul className='mt-4'>
                {
                    routesArr.map((route) => {
                        return (
                            <li key={route.id} >
                                <Link to={route.path} className={`d-flex gap-3 w-100 rounded fs-6 text-white mb-1 px-3 py-2 sidebar-link ${pathname == route.path ? 'bg-secondary' : ''}`}>
                                    <span>
                                        <i className={route.icon}></i>
                                    </span>
                                    {route.name}
                                </Link>
                            </li>

                        )
                    })

                }
            </ul>
        </aside>
    )
}

export default Sidebar