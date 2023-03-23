import React, { useEffect, useState } from "react"
import SearchTable from "./SearchTable"

const SearchTableApp = () => {
    const [url, setUrl] = useState("")

    useEffect(() => {
        getData()
    }, [])

    const getData = async (e) => {}

    const columns = ["제목", "카테고리", "가격"]

    return (
        <>
            <SearchTable columns={columns} />
        </>
    )
}

export default SearchTableApp
