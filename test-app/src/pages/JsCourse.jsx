import NavigationBar from "../components/NavigationBar";
import React from "react";
import {Container, Content, Header} from "rsuite";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExpand} from "@fortawesome/free-solid-svg-icons";
import ExitIcon from "@rsuite/icons/Exit";
import Lesson from "../components/Lesson";
import {FaJs, FaReact} from "react-icons/fa";
import {Icon} from "@rsuite/icons";

const reactCourseLessons = [{
    id:11,
    title:'Собеседование',
    data: '20 декабря, 19:15',
    description: 'Описание:',
    option:'.....'

},{ id: 12,
    title:'Урок #35 - Проект',
    data: '28 октября, 19:15',
    description: 'Описание:',
    option:'.....'
},{
    id: 13,
    title:'Урок #34 - Promices',
    data: '14 октября, 19:15',
    description: 'Описание:',
    option:'.....'
},

    {   id: 14,
        title:'Урок #33 - Interfaces, Generics, Utilities',
        data: '7 октября, 19:15',
        description: 'Описание:',
        option:'.....'
    },
]
const jsCourseLessons = [{
    id:1,
    title: 'Урок #31 - Promise, Async/Await, EventLoop',
    data: '3 августа, 2022 20:00',
    description: 'Описание:',
    option:'.....'
},{
    id:2,
    title: 'Урок #30 - Модули И Телефонная Книга',
    data: '31 июля, 2022 20:00',
    description: 'Описание:',
    option:'.....'
},{
    id:3,
    title: 'Урок #29 - Функции Конструкторы ДЗ',
    data: '24 июля, 2022 20:00',
    description: 'Описание:',
    option:'.....'
},
    {
        id:4,
        title: 'Урок #28 - Опрос',
        data: '17 июля, 2022 20:00',
        description: 'Описание:',
        option:'.....'
    },

]




const jsCourse = ({type}) => {

    let lessons = type === 'js' ? jsCourseLessons : reactCourseLessons;

    return ( <div>
        <Container>
            <NavigationBar></NavigationBar>
            <Container>
                <Header style={{ padding: 20, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <span style={{ marginRight: "60px" }}>Оксана Тригуб</span>
                    <FontAwesomeIcon style={{ marginRight: "30px" }} icon={faExpand} size="sm" />
                    <ExitIcon />
                </Header>
                <Content style={{ backgroundColor: "#f2edf3", padding: '30px' }}>
                    {type === 'js' && (
                        <div style={{ marginBottom: '20px', display:'flex' }}>
                            <Icon as={FaJs} size="3em"  className="fa-container"/>
                            <h3 style={{ marginBottom: '10px' }}>JS Course/Уроки</h3>
                        </div>)}
                    {type !== 'js' && (
                        <div style={{marginBottom: '20px', display:'flex' }}>
                            <Icon as={FaReact} size="3em"  className="fa-container"/>
                        <h3 style={{ marginBottom: '10px' }}>React Course/Уроки</h3>
                        </div>
                        )}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                        {lessons.map(lesson => (
                            <div style={{ width: 'calc(50% - 10px)' }}>
                                <div style={{ backgroundColor: 'white', padding: '20px' }}>
                                    <Lesson lesson={lesson} contentType="lessons" />
                                </div>
                            </div>
                        ))}
                    </div>
                </Content>
            </Container>
        </Container>

    </div>)}

export default jsCourse;