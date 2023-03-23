import {
    MoblieIcon,
    Nav,
    NavbarContainer,
    NavItem,
    NavLinks,
    NavLogo,
    NavMenu,
} from "./NavbarElements"
import { FaBars } from "react-icons/fa"

const Navbar = () => {
    return (
        <div>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">@ReverseLevel</NavLogo>
                    <MoblieIcon>
                        <FaBars />
                    </MoblieIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="/">홈</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="login">로그인</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="signin">회원가입</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact">고객 센터</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="coop">제휴문의</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="aboutus">회사 소개</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </div>
    )
}

export default Navbar
