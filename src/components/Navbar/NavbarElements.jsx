import styled from 'styled-components';
import { Container } from '../../globalStyles';
import { Link } from 'react-router-dom';
import { FaReact } from 'react-icons/fa';

export const Nav = styled.nav`
    display:flex;
    top: 0;
    left: 0;
    background-color: #e76f51;
    height: 80px;
    justify-content: center;
    align-items: center;
    position: sticky;
    z-index: 999;
    font-size: 1.2rem;
`
export const NavbarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    height: 80px;

    ${Container}
`;

export const NavLogo = styled(Link)`
    color: #264653;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    justify-self: flex-start;
    align-self: center;
`;

export const NavIcon = styled(FaReact)`
    font-size: 1.8rem;
`

export const NavDropdown = styled.div`
    display: none;

    @media screen and (max-width: 767px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        font-size: 1.8rem;
        transform: translate(-100%, 60%);
        cursor: pointer;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 767px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        position: absolute;
        height: 90vh;
        top: 80px;
        left: ${({click}) => (click? 0 : '-100%')};
        transition: all 0.5s ease-in;
        background: #f4a261;
    }
`;

export const NavItem = styled.li`
    height: 80px;
    border-bottom: 3px solid transparent;
    flex: 1 1 0px;
    text-align: center;

    &:hover {
        border-bottom: 3px solid #264653;
    }

    @media screen and (max-width: 767px) {
        width: 100%;
        flex: 0 1 auto;

        &:hover {
            border: none;
        }
    }
`;

export const NavLink = styled(Link)`
    display: flex;
    color: #264653;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;

    @media screen and (max-width: 767px) {
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;

        &:hover {
            color: #2a9d8f;
            transition: all 0.3s ease;
        }
    }
`;

export const NavItemBtn = styled.li`
    @media screen and (max-width: 767px) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 120px;
    }
`;

export const NavBtnLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 8px 16px;
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
`;