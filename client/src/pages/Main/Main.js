import { AiFillCaretRight } from "react-icons/ai"
import SearchBox from "../../components/Form/SearchBox"
import Slider from "../../components/Slider/Slider"
import TableApp from "../../components/Table/TableApp"

const Main = () => {
    return (
        <div>
            <Slider />

            <h2>
                <AiFillCaretRight /> 최근 등록 도서
            </h2>
            <TableApp />
            <SearchBox />
        </div>
    )
}

export default Main
