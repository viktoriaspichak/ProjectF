import React from 'react';
import { IconButton } from 'rsuite';
import { Table} from 'rsuite';
import { Icon } from '@rsuite/icons';
import { FaReact } from 'react-icons/fa';
import './lessons.css';
import ArrowRightLineIcon from '@rsuite/icons/ArrowRightLine';



const lessonData = [
    {
        lessonName: "Собеседование",
        date: "20 декабря, 2022 19:15",
        difficulty: "Данные не указаны",
        link: "https://github.com/junjun-it-courses/react-course-1-lesson-18/blob/master/lesson-text/0.intro_to_react.md",


    },
    {
        lessonName: "Урок #35 - проект",
        date: "28 октября, 2022 20:00",
        difficulty: "Данные не указаны",
        link: "https://rozetka.com.ua/pvh-plitka/c4641184/",

    },
    {
        lessonName: "Урок #34 - Promices",
        date: "14 октября, 2022 20:00",
        difficulty: "Данные не указаны",
        link: "https://rsuitejs.com/resources/icons/",


    },
    {
        lessonName: "Урок #33 - Interfaces, Generics, Utilities",
        date: "7 октября, 2022 20:00",
        difficulty: "Данные не указаны",
        link: "https://github.com/junjun-it-courses/react-course-1-lesson-18/blob/master/lesson-text/0.intro_to_react.md",

    },
    {
        lessonName: "Урок #32 - Опрос",
        date: "4 октября, 2022 20:00",
        difficulty: "Данные не указаны",
        link: "https://github.com/junjun-it-courses/react-course-1-lesson-18/blob/master/lesson-text/0.intro_to_react.md",


    },
    {
        lessonName: "Урок #31 - Classes, Inheritance",
        date: "20 сентября, 2022 20:00",
        difficulty: "Данные не указаны",
        link: "https://github.com/junjun-it-courses/react-course-1-lesson-18/blob/master/lesson-text/0.intro_to_react.md",


    },

    {
        lessonName: "Урок #30 - Module Testing, Jest",
        date: "13 сентября, 2022 20:00",
        difficulty: "Данные не указаны",
        link: "https://github.com/junjun-it-courses/react-course-1-lesson-18/blob/master/lesson-text/0.intro_to_react.md",


    },

    {
        lessonName: "Урок #29 - Data Types, Enums, Functions",
        date: "6 сентября, 2022 20:00",
        difficulty: "Данные не указаны",
        link: "https://github.com/junjun-it-courses/react-course-1-lesson-18/blob/master/lesson-text/0.intro_to_react.md",


    }

];


const LessonTable = () => {
    return (


        <div className="container" >
            <div  className="react-icon-container" >
                <Icon as={FaReact} size="3em"  className="fa-container"/>
                <h3>React Course</h3>
            </div>



        <Table
            width={1000}
            height={430}
            data={lessonData}

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
                        <div className="icon-container">
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
