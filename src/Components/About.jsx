import React from "react";
import "./About.css";
import ub from "../assets/ub.svg";
import anna from "../assets/veltech.png";

const About = () => {
  return (
    <section id="about">
      <div className="About-page">
        <div className="about-me">
          <h1 className="about-me-h1">About Me</h1>
        </div>

        <div className="about-grid-layout">
          <div className="left-box slide-in-left">
            <div className="about-me-p">
              <h2 className="hola" style={{ color: "#009dffaa" }}>
                Hola,
              </h2>
              <p>
                I’m a Data Analyst with over three years of experience working
                with SQL, Python, and SAS to clean, model, and analyze
                large-scale datasets. I focus on delivering insights that truly
                support business strategy and decision-making. I’ve built
                dynamic dashboards using Tableau, Power BI, and advanced Excel
                (VBA, Pivot Tables) to help stakeholders track key metrics in
                real-time.
              </p>
              <p>
                I’ve designed HIPAA-compliant ETL pipelines and architected
                scalable data warehouses on cloud platforms like AWS and Azure,
                using tools like Snowflake, Redshift, Glue, and Azure Data
                Factory. I’ve also worked on real-time data ingestion using
                Kafka and Spark Streaming, and manage end-to-end data workflows
                with Apache Airflow.
              </p>
              <p>
                On the machine learning side, I build predictive models with
                scikit-learn, TensorFlow, and XGBoost for use cases like fraud
                detection, churn prediction, and customer segmentation. I’ve
                also explored NLP for tasks like sentiment analysis and
                LLM-based summarization. With a strong foundation in statistics,
                A/B testing, and modern MLOps practices, I enjoy turning raw
                data into meaningful, actionable outcomes.
              </p>
              <p>
                I'm currently looking for a full-time opportunity as a Data
                Analyst or Business Analyst, and I’m excited to bring my skills
                to a team that values insights and innovation.
              </p>
            </div>
          </div>

          <div className="right-box slide-in-right">
            <div className="education-item">
              <div className="education-details">
                <div className="school-title">
                  <img src={ub} alt="University 1 Logo" />
                  <h2>State University of New York at Buffalo</h2>
                </div>
                <p>
                  <strong>Degree: </strong>Master's in Computer Science
                </p>
                <p>
                  <strong>Related Coursework: </strong>Analysis of Algorithms,
                  Data Analytics,Machine Learning, Deep Learning, Big Data,
                  Computer Vision and Image Processing, Operating Systems
                </p>
                <p>
                  <strong>CGPA: </strong>[ 3.5 / 4.0 ]
                </p>
              </div>
            </div>

            <div className="education-item">
              <div className="education-details">
                <div className="school-title">
                  <img src={anna} alt="University 2 Logo" />
                  <h2>VelTech University</h2>
                </div>
                <p>
                  <strong>Degree: </strong>B.Tech. Computer Science &
                  Engineering
                </p>
                <p>
                  <strong>Related Coursework: </strong>Python programming, Cloud
                  computing, Data Structures and Algorithms, Artificial
                  intelligence, Computer architecture.
                </p>
                <p>
                  <strong>CGPA: </strong>[ 9.12 / 10 ]
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="exp">
          <h2>
            <span style={{ color: "#009dffaa" }}>3+</span> Years of Experience
          </h2>
        </div>
      </div>
    </section>
  );
};

export default About;
