import axios from "axios"
import { useEffect, useState } from "react"
import { AiFillCaretRight } from "react-icons/ai"
import { Link, useParams } from "react-router-dom"

const Detail = () => {
    const { id } = useParams()
    const [book, setBook] = useState({})
    const [time, setTime] = useState("")

    useEffect(() => {
        for (let i = 0; i < 2; i++) {
            getData()
        }
    }, [])

    const getData = async (e) => {
        axios
            .get("/book/one", {
                params: {
                    id: id,
                },
            })
            .then((res) => {
                // console.log(typeof res)
                // console.log(res)
                setBook(res.data.data[0])
                setTime(res.data.data[0].updatedate)
            })
            .catch((err) => console.log(err))
    }
    const handleDelete = async () => {
        axios
            .delete("/book/one", {
                data: book,
            })
            .then((res) => {})
            .catch((err) => console.log(err))
    }

    // const timeParser = (rawDate) => {
    //     const TIME_ZONE = 9 * 60 * 60 * 1000 // 9시간
    //     const d = new Date(rawDate)

    //     const date = new Date(d.getTime() + TIME_ZONE)
    //         .toISOString()
    //         .split("T")[0]
    //     const time = d.toTimeString().split(" ")[0]

    //     return date + " " + time
    // }

    const nationTable = { kr: "국내 만화", jp: "일본 만화", us: "미국 만화" }
    const genreTable = {
        sj: "순정만화",
        sn: "소년만화",
        sy: "성인만화",
        kh: "기획도서",
        mg: "만화잡지",
        dm: "DC 코믹스마블",
        cr: "코믹스리터러리",
        gn: "그래픽노블",
    }
    const fontStyle = {}
    return (
        <div>
            <h2>
                <AiFillCaretRight />
                상세 정보 페이지
            </h2>

            {/* 제목 슬램덩크 오리지널 8
            카테고리 스포츠
            국가 일본
            장르 소년만화
            가격 5,000 원
            입력일 2023.03.15 13:22:33 */}
            <table className="styled-table detail-table">
                <tbody>
                    <tr>
                        <td>제목</td>
                        <td>{book.title}</td>
                    </tr>
                    <tr>
                        <td>카테고리</td>
                        <td>{book.category}</td>
                    </tr>
                    <tr>
                        <td>국가</td>
                        <td>{nationTable[book.nation]}</td>
                    </tr>
                    <tr>
                        <td>장르</td>
                        <td>{genreTable[book.genre]}</td>
                    </tr>
                    <tr>
                        <td>가격</td>
                        <td>{book.price}</td>
                    </tr>
                    <tr>
                        <td>입력일</td>
                        <td>
                            {time.substring(0, 10)} {time.substring(11, 19)}
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* <h3>제목: {book.title}</h3>
            <h3>카테고리: {book.category}</h3>
            <h3>국가: {nationTable[book.nation]}</h3>
            <h3>장르: {genreTable[book.genre]}</h3>
            <h3>가격: {book.price} 원</h3>
            <h3>입력일: {time}</h3> */}
            {/* <h3>입력일: {timeParser(time)}</h3> */}

            <>
                <button className="btn" type="submit">
                    <Link to={`/input/edit/${book.bookid}`}>수정</Link>
                </button>

                <button className="btn" type="submit" onClick={handleDelete}>
                    <a href="/">삭제</a>
                </button>
            </>
        </div>
    )
}

export default Detail
