import Table from "./tempTable"

import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

function TableApp({ sub, nation }) {
    const [url, setUrl] = useState("")

    useEffect(() => {
        // 진짜 왜 이러냐고
        for (let index = 0; index < 2; index++) {
            getData()
        }
        // getData()
    }, [sub, nation])

    const getData = async (e) => {
        if (!sub) {
            switch (nation) {
                case "kr":
                    // console.log("/book/kr")
                    setUrl("/book/kr")
                    break

                case "jp":
                    // console.log("/book/jp")
                    setUrl("/book/jp")
                    break

                case "us":
                    // console.log("/book/us")
                    setUrl("/book/us")
                    break

                default:
                    // console.log("/book/recent")
                    setUrl("/book/recent")
                    break
            }
        } else {
            switch (nation) {
                case "kr":
                    // console.log(`/book/kr/${sub}`)
                    setUrl(`/book/kr/${sub}`)
                    break

                case "jp":
                    // console.log(`/book/jp/${sub}`)
                    setUrl(`/book/jp/${sub}`)
                    break

                case "us":
                    // console.log(`/book/us/${sub}`)
                    setUrl(`/book/us/${sub}`)
                    break

                default:
                    break
            }
        }
    }

    const columns = ["제목", "카테고리", "가격"]

    return (
        <>
            <Table columns={columns} url={url} sub={sub} nation={nation} />
        </>
    )
}

export default TableApp
