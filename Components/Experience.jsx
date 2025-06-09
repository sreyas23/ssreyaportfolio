import React, { useState } from "react";
import "./Experience.css";

import uhc from "../assets/uhcc.png";
import accentureLogo from "../assets/accenture-6.svg";

import javaLogo from "../assets/java.svg";
import springLogo from "../assets/spring.svg";
import reactLogo from "../assets/react.svg";
import awsLogo from "../assets/aws.svg";
import mysqlLogo from "../assets/mysql.svg";
import figmaLogo from "../assets/figma.svg";
import htmlLogo from "../assets/html.svg";
import cssLogo from "../assets/css.svg";
import jenkinsLogo from "../assets/jenkins.svg";
import dockerLogo from "../assets/docker.svg";

const Experience = () => {
  const [isUHCExpanded, setUHCExpanded] = useState(false);
  const [isAccentureExpanded, setAccentureExpanded] = useState(false);

  const [UHCClicked, setUHCClicked] = useState(false);
  const [AccentureClicked, setAccentureClicked] = useState(false);

  return (
    <section id="experience">
      <h1 className="experience-header">Work Experience</h1>
      <div className="experience-container">
        <div className="company-container">
          <div className="company-header">
            <img src={uhc} alt="ub" className="company-logo1" />
            <h4 className="job-title">Data Analyst</h4>
            <p className="dateee">July 2024 - Current</p>
          </div>

          <div className="company-details">
            <div className="points-container">
              <ul className="points">
                <li>
                  Analyzed high-volume claims data with SQL and Python (Pandas,
                  NumPy) to identify payment patterns and detect anomalies for
                  enhanced fraud detection, loading results into Snowflake for
                  consolidated reporting.
                </li>
                <li>
                  Helped develop and validate predictive models with
                  Scikit-learn and TensorFlow; designed A/B tests on
                  adjudication rules, improving risk assessment accuracy by 25%
                  and reducing claim disputes by 15%.
                </li>
                <li>
                  Built Power BI (DAX) dashboards to track denial rates, claim
                  turnaround times, and reimbursement variances configured
                  automated alerts that cut manual reviews by 30% and reduced
                  denials by 20%.
                </li>
                <li>
                  Designed ETL pipelines using Fivetran and SQL Server on AWS,
                  transforming high-volume data into dbt models and ensuring
                  HIPAA-compliant ingestion into Snowflake.
                </li>

                {isUHCExpanded && (
                  <>
                    <li>
                      Collaborated with AI engineers to refine feature
                      engineering documenting datasets in dbt to provide clean,
                      production-ready inputs for models and ad-hoc analyses.
                    </li>
                    <li>
                      Automated Snowflake workflows and optimized data pulls,
                      anticipating stakeholder questions and delivering
                      self-service analytics that accelerated decision-making by
                      35%.
                    </li>
                    <div className="tech-stack">
                      <img src={javaLogo} alt="Java" className="tech-elogo" />
                      <img
                        src={springLogo}
                        alt="Spring Boot"
                        className="tech-elogo"
                      />
                      <img src={reactLogo} alt="React" className="tech-elogo" />
                      <img src={mysqlLogo} alt="MySQL" className="tech-elogo" />
                      <img src={figmaLogo} alt="Figma" className="tech-elogo" />
                      <img src={htmlLogo} alt="HTML" className="tech-elogo" />
                      <img src={cssLogo} alt="CSS" className="tech-elogo" />
                      <img src={awsLogo} alt="AWS" className="tech-elogo" />
                    </div>
                  </>
                )}
              </ul>
            </div>
          </div>

          <div className="view-more-container">
            <button
              className={`view-more-button ${UHCClicked ? "clicked" : ""}`}
              onClick={() => {
                setUHCExpanded(!isUHCExpanded);
                setUHCClicked(!UHCClicked);
              }}
            >
              {isUHCExpanded ? "View Less" : "View More"}
            </button>
          </div>
        </div>

        <div className="company-container">
          <div className="company-header">
            <img src={accentureLogo} alt="TCS" className="company-logo" />
            <h4 className="job-title">Data Analyst</h4>
            <p className="dateee">June 2021 - July 2023</p>
          </div>

          <div className="company-details">
            <div className="points-container">
              <ul className="points">
                <li>
                  Merged and analyzed 5 million+ marketing and sales records
                  with SQL and Python, using dbt transformations to load clean
                  datasets into Snowflake for accurate revenue reconciliation
                  and a 30% boost in lead-to-opportunity conversions.
                </li>
                <li>
                  Assisted in building and validating predictive marketing
                  models with Scikit-learn and TensorFlow; executed A/B tests on
                  email and ad campaigns, reducing cost-per-acquisition by 15%.
                </li>
                <li>
                  Created Power BI (DAX) and Tableau dashboards displaying
                  click-through rates, lead conversions, ROI, and expense
                  forecasts; set up alerts that cut manual reporting time by
                  40%.
                </li>
                <li>
                  Developed ETL workflows using PostgreSQL and Apache Spark on
                  AWS, ensuring scalable, reliable ingestion of high-volume
                  datasets and improving processing speed by 35%.
                </li>
                {isAccentureExpanded && (
                  <>
                    <li>
                      Partnered with data scientists to refine feature
                      engineering maintaining documentation in dbt and Snowflake
                      and provided well-documented data for predictive modeling
                      and advanced analytics.
                    </li>
                    <li>
                      Conducted ad-hoc analyses that translated complex data
                      patterns into actionable insights for marketing and
                      finance teams, improving forecast accuracy by 15%.
                    </li>

                    <div className="tech-stack">
                      <img src={javaLogo} alt="Java" className="tech-elogo" />
                      <img
                        src={springLogo}
                        alt="Spring Boot"
                        className="tech-elogo"
                      />
                      <img src={reactLogo} alt="React" className="tech-elogo" />
                      <img src={awsLogo} alt="AWS" className="tech-elogo" />
                      <img
                        src={jenkinsLogo}
                        alt="Jenkins"
                        className="tech-elogo"
                      />
                      <img
                        src={mysqlLogo}
                        alt="Jenkins"
                        className="tech-elogo"
                      />
                      <img
                        src={dockerLogo}
                        alt="Jenkins"
                        className="tech-elogo"
                      />
                    </div>
                  </>
                )}
              </ul>
            </div>
          </div>

          <div className="view-more-container">
            <button
              className={`view-more-button ${AccentureClicked ? "clicked" : ""}`}
              onClick={() => {
                setAccentureExpanded(!isAccentureExpanded);
                setAccentureClicked(!AccentureClicked);
              }}
            >
              {isAccentureExpanded ? "View Less" : "View More"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
