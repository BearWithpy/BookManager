import { useLocation } from "react-router-dom"

const Retrieve = () => {
    const location = useLocation()
    const result = location.state?.result
    const pathname = location.state?.pathname

    return (
        <div>
            {console.log(result)}
            {console.log(pathname)}
            <h2>검색 페이지</h2>
        </div>
    )
}

export default Retrieve
