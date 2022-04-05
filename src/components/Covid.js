import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Covid.css";

const Covid = () => {

  const [data,setData] = useState([])

  const getCovidData = async () => {
    try {
      const { data } = await axios.get(
        `https://data.covid19india.org/data.json`
      );
      setData(data.statewise[0])
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
      getCovidData();
  }, []);

  return (
    <>
      <div className="container">
        <div className="title">
          <h1 className="live">LIVE</h1>
          <h2 className="sub-title">COVID-19 CORONAVIRUS TRACKER</h2>
        </div>
        <div className="row">
          <div className="card col blue">
            <div className="card-body">
              <h5 className="card-title"><span> OUR </span>COUNTRY </h5>
              <p className="card-text">INDIA</p>
            </div>
          </div>
          <div className="card col green">
            <div className="card-body">
              <h5 className="card-title"><span> TOTAL </span>RECOVERED </h5>
              <p className="card-text">{data.recovered}</p>
            </div>
          </div>
          <div className="card col yellow ">
            <div className="card-body">
              <h5 className="card-title"><span> TOTAL </span>CONFIRMED </h5>
              <p className="card-text">{data.confirmed}</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="card col orange">
            <div className="card-body">
              <h5 className="card-title"><span> TOTAL </span>DEATH </h5>
              <p className="card-text">{data.deaths}</p>
            </div>
          </div>
          <div className="card col blue">
            <div className="card-body">
              <h5 className="card-title"><span> TOTAL </span>ACTIVE </h5>
              <p className="card-text">{data.active}</p>
            </div>
          </div>
          <div className="card col light">
            <div className="card-body">
              <h5 className="card-title"><span> LAST </span>UPDATED </h5>
              <p className="card-text">{data.lastupdatedtime}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Covid;
