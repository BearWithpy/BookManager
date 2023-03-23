import { useState, useEffect, useRef } from "react"
import { NavLink } from "react-router-dom"

import Dropdown11 from "./Dropdown11"
import { NavHighlight } from "./tempStyle"

const MenuItems11 = ({ items, depthLevel }) => {
    const [dropdown, setDropdown] = useState(false)

    let ref = useRef()

    useEffect(() => {
        const handler = (event) => {
            if (
                dropdown &&
                ref.current &&
                !ref.current.contains(event.target)
            ) {
                setDropdown(false)
            }
        }
        document.addEventListener("mousedown", handler)
        document.addEventListener("touchstart", handler)
        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", handler)
            document.removeEventListener("touchstart", handler)
        }
    }, [dropdown])

    const onMouseEnter = () => {
        window.innerWidth > 960 && setDropdown(true)
        // window.innerWidth > 750 && setDropdown(true)
    }

    const onMouseLeave = () => {
        window.innerWidth > 960 && setDropdown(false)
        // window.innerWidth > 750 && setDropdown(true)
    }

    return (
        <li
            className="menu-items"
            ref={ref}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {items.submenu ? (
                <>
                    <button
                        type="button"
                        aria-haspopup="menu"
                        aria-expanded={dropdown ? "true" : "false"}
                        onClick={() => {
                            // window.location.href = items.path
                            setDropdown((prev) => !prev)
                        }}
                    >
                        <NavHighlight to={items.path}>
                            {items.title + " "}{" "}
                        </NavHighlight>
                        {/* {items.title}{" "} */}
                        {depthLevel > 0 ? (
                            <span>&raquo;</span>
                        ) : (
                            // <span className="arrow" />
                            ""
                        )}
                    </button>
                    <Dropdown11
                        depthLevel={depthLevel}
                        submenus={items.submenu}
                        dropdown={dropdown}
                    />
                </>
            ) : (
                <button>
                    <NavHighlight to={items.path}>{items.title}</NavHighlight>
                </button>
            )}
        </li>
    )
}

export default MenuItems11
