import React from "react";
import { Link } from 'react-router-dom';

const Lesson = ({ lesson, contentType }) => {
    const isHomework = contentType === 'homeworks';
    const linkText = isHomework ? 'К домашке' : 'К уроку';
    const linkPath = isHomework ? `/homeworkdetail/${lesson.id}` : `/lessons/${lesson.id}`;

    return (
        <div >
            <h5 style={{marginBottom:'15px'}}>{lesson.title}</h5>
            <p style={{marginBottom:'10px'}}> {lesson.data}</p>
            <h6  style={{marginBottom:'10px'}}>{lesson.description}</h6>
            <p style={{marginBottom:'30px'}}>{lesson.option}</p>
            <Link to={linkPath} style={{ textDecoration: 'none', color: 'white', paddingTop: '10px', paddingLeft: '30px', paddingBottom: '10px', paddingRight: '30px', backgroundColor: '#9a55ff' }}>
                {linkText}
            </Link>
        </div>
    );
};

export default Lesson;
