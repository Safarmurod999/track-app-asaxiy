import { routesArr } from '../../data/data'
import { Link, useLocation } from 'react-router'
import logo from "../../assets/asaxiy-logo.svg"

const Sidebar = () => {
    const { pathname } = useLocation();

    return (
        <aside className='sidebar position-fixed h-100 bg-dark col-2 px-2 py-3'>
            <div className="text-center">
                <img src={logo} alt="logo" />
            </div>
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