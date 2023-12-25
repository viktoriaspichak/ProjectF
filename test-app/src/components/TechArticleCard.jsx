
import React from 'react';

const TechArticleCard = ({ title, date, summary, link }) => {
    return (
        <div >
            <div >
                <h5 >{title}</h5>
                <p style={{ color: '#b66dff' }}>{date}</p>
                <p style={{marginBottom:'20px'}} >{summary}</p>
                <a href={link} style={{color:'#b66dff', backgroundColor: "rgba(182, 109, 255, 0.2)", paddingTop:'8px', paddingRight:"13px",paddingBottom:"8px",paddingLeft:"13px", }}
                >
                    Читать
                </a>
            </div>
        </div>
    );
};

export default TechArticleCard;
