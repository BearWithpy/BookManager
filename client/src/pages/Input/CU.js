import React from "react"
import { useParams } from "react-router-dom"
import SearchBox from "../../components/Form/SearchBox"
import Edit from "./Edit"
import Input from "./Input"

const CU = () => {
    const { value } = useParams()
    return (
        <div>
            {value === "edit" ? (
                <>
                    <Edit />
                    {/* <SearchBox /> */}
                </>
            ) : (
                <>
                    <Input />
                    {/* <SearchBox /> */}
                </>
            )}
        </div>
    )
}

export default CU
