import React from "react";
import { Link } from "react-router-dom";
import "./about.css";

function About() {
  return (
    <div className="container-a">
      <ul className="map">
        <li>
          <div>
            <h3 className="page">
              {" "}
              <span className="star">G</span> EDUCATION
            </h3>
          </div>
          <ul>
            <li className="page line">
              <ul>
                <li className="page">
                  <div>
                    <p className="page">09.2020 - 06.2025</p>
                    <p className="page">
                      Western Washington University | Bellingham, WA
                    </p>
                    <p className="caption">
                      {" "}
                      Bachelor of Science in Computer Science | 3.9 GPA{" "}
                    </p>
                  </div>
                </li>
              </ul>
            </li>
          </ul>

          <div>
            <h3 className="page">
              {" "}
              <span className="star">G</span> EXPERIENCE
            </h3>
          </div>
          <ul>
            <li className="page line">
              <ul>
                <li className="page">
                  <div>
                    <p className="page">06.2024 - Present</p>
                    <p className="page">
                      GitHub | Bellevue, WA | Software Engineer Intern{" "}
                    </p>
                    <p className="caption">
                      Scheduled to begin a role focused on developing and
                      optimizing software solutions for GitHub's platform,
                      working with cross-functional teams to implement new
                      features and resolve issues.{" "}
                    </p>
                  </div>
                </li>
              </ul>
              <ul>
                <li className="page">
                  <div>
                    <p className="page">01.2022 - 06.2024</p>
                    <p className="page">
                      Western Washington University | Bellingham, WA | Computer
                      Science Teaching Assightance
                    </p>
                    <p className="caption">
                      Assisted in teaching computer science courses, provided
                      support to students in lab sessions, and graded
                      assignments and exams.{" "}
                    </p>
                  </div>
                </li>
              </ul>
            </li>
          </ul>

          <div>
            <h3 className="page">
              {" "}
              <span className="star">G</span> Projects
            </h3>
          </div>
          <ul>
            <li className="page line">
              <ul>
                <li className="page">
                  <div>
                    <p className="page">01.2024 - 03.2024</p>
                    <Link to="/projects/1">
                      <p className="page"> shelf life </p>
                    </Link>
                    <p className="caption">
                      Developed a game review website allowing users to see
                      up-to-date game information, read reviews, and contribute
                      their own reviews, enhancing the gaming community's
                      experience.{" "}
                    </p>
                  </div>
                </li>
              </ul>
              <ul>
                <li className="page">
                  <div>
                    <p className="page">09.2023 - 12.2023</p>
                    <Link to="/projects/0">
                      <p className="page"> panic pal </p>
                    </Link>
                    <p className="caption">
                      Created a mental health application aimed at providing
                      users with tools and resources to manage panic attacks and
                      anxiety, including a real-time chat feature for support.{" "}
                    </p>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
          <div>
            <h3 className="page">
              {" "}
              <span className="star">G</span> technical skills
            </h3>
          </div>
          <ul>
            <li className="page line">
              <ul>
                <li className="page">
                  <div>
                    <p className="page">Coding Languages</p>
                    <p className="caption">Python, C/C++, Java, Bash, R </p>
                  </div>
                </li>
              </ul>

              <ul>
                <li className="page">
                  <div>
                    <p className="page">Web Development</p>
                    <p className="caption">
                      HTML/CSS, JavaScript/TypeScript, React-Native, MERN Stack
                      (MongoDB, Express.js, React.js, Node.js), Vite, p5.js,
                      Angular, Tailwind CSS, SASS, Bootstrap, jQuery{" "}
                    </p>
                  </div>
                </li>
              </ul>
              <ul>
                <li className="page">
                  <div>
                    <p className="page">Databases & Tools</p>
                    <p className="caption">
                      SQL, Firebase, Azure, PostgreSQL, MongoDB, MySQL, GitHub,
                      Unix Terminal, Vim, Visual Studio, Figma{" "}
                    </p>
                  </div>
                </li>
              </ul>
              <ul>
                <li className="page">
                  <div>
                    <p className="page">Language</p>
                    <p className="caption">English and Spanish </p>
                  </div>
                </li>
              </ul>
              <ul>
                <li className="page">
                  <div>
                    <p className="page">Miscellaneous</p>
                    <p className="caption">
                      LATEX, RESTful APIs, Unit Testing, Git{" "}
                    </p>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
          <div>
            <h3 className="page">
              {" "}
              <span className="star">G</span> contact
            </h3>
          </div>
          <ul>
            <li className="page line">
              <ul>
                <li className="page">
                  <div>
                    <p className="page"><a href="mailto:preciaf@wwu.edu" target="_blank" rel="noreferrer"> Email </a></p>
                    <p className="caption"> 
                     </p>
                  </div>
                </li>
              </ul>
              <ul>
                <li className="page">
                  <div>
                    <p className="page"><a href="https://github.com/fatima-preciado" target="_blank" rel="noreferrer">GitHub </a> </p>
                    <p className="caption"> </p>
                  </div>
                </li>
              </ul>
              <ul>
                <li className="page">
                  <div>
                    <p className="page"><a href="https://www.linkedin.com/in/fatima-preciado/" target="_blank" rel="noreferrer">LinkedIn </a> </p>
                    <p className="caption"> </p>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default About;
