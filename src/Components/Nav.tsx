import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
    width: 100%;
    ul {
        width: 100%;
        display: flex;
        justify-content: center;
        color: #444;
        li {
            transition: 300ms;
            margin: 0 10px 0 10px;
            &:hover {
                color: #ddd;
            }
            a {
                i {
                    display: block;
                    width: 40px;
                    height: 40px;
                    border-radius: 100%;
                    border: solid 2px;
                    line-height: 34px;
                    text-align: center;
                    margin: auto;
                    margin-bottom: 5px;
                }
            }
        }
    }
`;

export default (() => {
    return (
        <Nav>
            <ul>
                <li>
                    <Link to="/about">
                        <i className="fa fa-user"></i>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/work">
                        <i className="fa fa-folder"></i>
                        My Work
                    </Link>
                </li>
                <li>
                    <Link to="/contact">
                        <i className="fa fa-phone"></i>
                        Contact
                    </Link>
                </li>
                <li>
                    <a href="https://github.com/Mwmul">
                        <i className="fa fa-github-alt"></i>
                        Github
                    </a>
                </li>
            </ul>
        </Nav>
    )
}) as NavComponent;

interface props {}
type NavComponent = React.FC<props>;