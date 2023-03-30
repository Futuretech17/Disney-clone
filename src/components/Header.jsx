import styled from "styled-components"

const Header =() => {
    return (
        <Nav>
            <NavLogo>Header</NavLogo>
            <Loginbtn>Login</Loginbtn>
        </Nav>
    )
}

const Nav = styled.div`
display:flex;
justify-content: space-between;
align-items:center;
padding: 20px;`

const NavLogo = styled.div``
const Loginbtn = styled.div``

export default Header; 