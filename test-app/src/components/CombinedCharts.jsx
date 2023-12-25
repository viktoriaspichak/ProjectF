import React from 'react';
import DonutChart from "./DonutChart";
import BarChartWithNamesAndAverage from "./BarChartWithNamesAndAverage";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome} from "@fortawesome/free-solid-svg-icons";
import "./combined-charts.css";

const CombinedCharts = () => {
    return (

        <div className="container" >
            <div  className="react-icon-container" >
                <FontAwesomeIcon icon={faHome} className="da-container"></FontAwesomeIcon>
                <h3>Дашборд</h3>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div><DonutChart /></div>
                <div><BarChartWithNamesAndAverage /></div>
            </div>
        </div>
    );
}

export default CombinedCharts;
