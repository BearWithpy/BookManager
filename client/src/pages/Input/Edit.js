import axios from "axios"
import { useEffect, useState } from "react"
import { AiFillCaretRight } from "react-icons/ai"
import { Link, useParams } from "react-router-dom"

const Edit = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [nation, setNation] = useState("")
    const [genre, setGenre] = useState("")
    const [ID, setID] = useState("")
    const [updateValue, setUpdateValue] = useState({})
    const { id } = useParams()

    useEffect(() => {
        // for (let i = 0; i < 2; i++) {
        //     originDataGet()
        // }
        originDataGet()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        // alert(`submit! ${title} ${price}`)

        try {
            const data = await axios
                .put("/book", {
                    bookid: window.location.pathname.substring(12),
                    title: title,
                    category: category,
                    nation: nation,
                    genre: genre,
                    price: price,
                })
                .then((res) => {
                    const obj = res.data.data
                    window.localStorage.setItem("id", obj[0].bookid)
                })
                .finally(() => {
                    window.location.href =
                        "/detail/" + window.location.pathname.substring(12)
                })
        } catch (err) {
            // 오류 발생시 실행
            console.log(err)
        }
    }

    const originDataGet = async () => {
        try {
            const data = axios
                .get("/book/one", {
                    params: {
                        id: window.location.pathname.substring(12),
                    },
                })
                .then((res) => {
                    const obj = res.data.data
                    // console.log(obj)
                    setPrice(obj[0].price)
                    setTitle(obj[0].title)
                    setCategory(obj[0].category)
                    setNation(obj[0].nation)
                    setGenre(obj[0].genre)
                })
        } catch (err) {
            // 오류 발생시 실행
            console.log(err)
        }
    }

    return (
        //
        <>
            <h2>
                <AiFillCaretRight />
                수정 페이지
            </h2>

            <form onSubmit={handleSubmit}>
                <table className="styled-table detail-table">
                    <tbody>
                        <tr>
                            <td>제목</td>
                            <td>
                                {" "}
                                <input
                                    type="text"
                                    name="title"
                                    value={title}
                                    placeholder="제목"
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>카테고리</td>
                            <td>
                                {" "}
                                <input
                                    type="text"
                                    name="category"
                                    value={category}
                                    placeholder="카테고리"
                                    onChange={(e) =>
                                        setCategory(e.target.value)
                                    }
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>국가</td>
                            <td>
                                <select
                                    value={nation}
                                    onChange={(e) => setNation(e.target.value)}
                                >
                                    <option value="nan">
                                        국가를 선택하시오
                                    </option>
                                    <option value="kr">국내</option>
                                    <option value="jp">일본</option>
                                    <option value="us">미국</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>장르</td>
                            <td>
                                {nation === "kr" ? (
                                    <select
                                        value={genre}
                                        onChange={(e) =>
                                            setGenre(e.target.value)
                                        }
                                    >
                                        <option value="nan">
                                            를 선택하시오
                                        </option>
                                        <option value="sj">순정</option>
                                        <option value="sn">소년</option>
                                        <option value="sy">성인</option>
                                        <option value="kh">기획</option>
                                        <option value="mg">만화 잡지</option>
                                    </select>
                                ) : nation === "jp" ? (
                                    <select
                                        value={genre}
                                        onChange={(e) =>
                                            setGenre(e.target.value)
                                        }
                                    >
                                        <option value="nan">
                                            를 선택하시오
                                        </option>
                                        <option value="sj">순정</option>
                                        <option value="sn">소년</option>
                                        <option value="sy">성인</option>
                                        <option value="kh">기획</option>
                                    </select>
                                ) : (
                                    <select
                                        value={genre}
                                        onChange={(e) =>
                                            setGenre(e.target.value)
                                        }
                                    >
                                        <option value="nan">
                                            를 선택하시오
                                        </option>
                                        <option value="dm">
                                            DC 코믹스마블
                                        </option>
                                        <option value="cr">
                                            코믹스리터러리
                                        </option>
                                        <option value="gn">그래픽노블</option>
                                    </select>
                                )}
                            </td>
                        </tr>
                        <tr>
                            <td>가격</td>
                            <td>
                                {" "}
                                <input
                                    type="text"
                                    name="price"
                                    value={price}
                                    placeholder="가격"
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>

                <button className="btn" type="submit" onClick={handleSubmit}>
                    {/* <Link to={`/detail/${ID}`}>Save</Link> */}
                    <Link>Save</Link>
                </button>
            </form>
        </>
    )
}

export default Edit
