import React, { useState } from "react";
import "./Projects.css";

import p1Logo from "../assets/p11.png";
import flip from "../assets/flip.svg";
import p2Logo from "../assets/p22.png";
import p7Logo from "../assets/p33.png";
import p4Logo from "../assets/p6.png";
import p5Logo from "../assets/p44.png";
import p6Logo from "../assets/ptfl.png";
import p3Logo from "../assets/p3.jpeg";
import arrow from "../assets/arrow.svg";

const Projects = () => {
  const projects = [
    {
      duration: "Apr 2025 - May 2025",
      thumbnail: p1Logo,
      title: "Supply Chain Analysis Using PowerBI",
      description:
        "A hands-on supply-chain analysis that uses Python (pandas, NumPy) for data cleaning and feature engineering, then surfaces key insights in a Power BI dashboard covering sales trends, inventory health, shipping efficiency, defect rates and pricing impacts to help drive smarter decisions for a fashion & beauty startup.",
      techStack:
        "Python · pandas · NumPy · matplotlib · Power BI · Jupyter Notebook",
      link: "https://github.com/sreyas23/supply-chain-analysis_using_powerbi",
    },
    {
      duration: "Mar 2025 - Apr 2025",
      thumbnail: p6Logo,
      title: "Sreya Sirivella Portfolio",
      description:
        "My personal portfolio showcasing my expertise in data analytics, cloud ETL pipelines, and machine learning, built using React and Python to highlight impactful, real-world projects and technical skills.",
      techStack: "HTML · CSS · JavaScript · React.js",
      link: "https://github.com/sreyas23/sreyas23.github.io",
    },
    {
      duration: "Jan 2025 - Mar 2025",
      thumbnail: p2Logo,
      title: "HR Analytics Dashboard Using Tableau",
      description:
        "Built a self-contained, interactive Tableau dashboard to help HR teams monitor workforce metrics including attrition, headcount, job satisfaction, and education trends. Enabled data-driven decisions with dynamic filters, visual KPIs, and actionable insights for proactive retention strategies.",
      techStack:
        "Tableau Public · Microsoft Excel · Data Cleaning · Data Visualization · Statistical Analysis",
      link: "https://github.com/sreyas23/hr-analytics-dashboard_using_Tableau",
    },
    {
      duration: "Sept 2024 - Dec 2024",
      thumbnail: p7Logo,
      title: "Cricket Shot Classification Using OpenCV",
      description:
        "Developed a real-time cricket shot classification system by extracting images from videos using spectrum analysis. Key frames were identified based on shot amplitude, and pose estimation with Detectron2 was used for classification via CNN.",
      techStack:
        "Python · Detectron2 · Numpy · CNN · OpenCV · Spectrum Analysis",
      link: "https://github.com/sreyas23/Cricket-Shot-Classification-Using-OpenCV",
    },
    {
      duration: "Feb 2024 - Apr 2024",
      thumbnail: p5Logo,
      title: "SQL Datawarehouse Project",
      description:
        "Designed a modern data warehouse using SQL Server Express, structured in Bronze, Silver, and Gold layers to ingest, cleanse, model, and analyze sales data. Implemented ETL pipelines, star schema modeling, and sample BI dashboards to deliver business-ready insights.",
      techStack:
        "SQL Server Express · T-SQL · Star Schema · ETL · Python (optional loaders) · Power BI · Tableau · Git · Data Modeling",
      link: "https://github.com/sreyas23/SQL-DataWarehouse-Project",
    },
    {
      duration: "Aug 2024 - Sept 2024",
      thumbnail: p3Logo,
      title: "Spotify End-to-End Data Engineering Project",
      description:
        "Built an end-to-end data pipeline by integrating the Spotify API for automated data extraction, transformation, and storage on AWS S3. Deployed on AWS Lambda and utilized AWS Glue and Athena to create analytic tables, improving data insights and accessibility.",
      techStack: "Python · Amazon Web Services · PySpark · Pandas",
      link: "https://github.com/sreyas23/spotify-data-engineering",
    },
    {
      duration: "Feb 2024 - Apr 2024",
      thumbnail: p4Logo,
      title: "Product Sales Analysis",
      description:
        "Developed an end-to-end Product Sales Analytics solution by cleaning and analyzing raw CSV data using Python (Pandas, NumPy) and visualizing key operational metrics in Power BI. Enabled data-driven decision-making by identifying inefficiencies and optimizing inventory and logistics performance.",
      techStack: "Python, Pandas, NumPy, Power BI, Jupyter Notebook",
      link: "https://github.com/sreyas23/Product-Sales-Analysis",
    },
  ];

  const [isFlipped, setIsFlipped] = useState(
    Array(projects.length).fill(false)
  );

  const handleFlip = (index) => {
    setIsFlipped((prev) =>
      prev.map((flip, idx) => (idx === index ? !flip : flip))
    );
  };

  return (
    <section id="projects">
      <div className="projects-container">
        <h2>Projects</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div
              className={`card ${isFlipped[index] ? "flipped" : ""}`}
              key={index}
            >
              <div className="card-inner">
                {/* Front of the card */}
                <div className="card-front">
                  <div className="front-top">
                    <div>
                      <p className="date">&nbsp;&nbsp;{project.duration}</p>
                    </div>
                    <div
                      className="card-flip-icon"
                      onClick={() => handleFlip(index)}
                    >
                      <img src={flip} alt="Flip Symbol" />
                    </div>
                  </div>
                  <div className="card-img">
                    <img src={project.thumbnail} alt="Project Thumbnail" />
                  </div>
                  <div className="card-info">
                    <h3 className="card-title">{project.title}</h3>
                  </div>
                </div>
                {/* Back of the card */}
                <div className="card-back">
                  <div className="card-back-top">
                    <div
                      className="card-flip-icon"
                      onClick={() => handleFlip(index)}
                    >
                      <img src={flip} alt="Flip Symbol" />
                    </div>
                  </div>
                  <div className="card-content">
                    <h3 className="card-title-b">Description</h3>
                    <p className="card-description">{project.description}</p>
                    <h3 className="card-title-b">Tech Stack</h3>
                    <p className="card-tech">{project.techStack}</p>
                  </div>
                  <div className="card-footer">
                    {project.title === "SreyaSirivella's Portfolio" ? (
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                      >
                        <img src={arrow} alt="Explore More" />
                      </a>
                    ) : (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={arrow} alt="Explore More" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
