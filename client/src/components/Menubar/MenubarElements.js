import { Link as LinkMobile, NavLink } from "react-router-dom"
import { Link as LinkWeb } from "react-router-dom"
import styled from "styled-components"

export const MenuNav = styled.div`
    background: #fff;
    height: 80px;
    /* margin-top: -80px; */
    display: flex;
    // justify-content: center;
    align-items: center;
    font-size: 150%;
    position: sticky;
    margin: 7px;
    top: 0;
    z-index: 10;

    @media screen and(max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const MenuNavbarContainer = styled.div`
    display: flex;
    // justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    // padding: 0px 0px 0px 85px;
    max-width: 1100px;
`

export const MenuNavLogo = styled(LinkWeb)`
    color: red;
    justify-content: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`

export const MenuMoblieIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 3rem;
        cursor: pointer;
        color: #000;
    }
`

export const MenuNavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -60px;
`

export const MenuNavItem = styled.li`
    height: 80px;
    margin-right: 25px;
`

export const MenuNavLinks = styled(LinkMobile)`
    color: #000;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #01bf71;
    }
`
//////////////////////////////////////////////

export const NavStyle = styled(NavLink)`
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
