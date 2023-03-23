import React from "react"
import { AiFillCaretRight, IconName } from "react-icons/ai"
import TableApp from "../../components/Table/TableApp"

const Korea = ({ sub }) => {
    // const temp = comicItems.filter((data) => data.title === "국내 만화")
    // console.log(temp.title)

    let category = ""

    const temp = {
        title: "국내 만화",
        submenu: [
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
                        국내 | {category}
                    </h2>
                ) : (
                    <h2>
                        <AiFillCaretRight />
                        국내
                    </h2>
                )}
            </div>
        </div>
    )
}

export default Korea
