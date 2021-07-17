import React from "react";
import Navbar from "./Navbar/navbar";
import Profile from "./Profile";

const Home = () => {
  return (
    <>
      <Navbar />
      <h2 id="heading">Welcome to Abhishek's Resume</h2>
      <Profile />
      <div className="body_align">
        <div className="objective">
          <h4>CAREER OBJECTIVE</h4>
          <p>
            To secure a challenging position in a reputable organization to
            expand my learnings, knowledge, and skills.
          </p>
        </div>

        <hr />
        <div className="education">
          <h4>EDUCATIONAL HISTORY</h4>
          <div>
            <h5>JECRC UNIVERSITY, JAIPUR</h5>
            <h6>Bachelors of Technology(CSE)| 2021</h6>
            <ul>
              <li>8.01 CGPA</li>
            </ul>
          </div>
          <div>
            <h5>DAV PUBLIC SCHOOL, BOKARO STEEL CITY</h5>
            <h6>Senior School Certificate Examination| 2017</h6>
            <ul>
              <li>Percentile : 70%</li>
              <li>Board : CBSE</li>
            </ul>
          </div>
          <div>
            <h5>SAINT THOMAS SCHOOL, GODDA</h5>
            <h6>Secondry Education Examination| 2015</h6>
            <ul>
              <li>Percentile : 81%</li>
              <li>Board : ICSE</li>
            </ul>
          </div>
        </div>

        <hr />
        <div className="certification">
          <h4>CERTIFICATIONS</h4>
          <ul>
            <li>
              completed 54 hours of total Web Development BootcampResponsive{" "}
              <br />
              cert url: ude.my/UC-90ec55d5-58e4-4d94-8132-3e959fb261d6
            </li>
            <li>Web Design certificate from freeCodeCamp.org</li>
            <li>
              Web Development 101- Getting Started with JavaScript by freshworks
            </li>
          </ul>
        </div>

        <hr />
        <div className="pf_skills">
          <h4>PROFESSIONAL SKILLS</h4>
          <ul>
            <li>HTML/CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>MongoDB</li>
            <li>Node.js</li>
            <li>PHP</li>
            <li>MYSQL</li>
          </ul>
        </div>

        <hr />
        <div className="pr_skills">
          <h4>PERSONAL SKILLS</h4>
          <ul>
            <li>Awareness</li>
            <li>Patience</li>
            <li>Leadership</li>
            <li>Empathy for Others</li>
          </ul>
        </div>

        <hr />
        <div className="interest">
          <h4>INTERESTS</h4>
          <ul>
            <li>Painting</li>
            <li>Sketching</li>
            <li>Calligraphy</li>
          </ul>
        </div>
        <div>
          <h4>PROJECTS</h4>
          <p>
            --> Please Click on Technology buttons on Navbar to get info about
            projects.
          </p>
        </div>
        <div className="footer_links">
          <h4>PROFILE LINKS</h4>
          <a href="https://github.com/alphaA123" target="blank">
            👉Github
          </a>
          <br />
          <a
            href="https://linkedin.com/in/abhishek-kumar-b38108154"
            target="blank"
          >
            👉Linkdn
          </a>
          <br />
          <a href={"../images/Resume.pdf"} download>
            👉Click Here
          </a>{" "}
          to download Resume in pdf format.
        </div>
      </div>
    </>
  );
};

export default Home;
