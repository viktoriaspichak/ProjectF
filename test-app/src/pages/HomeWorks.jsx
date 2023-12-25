import NavigationBar from "../components/NavigationBar";
import React from "react";
import {Container, Content, Header} from "rsuite";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExpand} from "@fortawesome/free-solid-svg-icons";
import ExitIcon from "@rsuite/icons/Exit";
import Lesson from "../components/Lesson";
import {Icon} from "@rsuite/icons";
import {FaJs, FaReact} from "react-icons/fa";

const reactCourseHomeworks = [{
    id:111,
    title:'Проект LMS',
    data: '20 декабря 2022',
    description: 'Описание:',
    option: 'Вам необходимо создать проект аналогичный нашей LMS системе. Не нужно повторять стили LMS важна только структура',

},{ id: 112,
    title:'Реализовать Функцию Flat',
    data: '10 сентября 2022',
    description: 'Описание:',
    option: 'Ваша функция должна повторять базовый функционал метода flat, но с некоторыми доработками. Функция принимает',
},{
    id: 113,
    title:'MarkdownEditor.Jsx',
    data: '10 июля 2022 ',
    description: 'Описание:',
    option: 'Реализуйте компонент <MarkdownEditor />, который является React оберткой плагина @toast-ui/editor. Этот плагин позволяет',
},

    {   id: 114,
        title:'PostCatalog.Jsx',
        data: '28 июня, 2022',
        description: 'Описание:',
        option: 'Реализуйте компонент <PostCatalog />, который представляет собой вывод статей полученных из внешнего сервера',
    },
]
const jsCourseHomeworks = [{
    id:115,
    title: 'Телефонная книга',
    data: '13 августа, 2022 ',
    description: 'Описание:',
    option: 'Ваша задача реализовать функционал телефонной книги. Дизайн на ваше усмотрение.'
},{
    id:116,
    title: 'New, Function.Protot',
    data:'12 июля 2022',
    description: 'Описание:',
    option: 'Эта задача может показаться сложной но по факту среднячковая 🙂 Если что не понятно, пересматривайте урок. '
},{
    id:117,
    title: 'DeepFreeze',
    data: '7 июля, 2022 ',
    description: 'Описание:',
    option: 'Вам нужно написать функцию DeepFreeze, которая принимает объект и замораживает его и все вложенные в него объекты.'
},
    {
        id:118,
        title: 'Кеширование',
        data: '14 июля, 2022 ',
        description: 'Описание:',
        option: 'Вам нужно написать функцию, которая в качестве параметра принимает функцию и добавляет ей возможность кешировать выводы'
    },

]




const HomeWorks = ({type}) => {

    let lessons = type === 'js' ? jsCourseHomeworks : reactCourseHomeworks;

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
                            <h3 style={{ marginBottom: '10px' }}>JS Course/Домашки</h3>
                        </div>)}
                    {type !== 'js' && (
                        <div style={{marginBottom: '20px', display:'flex' }}>
                            <Icon as={FaReact} size="3em"  className="fa-container"/>
                            <h3 style={{ marginBottom: '10px' }}>React Course/Домашки</h3>
                        </div>
                    )}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                        {lessons.map(lesson => (
                            <div key={lesson.id} style={{ width: 'calc(50% - 10px)' }}>
                                <div style={{ backgroundColor: 'white', padding: '20px' }}>
                                    <Lesson lesson={lesson} contentType="homeworks" />
                                </div>
                            </div>
                        ))}

                    </div>
                </Content>
            </Container>
        </Container>

    </div>)}

export default HomeWorks;