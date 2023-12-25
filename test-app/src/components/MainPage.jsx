import React from 'react';
import 'rsuite/dist/rsuite.min.css';
import './main_page.css';
import { Container, Header, Content } from 'rsuite';
import NavigationBar from "./NavigationBar";
import ExitIcon from '@rsuite/icons/Exit';
import { faExpand } from "@fortawesome/free-solid-svg-icons";
import Lessons from "./Lessons";
import JsCourse from "./JsCourse";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SocialBar from "./SocialBar";
import VideoCarousel from "./VideoCarousel";
import CombinedCharts from "./CombinedCharts";

const MainPage = () => {
    return (
        <div>
            <Container>
                <NavigationBar></NavigationBar>
                <Container>
                    <Header style={{ padding: 20, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                        <span style={{ marginRight: "60px" }}>Оксана Тригуб</span>
                        <FontAwesomeIcon style={{ marginRight: "30px" }} icon={faExpand} size="sm" />
                        <ExitIcon />
                    </Header>
                    <Content style={{backgroundColor: "#f2edf3", padding: '30px' }}>
                        <SocialBar></SocialBar>
                        <CombinedCharts></CombinedCharts>
                        <Lessons></Lessons>
                        <JsCourse></JsCourse>
                        <VideoCarousel></VideoCarousel>
                    </Content>
                </Container>
            </Container>
        </div>
    );
};

export default MainPage;
