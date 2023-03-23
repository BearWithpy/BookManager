import MenuItems11 from "./MenuItems11"

const Dropdown11 = ({ submenus, dropdown, depthLevel }) => {
    depthLevel = depthLevel + 1
    const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : ""
    return (
        <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
            {submenus.map((submenu, index) => (
                <MenuItems11
                    items={submenu}
                    key={index}
                    depthLevel={depthLevel}
                />
            ))}
        </ul>
    )
}

export default Dropdown11
