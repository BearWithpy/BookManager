import { useState } from "react"
import { comicItems } from "../Dropdown/comicItems"

import MenuItems11 from "../temp/MenuItems11"
import { MenuNav, MenuNavbarContainer, NavStyle } from "./MenubarElements"

const MenuBar = () => {
    return (
        <div>
            <MenuNav>
                <MenuNavbarContainer>
                    <nav>
                        <ul className="menus">
                            {comicItems.map((menu, index) => {
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
                    {/* <NavStyle to="/">
                        <li>HOME</li>
                    </NavStyle>
                    <NavStyle to="/nation/kr">
                        <li
                            onMouseEnter={onMouseEnter}
                            onMouseLeave={onMouseLeave}
                        >
                            국내 만화
                        </li>
                        {dropdown && <Dropdown menu={0} />}
                    </NavStyle>
                    <NavStyle to="/nation/jp">
                        <li
                            onMouseEnter={onMouseEnter}
                            onMouseLeave={onMouseLeave}
                        >
                            일본 만화
                        </li>
                        {dropdown && <Dropdown menu={1} />}
                    </NavStyle>
                    <NavStyle to="/nation/us">
                        <li
                            onMouseEnter={onMouseEnter}
                            onMouseLeave={onMouseLeave}
                        >
                            미국 만화
                        </li>
                        {dropdown && <Dropdown menu={2} />}
                    </NavStyle> */}
                </MenuNavbarContainer>
            </MenuNav>
            <hr />

            <br />
            <br />
        </div>
    )
}

export default MenuBar
