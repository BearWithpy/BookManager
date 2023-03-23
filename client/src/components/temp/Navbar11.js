import { menuItems11 } from "./menuitem11"
import MenuItems11 from "./MenuItems11"
import "./temp.css"

const Navbar11 = () => {
    return (
        <nav>
            <ul className="menus">
                {menuItems11.map((menu, index) => {
                    const depthLevel = 0
                    return (
                        <MenuItems11
                            items={menu}
                            key={index}
                            depthLevel={depthLevel}
                        />
                    )
                })}
            </ul>
        </nav>
    )
}

export default Navbar11
