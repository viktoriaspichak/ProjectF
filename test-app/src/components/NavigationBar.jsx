import React from 'react';
import 'rsuite/dist/rsuite.min.css';
import './navigation_bar.css'
import { Sidebar, Sidenav,  Navbar, Nav } from 'rsuite';
import CogIcon from '@rsuite/icons/legacy/Cog';
import AngleLeftIcon from '@rsuite/icons/legacy/AngleLeft';
import AngleRightIcon from '@rsuite/icons/legacy/AngleRight';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome} from '@fortawesome/free-solid-svg-icons';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { faJs as fabJs } from '@fortawesome/free-brands-svg-icons';
import {faReact} from "@fortawesome/free-brands-svg-icons";
const headerStyles = {
    padding: 18,
    fontSize: 16,
    height: 56,
    color: ' #fff',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
};

const NavToggle = ({ expand, onChange }) => {
    return (
        <Navbar appearance="subtle" className="nav-toggle">
            <Nav>
                <Nav.Menu
                    noCaret
                    placement="topStart"
                    trigger="click"
                    title={<CogIcon style={{ width: 20, height: 20 }} size="sm" />}
                >
                    <Nav.Item>Help</Nav.Item>
                    <Nav.Item>Settings</Nav.Item>
                    <Nav.Item>Sign out</Nav.Item>
                </Nav.Menu>
            </Nav>

            <Nav pullRight>
                <Nav.Item onClick={onChange} style={{ width: 56, textAlign: 'center' }}>
                    {expand ? <AngleLeftIcon /> : <AngleRightIcon />}
                </Nav.Item>
            </Nav>
        </Navbar>
    );
};

const NavigationBar = () => {
    const [expand, setExpand] = React.useState(true);
    return (
        <div>

                <Sidebar
                    width={expand ? 250 : 40}
                    collapsible

                >
                    <Sidenav.Header>
                        <div style={headerStyles}>
                            <a>
                                <img style={{
                                    height: '28px',
                                    margin: 'auto',}}
                                     src="https://lms.junjun.io/wp-content/themes/Junjun-lms/assets/images/logo.svg" alt="logo"></img>
                            </a>
                        </div>
                    </Sidenav.Header>
                    <Sidenav expanded={expand} defaultOpenKeys={['1']} appearance="subtle">
                        <Sidenav.Body>
                            <Nav>
                                <Nav.Item  eventKey="1" style={{ position: 'relative' }}>
                                    Оксана Тригуб
                                    <FontAwesomeIcon style={{ position: 'absolute', right: '38px', top: '50%', transform: 'translateY(-50%)'}} icon={faSquareCheck} />
                                    <p style={{ color:"#bba8bff5" }}>student</p>
                                </Nav.Item>
                                <Nav.Item   href={"/dashboard"} eventKey="2" style={{ position: 'relative' }}>
                                    Дашборд
                                    <FontAwesomeIcon icon={faHome}style={{ position: 'absolute', right: '38px', top: '50%', transform: 'translateY(-50%)'   }} />
                                </Nav.Item>
                                <Nav.Menu
                                    icon={ <FontAwesomeIcon  style={{float: "right"}} icon={fabJs}  />}
                                    eventKey="3"
                                    trigger="hover"
                                    placement="rightStart"
                                    title={
                                        <span>
      Js Course <span className="menu-pink-mark">54</span>
    </span>
                                    }
                                >
                                    <Nav.Item href={"/js-course-3/lessons"} eventKey="3-1">Уроки</Nav.Item>
                                    <Nav.Item  href={"/js-course-3/homeworks"} eventKey="3-2">Домашки</Nav.Item>

                                </Nav.Menu>
                                <Nav.Menu
                                    eventKey="4"
                                    trigger="hover"
                                    icon={<FontAwesomeIcon  style={{float: "right"}} icon={faReact} />}
                                    placement="rightStart"
                                    title={
                                        <span>
      React Course <span className="menu-pink-mark">10</span>
    </span>
                                    }
                                >
                                    <Nav.Item  href={"/react-course-3/lessons"}eventKey="4-1">Уроки</Nav.Item>
                                    <Nav.Item href={"/react-course-3/homeworks"} eventKey="4-2">Домашки</Nav.Item>
                                </Nav.Menu>

                                <Nav.Item  href={"/tech-articles/"} style={{
                                    borderTop: "1px solid",
                                    borderBottom: "1px solid",
                                    borderColor: "#d4d4d4",
                                    paddingLeft:20}} eventKey="2">
                                    Технические статьи
                                </Nav.Item>
                            </Nav>
                        </Sidenav.Body>
                    </Sidenav>
                    <NavToggle expand={expand} onChange={() => setExpand(!expand)} />
                </Sidebar>




        </div>
    );
};

export default NavigationBar;