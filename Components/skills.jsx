import React, { useEffect } from "react";
import "./skills.css";

// Data & ML Logos
import pythonLogo from "../assets/python.svg";
import rLogo from "../assets/r.svg";
import sqlServerLogo from "../assets/sqlserver.svg";
import mysqlLogo from "../assets/mysql.svg";
import postgresqlLogo from "../assets/postgresql.svg";
import mongodbLogo from "../assets/mongodb.svg";
import numpyLogo from "../assets/numpy.svg";
import pandasLogo from "../assets/pandas.svg";
import matplotlibLogo from "../assets/matplotlib.svg";
import scipyLogo from "../assets/Scipy-.svg";
import scikitLogo from "../assets/scikit.png";
import tensorflowLogo from "../assets/tensorflow.svg";
import pytorchLogo from "../assets/pytorch.svg";
import opencvLogo from "../assets/opencv.svg";
import pysparkLogo from "../assets/pyspark.jpg";
import hadoopLogo from "../assets/hadoop.svg";
import excelLogo from "../assets/excel.svg";
import gitLogo from "../assets/git.svg";

// Application & BI Logos
import htmlLogo from "../assets/html.svg";
import cssLogo from "../assets/css.svg";
import reactLogo from "../assets/react.svg";
import nodeLogo from "../assets/nodejs.svg";
import figmaLogo from "../assets/figma.svg";
import tableauLogo from "../assets/tableau.svg";
import powerbiLogo from "../assets/powerbi.svg";
import awsLogo from "../assets/aws.svg";
import s3Logo from "../assets/amazons3.svg";
import redshiftLogo from "../assets/redshift.svg";
import glueLogo from "../assets/glue.svg";
import athenaLogo from "../assets/athena.svg";
import dynamodbLogo from "../assets/dynamodb.svg";
import snowflakeLogo from "../assets/snowflake.svg";
import sparkLogo from "../assets/apache_spark.svg";
import ssisLogo from "../assets/ssis.svg";
import informaticaLogo from "../assets/informatica.svg";
import jiraLogo from "../assets/jira.svg";
import servicenowLogo from "../assets/servicenow.svg";
import alteryxLogo from "../assets/alteryx.svg";
import vscodeLogo from "../assets/visual-studio-code.svg";

const appDevelopmentLogos = [
  htmlLogo,
  cssLogo,
  reactLogo,
  nodeLogo,
  figmaLogo,
  tableauLogo,
  powerbiLogo,
  awsLogo,
  s3Logo,
  redshiftLogo,
  glueLogo,
  athenaLogo,
  dynamodbLogo,
  snowflakeLogo,
  sparkLogo,
  ssisLogo,
  informaticaLogo,
  jiraLogo,
  servicenowLogo,
  alteryxLogo,
  vscodeLogo,
  gitLogo,
];

const progMLLogos = [
  pythonLogo,
  rLogo,
  sqlServerLogo,
  mysqlLogo,
  postgresqlLogo,
  mongodbLogo,
  numpyLogo,
  pandasLogo,
  matplotlibLogo,
  scipyLogo,
  scikitLogo,
  tensorflowLogo,
  pytorchLogo,
  opencvLogo,
  pysparkLogo,
  hadoopLogo,
  excelLogo,
];

const InfiniteScroll = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", "true");
        const inner = scroller.querySelector(".scroller__inner");
        Array.from(inner.children).forEach((item) => {
          const clone = item.cloneNode(true);
          clone.setAttribute("aria-hidden", "true");
          inner.appendChild(clone);
        });
      });
    }
  }, []);

  return (
    <section id="skills">
      <h1 className="tech_skills">Technical Skills</h1>

      <div className="scroller" data-speed="slow" data-direction="left">
        <p className="skills-category">Application Development & BI</p>
        <ul className="tag-list scroller__inner">
          {appDevelopmentLogos.map((logo, i) => (
            <li key={i} className="tech-item">
              <img src={logo} alt={`App logo ${i}`} className="tech-logo" />
            </li>
          ))}
        </ul>
      </div>

      <div className="scroller" data-speed="slow" data-direction="left">
        <p className="skills-category">Programming & Machine Learning</p>
        <ul className="tag-list scroller__inner">
          {progMLLogos.map((logo, i) => (
            <li key={i} className="tech-item">
              <img src={logo} alt={`ML logo ${i}`} className="tech-logo" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default InfiniteScroll;
