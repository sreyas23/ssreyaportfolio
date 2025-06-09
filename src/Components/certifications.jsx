import React from "react";
import "./certifications.css";
import certificate from "../assets/lll.png";

const CertificationCard = ({ issuer, link, title, date }) => (
  <div className="certification-card-wrapper">
    <div className="certification-card">
      <div className="card-header">
        <span className="issuer">{issuer}</span>
      </div>

      <div className="icon-wrapper">
        <a href={link} target="_blank">
          <img src={certificate}></img>
        </a>
      </div>

      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <div className="issue-date">
          <span>Issued on: </span>
          <span className="date">{date}</span>
        </div>
      </div>
    </div>
  </div>
);

const CertificationsGrid = () => {
  const certifications = [
    {
      issuer: "Forage",
      title: "Deloitte Australia - Data Analyst",
      date: "May, 2025",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_Nfn5tHjkZHfAaTuPa_1746424617101_completion_certificate.pdf",
    },
    {
      issuer: "Alteryx",
      title: "Alteryx Designer Core",
      date: "Apr, 2025",
      link: "https://www.credly.com/badges/077f5da9-898c-4ada-a3d9-7093660c5548/public_url",
    },
    {
      issuer: "DataCamp",
      title: "Associate Data Analyst",
      date: "Mar, 2025",
      link: "https://www.datacamp.com/certificate/DAA0016032983541",
    },
    {
      issuer: "Linkedin",
      title: "Generative AI: Working with LLM's",
      date: "Jan, 2025",
      link: "https://www.linkedin.com/learning/certificates/63e409c48f8aea7d489b07a90fbdc325f84fb11e3529bededb29166e0ed61682",
    },
    {
      issuer: "DataCamp",
      title: "Professional Data Analyst",
      date: "Mar, 2025",
      link: "https://www.datacamp.com/certificate/DA0022377187527",
    },
    {
      issuer: "Microsoft",
      title: "Microsoft PowerBI Data Analyst",
      date: "Mar, 2025",
      link: "https://learn.microsoft.com/api/achievements/share/en-us/sreyasirivella-1387/FMPBHE2X?sharingId=376BC82D22F2AE76",
    },
    {
      issuer: "Cisco",
      title: "CCNA",
      date: "Nov, 2022",
      link: "https://www.credly.com/badges/cc3cdddd-9607-4d43-82a0-17b783595815/public_url",
    },
  ];

  return (
    <section id="certifications">
      <div className="certifications-container">
        <h1 className="c">Certifications</h1>
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <CertificationCard
              key={index}
              issuer={cert.issuer}
              link={cert.link}
              title={cert.title}
              date={cert.date}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsGrid;
