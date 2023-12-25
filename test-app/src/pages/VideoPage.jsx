import React from 'react';
import { useParams } from 'react-router-dom';
import NavigationBar from "../components/NavigationBar";
import {Container, Content, Header} from "rsuite";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExpand} from "@fortawesome/free-solid-svg-icons";
import ExitIcon from "@rsuite/icons/Exit";

const lessonsInfo = {
    1: {
        title: 'Урок #31 - Promise, Async/Await, EventLoop',
        videoUrl: "https://www.youtube.com/embed/KxVQitQ3a8Y?si=QmOzGDTA1dLzGv-D"

    },

    2: {
        title: 'Урок 30 - Модули и телефонная книга',
        videoUrl: "https://www.youtube.com/embed/PA3W34OLtt4?si=Bq7ysOWb2hkUpYVS"
    },

    3: {
        title: 'Урок #29 - Функции конструкторы ДЗ',
        videoUrl: "https://www.youtube.com/embed/ryDq0St7luw?si=6Soiy0JYisDeZRD5"
    },

    4: {
        title: 'Урок #28 - Опрос',
        videoUrl: "https://www.youtube.com/embed/pvuOm3xE3E4?si=c75LB5Ss8e1HLHE4"
    },
    11: {
        title: 'Собеседование',
        videoUrl: "https://www.youtube.com/embed/6IxxuycmSZw?si=mt0bFm_cDtVgF3ZE"

    },
    12: {
        title: 'Урок #35 - Проект',
        videoUrl: "https://www.youtube.com/embed/4QJlk6JSUwY?si=gB-QszFzfT6iBvPG"


    },
    13: {
        title: 'Урок #34 - Promices',
        videoUrl: "https://www.youtube.com/embed/Yas_BHdmWh8?si=fuGZRoc2Pu-Ztifn"
    },

    14: {
        title: 'Урок #33 - Interfaces, Generics, Utilities',
        videoUrl: "https://www.youtube.com/embed/4Vb9juWZGAE?si=PkKxNN_dyunGFF9W"

    },
};

const VideoPage = () => {
    const { lessonId } = useParams();
    const lessonInfo = lessonsInfo[lessonId];

    return (
        <Container>
            <NavigationBar></NavigationBar>
            <Container>
                <Header style={{ padding: 20, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <span style={{ marginRight: "60px" }}>Оксана Тригуб</span>
                    <FontAwesomeIcon style={{ marginRight: "30px" }} icon={faExpand} size="sm" />
                    <ExitIcon />
                </Header>
                <Content style={{ backgroundColor: "#f2edf3", padding: '30px' }}>
                    <div style={{ display: 'flex', justifyContent: "center", flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
                        {lessonInfo && (
                            <>
                                <h2 style={{ width: '100%', textAlign: 'center' }}>{lessonInfo.title}</h2>
                                <div style={{ width: '100%', maxWidth: '560px' }}>
                                    <iframe
                                        width="100%"
                                        height="315"
                                        src={lessonInfo.videoUrl}
                                        title={`Lesson ${lessonId}`}
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </>
                        )}
                    </div>
                </Content>
            </Container>
        </Container>
    );
};

export default VideoPage;
