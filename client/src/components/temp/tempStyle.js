import { NavLink } from "react-router-dom"
import styled from "styled-components"

export const NavHighlight = styled(NavLink)`
    color: black;
    padding: 20px;
    font-size: 20px;
    font-weight: 400;
    margin: 5px;
    outline: invert;
    &:link {
        transition: 0.2s;
        text-decoration: none;
    }
    &:hover {
        color: red;
    }
    &.active {
        color: crimson;
        position: relative;
        font-weight: 700;
        top: 2px;
    }
`
