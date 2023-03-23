import { AiFillCaretRight } from "react-icons/ai"
import { Link } from "react-router-dom"

const SearchTable = ({ columns, result }) => {
    return (
        <>
            <table className="styled-table">
                <thead>
                    <tr>
                        {columns.map((column) => (
                            <th key={column}>{column}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {result &&
                        result.map(({ title, category, price, bookid }) => (
                            <tr key={title + category + price}>
                                <td className="title">
                                    <Link to={`/detail/${bookid}`}>
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

export default SearchTable
