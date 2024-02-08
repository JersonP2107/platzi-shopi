import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="flex justify-between items-center">
            <ul>
                <li>
                    <NavLink to='/'>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/clothes'>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/electronics'>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/fornitures'>
                        Fornitures
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/toys'>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/others'>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul>
                <li>
                    jersondev21@gmail.com
                </li>
                <li>
                    <NavLink to='/'>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/clothes'>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/electronics'>
                        Sign In
                    </NavLink>
                </li>
                <li>
                    🛒 0
                </li>
            </ul>
        </nav>
    )
}

export default NavBar 