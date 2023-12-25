
import React from 'react';
import MainPage from "./components/MainPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import JsCourse from "./pages/JsCourse";
import VideoPage from "./pages/VideoPage";
import HomeWorks from "./pages/HomeWorks";
import TechArticle from "./pages/TechArticle";
import HomeworkDetail from "./pages/HomeworkDetail";


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/homeworkdetail/:id" element={<HomeworkDetail />} />
                <Route path="/js-course-3/lessons" element={<JsCourse type={'js'} />} />
                <Route path="/js-course-3/homeworks" element={<HomeWorks type={'js'} />} />
                <Route path="/react-course-3/homeworks" element={<HomeWorks type={''} />} />
                <Route path="/react-course-3/lessons" element={<JsCourse type={''} />} />
                <Route path="/lessons/:lessonId" element={<VideoPage type="lessons" />} />
                <Route path="/homeworks/:id" element={<VideoPage type="homeworks" />} />
                <Route path="/dashboard" element={<MainPage />} />
                <Route path="/tech-articles" element={<TechArticle />} />

            </Routes>
        </BrowserRouter>
    );
};

export default App;


