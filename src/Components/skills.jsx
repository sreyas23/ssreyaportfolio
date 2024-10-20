import React from 'react';
import './Skills.css';

import htmlLogo from '../assets/html.svg';
import cssLogo from '../assets/css.svg';
import reactLogo from '../assets/react.svg';
import nodeLogo from '../assets/nodejs.svg';
import expressLogo from '../assets/express.png';
import springBootLogo from '../assets/spring.svg';
import figmaLogo from '../assets/figma.svg';
import mysqlLogo from '../assets/mysql.svg';
import mongodbLogo from '../assets/mongodb.svg';
import postgresqlLogo from '../assets/postgresql.svg';
import dockerLogo from '../assets/docker.svg';
import kubernetesLogo from '../assets/kubernetes.svg';
import gitLogo from '../assets/git.svg';
import jenkinsLogo from '../assets/jenkins.svg';
import awsLogo from '../assets/aws.svg';
import hadoopLogo from '../assets/hadoop.svg';

import numpyLogo from '../assets/numpy.svg';
import pandasLogo from '../assets/pandas.svg';
import matplotlibLogo from '../assets/matplotlib.svg';
import tensorflowLogo from '../assets/tensorflow.svg';
import pytorchLogo from '../assets/pytorch.svg';
import scikitLearnLogo from '../assets/scikit.png';
import opencvLogo from '../assets/opencv.svg';
import pysparkLogo from '../assets/pyspark.jpg';

import pythonLogo from '../assets/python.svg';
import javaLogo from '../assets/java.svg';
import javascriptLogo from '../assets/javascript.svg';
import cLogo from '../assets/c.png';

const Skills = () => {
  return (

    <section id="skills">
       <h1 className="skills-header">My Skills</h1>
    <div className = "skills-page">

    <div className='first-half'>

        <div className="development">
        <p className='development-p'>Development</p>
          <div className="row">
            <div className="tech-item">
              <img src={htmlLogo} alt="HTML" className="tech-logo" />
              <p>HTML</p>
            </div>
            <div className="tech-item">
              <img src={cssLogo} alt="CSS" className="tech-logo" />
              <p>CSS</p>
            </div>
            <div className="tech-item">
              <img src={reactLogo} alt="React" className="tech-logo" />
              <p>React</p>
            </div>
            <div className="tech-item">
              <img src={nodeLogo} alt="Node.js" className="tech-logo" />
              <p>Node.js</p>
            </div>
          </div>

          <div className="row">
            <div className="tech-item">
              <img src={expressLogo} alt="Express.js" className="tech-logo" />
              <p>Express.js</p>
            </div>
            <div className="tech-item">
              <img src={springBootLogo} alt="Spring Boot" className="tech-logo" />
              <p>Spring Boot</p>
            </div>
            <div className="tech-item">
              <img src={figmaLogo} alt="Figma" className="tech-logo" />
              <p>Figma</p>
            </div>
            <div className="tech-item">
              <img src={mysqlLogo} alt="MySQL" className="tech-logo" />
              <p>MySQL</p>
            </div>
          </div>

          <div className="row">
            <div className="tech-item">
              <img src={mongodbLogo} alt="MongoDB" className="tech-logo" />
              <p>MongoDB</p>
            </div>
            <div className="tech-item">
              <img src={postgresqlLogo} alt="PostgreSQL" className="tech-logo" />
              <p>PostgreSQL</p>
            </div>
            <div className="tech-item">
              <img src={dockerLogo} alt="Docker" className="tech-logo" />
              <p>Docker</p>
            </div>
            <div className="tech-item">
              <img src={kubernetesLogo} alt="Kubernetes" className="tech-logo" />
              <p>Kubernetes</p>
            </div>
          </div>

          <div className="row">
            <div className="tech-item">
              <img src={gitLogo} alt="Git" className="tech-logo" />
              <p>Git</p>
            </div>
            <div className="tech-item">
              <img src={jenkinsLogo} alt="Jenkins" className="tech-logo" />
              <p>Jenkins</p>
            </div>
          <div className="tech-item">
                  <img src={hadoopLogo} alt="hadoop" className="tech-logo" />
                  <p>Hadoop</p>
                </div>
            <div className="tech-item">
              <img src={awsLogo} alt="Aws" className="tech-logo" />
              <p>AWS</p>
            </div>

          </div>
        </div>

        </div>

        <div className= 'second-half'>
        <div className="machine-learning">
        <p className='development-p'>Machine Learning</p>
              <div className="row">
                <div className="tech-item">
                  <img src={numpyLogo} alt="NumPy" className="tech-logo" />
                  <p>NumPy</p>
                </div>
                <div className="tech-item">
                  <img src={pandasLogo} alt="Pandas" className="tech-logo" />
                  <p>Pandas</p>
                </div>
                <div className="tech-item">
                  <img src={matplotlibLogo} alt="Matplotlib" className="tech-logo" />
                  <p>Matplotlib</p>
                </div>
                <div className="tech-item">
                  <img src={pysparkLogo} alt="PySpark" className="tech-logo" />
                  <p>PySpark</p>
                </div>
              </div>

              <div className="row">
                <div className="tech-item">
                  <img src={opencvLogo} alt="OpenCV" className="tech-logo" />
                  <p>OpenCV</p>
                </div>
                <div className="tech-item">
                  <img src={tensorflowLogo} alt="TensorFlow" className="tech-logo" />
                  <p>TensorFlow</p>
                </div>
                <div className="tech-item">
                  <img src={pytorchLogo} alt="PyTorch" className="tech-logo" />
                  <p>PyTorch</p>
                </div>

                <div className="tech-item">
                  <img src={scikitLearnLogo} alt="Scikit-learn" className="tech-logo" />
                  <p>Scikit-learn</p>
                </div>
              </div>

            </div>

            <div className="languages">
            <p className='development-p'>Programming Languages</p>
            <div className="row">
              <div className="tech-item">
                <img src={pythonLogo} alt="Python" className="tech-logo" />
                <p>Python</p>
              </div>
              <div className="tech-item">
                <img src={javaLogo} alt="Java" className="tech-logo" />
                <p>Java</p>
              </div>
              <div className="tech-item">
                <img src={javascriptLogo} alt="JavaScript" className="tech-logo" />
                <p>JavaScript</p>
              </div>
              <div className="tech-item">
                <img src={cLogo} alt="C" className="tech-logo" />
                <p>C</p>
              </div>
            </div>
            </div>

          </div>

    </div>
    </section>
  );
};

export default Skills;
