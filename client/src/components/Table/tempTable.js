import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./Table.css"

export default function Table({ columns, sub, nation, url }) {
    const [books, setBooks] = useState([])
    const [axiosUrl, setAxiosUrl] = useState(url)

    useEffect(() => {
        // 진짜 왜 이러냐고
        for (let index = 0; index < 2; index++) {
            getData()
        }
    }, [url])

    const getData = async () => {
        let u = window.location.pathname
        if (window.location.pathname === "/") {
            u = "/book/recent"
        } else {
            u = "/book/" + u.substring(7)
        }
        axios
            .get(u, {})
            // .get(axiosUrl, {})
            .then((res) => {
                setBooks(res.data.data)
            })
            .catch((err) => console.log(err))
    }

    const data = books.map((book) => ({
        bookid: book.bookid,
        title: book.title,
        category: book.category,
        price: book.price,
    }))

    return (
        <>
            {/* {console.log("/book" + window.location.pathname.substring(7))} */}

            <table className="styled-table">
                <thead>
                    <tr>
                        {columns.map((column) => (
                            <th key={column}>{column}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map(({ title, category, price, bookid }) => (
                        <tr key={title + category + price}>
                            <td>
                                <Link
                                    className="title"
                                    to={`/detail/${bookid}`}
                                >
                                    {title}
                                </Link>
                            </td>
                            <td>{category}</td>
                            <td>{price}원</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
