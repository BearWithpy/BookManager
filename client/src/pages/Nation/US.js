import React from "react"
import { AiFillCaretRight } from "react-icons/ai"

const US = ({ sub }) => {
    let category = ""

    const temp = {
        title: "미국 만화",
        submenu: [
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
        ],
    }
    for (let i of temp.submenu) {
        if (i.cName === sub) {
            category = i.title
        }
    }
    return (
        <div>
            <div>
                {sub ? (
                    <h2>
                        <AiFillCaretRight />
                        미국 | {category}
                    </h2>
                ) : (
                    <h2>
                        <AiFillCaretRight />
                        미국
                    </h2>
                )}
            </div>
        </div>
    )
}

export default US
