import axios from "axios"
import React, { useEffect, useState } from "react"
import { AiFillCaretRight } from "react-icons/ai"
import { Link } from "react-router-dom"
import SearchTable from "../Table/SearchTable"

import "./form.css"

const SearchBox = () => {
    const [value, setValue] = useState("")
    const [point, setPoint] = useState("title")
    const [search, setSearch] = useState(false)
    const [path, setPath] = useState(window.location.pathname)

    const [result, setResult] = useState([])

    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log(window.location.pathname.substring(8, 10))
        // console.log(window.location.pathname.substring(11, 13))

        try {
            await axios
                .post("/book/search/title", {
                    point: point,
                    value: e.target.value.value,
                    nation: window.location.pathname.substring(8, 10),
                    sub: window.location.pathname.substring(11, 13),
                })
                .then((res) => {
                    const obj = res.data.data
                    // window.localStorage.setItem("id", obj[0].bookid)
                    // console.log(typeof obj)
                    setPath(window.location.pathname)
                    setResult(obj)
                })
                .finally(() => {
                    // window.location.href =
                    //     "/detail/" + window.localStorage.getItem("id")
                })
        } catch (err) {
            // 오류 발생시 실행
            console.log(err)
        }
    }

    const selectStyle = {
        minHeight: " 32px",
        marginRight: "10px",
    }

    const boxWrapper = {
        display: "flex",
        // justifyContent: "right",
        justifyContent: "space-between",
    }
    const searchStyle = {
        fontSize: "large",
        marginRight: "10px",
        minHeight: "35px",
        minWidth: "250px",
    }
    const columns = ["제목", "카테고리", "가격"]

    return (
        <div>
            <br />
            <br />
            <br />

            <div style={boxWrapper}>
                <h2>
                    <AiFillCaretRight />
                    검색 결과
                </h2>
                <div style={boxWrapper}>
                    <form onSubmit={handleSubmit}>
                        <select
                            style={selectStyle}
                            value={point}
                            onChange={(e) => setPoint(e.target.value)}
                        >
                            <option value="title">제목</option>
                            <option value="price">가격 (~원 미만)</option>
                            <option value="category">카테고리</option>
                        </select>
                        <input
                            style={searchStyle}
                            type="text"
                            name="value"
                            onChange={handleChange}
                        />
                        <button className="btn" type="submit">
                            {/* <Link>검색</Link> */}
                            <Link
                                type="submit"
                                to="/retrieve"
                                state={{
                                    result: result,
                                    pathname: window.location.pathname,
                                }}
                                onClick={handleSubmit}
                            >
                                검색
                            </Link>
                        </button>
                    </form>
                    <button className="btn" type="submit">
                        <Link to="/input">생성</Link>
                    </button>
                </div>
            </div>
            <SearchTable columns={columns} result={result} />
        </div>
    )
}

export default SearchBox
