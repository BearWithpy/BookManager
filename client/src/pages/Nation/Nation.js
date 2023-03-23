import { useParams } from "react-router-dom"
import SearchBox from "../../components/Form/SearchBox"
import TableApp from "../../components/Table/TableApp"
import Japan from "./Japan"
import Korea from "./Korea"
import US from "./US"

const Nation = () => {
    const { value, sub } = useParams()

    return (
        <div>
            {value === "kr" ? (
                <Korea sub={sub} />
            ) : value === "jp" ? (
                <Japan sub={sub} />
            ) : value === "us" ? (
                <US sub={sub} />
            ) : (
                <h1>Undefined</h1>
            )}
            <TableApp nation={value} sub={sub} />
            <SearchBox />
        </div>
    )
}

export default Nation
