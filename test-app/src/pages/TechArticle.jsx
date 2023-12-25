import React from "react";
import { Container, Content, Header } from "rsuite";
import NavigationBar from "../components/NavigationBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand } from "@fortawesome/free-solid-svg-icons";
import ExitIcon from "@rsuite/icons/Exit";
import TechArticleCard from "../components/TechArticleCard";
import {Icon} from "@rsuite/icons";
import {FaBookOpen} from "react-icons/fa";

const TechArticle = () => {
    const articles = [
        {
            id: 1,
            title: 'Temporal Dead Zone',
            date: '11.01.2022',
            summary: 'Временная мертвая зона JS (TDZ) Временная мертвая зона (Temporal Dead Zone), сокращенно TDZ.',
            link: ''
        },
        {
            id: 2,
            title: 'Оптимизация Верстки',
            date: '23.07.2023',
            summary: 'Что необходимо сделать c Картинками: Данные действия проводятся над всем типами изображений кроме svg',
            link: ''
        },
        {
            id: 3,
            title: 'Совершенный Код: Библиотека Или Своё Решение',
            date: '25.05.2022',
            summary: 'Стоит или не стоит ставить библиотеки ради нескольких простых функций? Не проще ли их написать самим?',
            link: ''
        },
        {
            id: 4,
            title: 'JavaScript — Оператор Typeof',
            date: '17.02.2022',
            summary: 'Оператор typeof возвращает строку, указывающую тип операнда. const num = 10; const bigNum = 10n; const str = \'string\'; const undef = undefined;',
            link: ''
        },
        {
            id: 5,
            title: 'JavaScript — Тип Данных Object',
            date: '17.02.2022',
            summary: 'object - ссылочный тип данных, является то самостоятельной единицей, имеющей свойства и определённый тип.',
            link: ''
        },
        {
            id: 6,
            title: 'JavaScript — Тип Данных Symbol',
            date: '17.02.2022',
            summary: 'symbol — это уникальный и неизменяемый тип данных, который может быть использован как идентификатор для свойст...',
            link: ''
        }

    ];

    return (
        <div>
            <Container>
                <NavigationBar />
                <Container>
                    <Header style={{ padding: 20, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                        <span style={{ marginRight: "60px" }}>Оксана Тригуб</span>
                        <FontAwesomeIcon style={{ marginRight: "30px" }} icon={faExpand} size="sm" />
                        <ExitIcon />
                    </Header>
                    <Content style={{ backgroundColor: "#f2edf3", padding: '30px' }}>
                        <div style={{ marginBottom: '20px', display:'flex' }}>
                            <Icon as={FaBookOpen} size="3em"  className="fa-container"/>
                            <h3 style={{ marginBottom: '10px' }}>Технические статьи</h3>
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                            {articles.map((article) => (
                                <div style={{ width: 'calc(50% - 10px)' }} key={article.id}>
                                    <div style={{ backgroundColor: 'white', padding: '20px' }}>
                                        <TechArticleCard
                                            title={article.title}
                                            date={article.date}
                                            summary={article.summary}
                                            link={article.link}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Content>
                </Container>
            </Container>
        </div>
    );
};

export default TechArticle;
