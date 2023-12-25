import React from 'react';
import { IconButton } from 'rsuite';
import { Table} from 'rsuite';
import { Icon } from '@rsuite/icons';
import { Progress } from 'rsuite';
import {FaJs} from "react-icons/fa";
import './js_course.css';
import 'rsuite/dist/rsuite.min.css';
import ArrowRightLineIcon from '@rsuite/icons/ArrowRightLine';



const NewLessonData = [
    {
        lessonName: "Урок #31 - Promise, async/await, EventLoop",
        date: "3 августа, 2022 20:00",
        difficulty: (
            <Progress.Line
                percent={50}
                status="active"
                showInfo={false}
                strokeWidth={7}
            />
        ),
        link: "https://github.com/junjun-it-courses/react-course-1-lesson-18/blob/master/lesson-text/0.intro_to_react.md",


    },
    {
        lessonName: "Урок 30 - Модули и телефонная книга",
        date: "	31 июля, 2022 18:00",
        difficulty: "Данные не указаны",
        link: "https://rozetka.com.ua/pvh-plitka/c4641184/",

    },
    {
        lessonName: "Урок #29 - Функции конструкторы ДЗ",
        date: "24 июля, 2022 18:00",
        difficulty: "Данные не указаны",
        link: "https://rsuitejs.com/resources/icons/",


    },
    {
        lessonName: "Урок #28 - Опрос",
        date: "17 июля, 2022 18:00",
        difficulty: "Данные не указаны",
        link: "https://github.com/junjun-it-courses/react-course-1-lesson-18/blob/master/lesson-text/0.intro_to_react.md",

    },
    {
        lessonName: "Урок #27 - Классы в JavaScript",
        date: "10 июля, 2022 18:00",
        difficulty: "Данные не указаны",
        link: "https://github.com/junjun-it-courses/react-course-1-lesson-18/blob/master/lesson-text/0.intro_to_react.md",


    },
    {
        lessonName: "Урок #26 - Как работают сети ?",
        date: "6 июля, 2022 20:00",
        difficulty: "Данные не указаны",
        link: "https://github.com/junjun-it-courses/react-course-1-lesson-18/blob/master/lesson-text/0.intro_to_react.md",


    },

    {
        lessonName: "Урок #25 - New, Function.Prototype, Constructor",
        date: "3 июля, 2022 18:00",
        difficulty: "Данные не указаны",
        link: "https://github.com/junjun-it-courses/react-course-1-lesson-18/blob/master/lesson-text/0.intro_to_react.md",


    },


];


const LessonTable = () => {
    return (

        <div className="container" >
            <div  className="react-icon-container" >
                <Icon as={FaJs} size="3em"  className="fa-container"/>
                <h3>Js Course</h3>
            </div>



            <Table
                width={1000}
                height={400}
                data={NewLessonData}
            >

                <Table.Column width={300}>
                    <Table.HeaderCell width={300}>Название</Table.HeaderCell>
                    <Table.Cell dataKey="lessonName" />
                </Table.Column>

                <Table.Column width={300}>
                    <Table.HeaderCell width={300}>Дата</Table.HeaderCell>
                    <Table.Cell dataKey="date" />
                </Table.Column>

                <Table.Column width={300}>
                    <Table.HeaderCell width={300}>Сложность</Table.HeaderCell>
                    <Table.Cell dataKey="difficulty" />
                </Table.Column>

                <Table.Column>
                    <Table.HeaderCell width={300}></Table.HeaderCell>
                    <Table.Cell>
                        {rowData => (
                            <div className="icon-arrow-container">
                                <a href={rowData.link}>
                                    <IconButton
                                        icon={<ArrowRightLineIcon />}
                                        appearance="primary"
                                        style={{ backgroundColor: '#0cc' }}
                                    />
                                </a>
                            </div>
                        )}
                    </Table.Cell>
                </Table.Column>



            </Table>
        </div>

    );
};

export default LessonTable;
