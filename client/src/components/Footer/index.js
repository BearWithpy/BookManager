import React from "react"
import { FaBars } from "react-icons/fa"
import { Col, Row } from "reactstrap"
import {
    MoblieIcon,
    Nav,
    NavbarContainer,
    NavItem,
    NavLinks,
    NavMenu,
} from "../Navbar/NavbarElements"
import "./Footer.css"
import { Box, Column, Container, FooterLink, Heading } from "./FooterStyles"

const Footer = () => {
    const thisYear = () => {
        const year = new Date().getFullYear()
        return year
    }

    return (
        <div className="Footer">
            <hr />
            <br />

            <div>
                <Row>
                    <Col>
                        <p>
                            Copyright &copy;{" "}
                            <span>
                                {thisYear()} JSS Inc. All Rights Reserved
                            </span>
                        </p>
                    </Col>
                </Row>
            </div>
            <footer></footer>
        </div>
    )
}

export default Footer
