import React from "react"
import { AiFillCaretRight } from "react-icons/ai"

const Japan = ({ sub }) => {
    let category = ""

    const temp = {
        title: "일본 만화",
        submenu: [
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
                        일본 | {category}
                    </h2>
                ) : (
                    <h2>
                        <AiFillCaretRight />
                        일본
                    </h2>
                )}
            </div>
        </div>
    )
}

export default Japan
