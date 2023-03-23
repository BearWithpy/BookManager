import React, { useState } from "react"
import { Link } from "react-router-dom"

const Dropdown = ({ menu }) => {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    const menuItems = [
        {
            cName: "sj",
            path: "/nation/kr/sj",
            title: "순정만화",
        },
        {
            cName: "sn",
            path: "/nation/kr/sn",
            title: "소년만화",
        },
        {
            cName: "sy",
            path: "/nation/kr/sy",
            title: "성인만화",
        },
        {
            cName: "kh",
            path: "/nation/kr/kh",
            title: "기획만화",
        },
        {
            cName: "mg",
            path: "/nation/kr/mg",
            title: "만화잡지",
        },
    ]
    const menuItemsUS = [
        {
            cName: "dm",
            path: "/nation/us/dm",
            title: "DC 코믹스마블",
        },
        {
            cName: "cr",
            path: "/nation/us/cr",
            title: "코믹스리터러리",
        },
        {
            cName: "gn",
            path: "/nation/us/gn",
            title: "그래픽노블",
        },
    ]
    const menuItemsJP = [
        {
            cName: "sj",
            path: "/nation/jp/sj",
            title: "순정만화",
        },
        {
            cName: "sn",
            path: "/nation/jp/sn",
            title: "소년만화",
        },
        {
            cName: "sy",
            path: "/nation/jp/sy",
            title: "성인만화",
        },
        {
            cName: "kh",
            path: "/nation/jp/kh",
            title: "기획만화",
        },
    ]

    return (
        <>
            <ul
                onClick={handleClick}
                className={click ? "dropdown-menu clicked" : "dropdown-menu"}
            >
                {menu === 0
                    ? menuItems.map((item, index) => {
                          return (
                              <li key={index}>
                                  <Link
                                      className={item.cName}
                                      to={item.path}
                                      onClick={() => setClick(false)}
                                  >
                                      {item.title}
                                  </Link>
                              </li>
                          )
                      })
                    : menu === 1
                    ? menuItemsJP.map((item, index) => {
                          return (
                              <li key={index}>
                                  <Link
                                      className={item.cName}
                                      to={item.path}
                                      onClick={() => setClick(false)}
                                  >
                                      {item.title}
                                  </Link>
                              </li>
                          )
                      })
                    : menuItemsUS.map((item, index) => {
                          return (
                              <li key={index}>
                                  <Link
                                      className={item.cName}
                                      to={item.path}
                                      onClick={() => setClick(false)}
                                  >
                                      {item.title}
                                  </Link>
                              </li>
                          )
                      })}
            </ul>
        </>
    )
}

export default Dropdown
