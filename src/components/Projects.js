import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    // const spotlightProjects = {
    //   "No Man's Land": {
    //     title: "no man's land",
    //     desc:
    //       "",
    //     link: "",
    //     open: "",
    //     image: ""
    //   },
    //   Portfolio: {
    //     title: "portfolio.js",
    //     desc:
    //       "A small JS",
    //     techStack: "NODE.JS (EXPRESS.JS)",
    //     link: "",
    //     open: "",
    //     image: ""
    //   }
    // };
    const projects = {
      "News app": {
        desc:
          "A News app that user can view, discuss, rate articles.",
        techStack: "React, React Router, Axios, CSS",
        link: "https://github.com/jeeannyy/News-app",
        open: "https://jeeannyy.github.io/News-app"
      },
      "Coin Tracker": {
        desc:
          "A coin tracker application for top-ranking cryptos. You can find the real-time ranking, price chart, and history.",
        techStack: "React, TypeScript, Styled-components",
        link: "https://github.com/jeeannyy/Paint-app",
        open: "https://painting-jeeann.netlify.app"
      },
      "Trello": {
        desc:
          "Cloned basic features of Trello application. You can add and delete boards and tasks",
        techStack: "React, TypeScript, Styled-components",
        link: "https://github.com/jeeannyy/Paint-app",
        open: "https://painting-jeeann.netlify.app"
      },
      "Paint app": {
        desc:
          "A paint app for all age of people.",
        techStack: "JavaScript, HTML5 / CSS",
        link: "https://github.com/jeeannyy/Paint-app",
        open: "https://painting-jeeann.netlify.app"
      },
      "Real Time Chat": {
        desc:
          "A simple chat app that multiple people can join and chat in real time.",
        techStack: "socket.io, Javascript",
        link: "https://github.com/jeeannyy/Real-Time-Chat",
        open: ""
      }
      ,
      "Kokoatalk": {
        desc:
          "Cloned Korean messanger app 'Kakaotalk' 2021 version.",
        techStack: "HTML5, CSS",
        link: "https://github.com/jeeannyy/Kokoatalk",
        open: "https://kokoatalk-jeeann.netlify.app/"
      },
      "Drum Kit": {
        desc:
          "Drum app that everyone can play it.",
        techStack: "JavaScript, HTML5, CSS",
        link: "https://drumkit-jeeann.netlify.app",
        open: "https://github.com/jeeannyy/Drum-Kit"
      },
      "Todo Todo": {
        desc:
          "To do list app.",
        techStack: "React, CSS",
        link: "https://github.com/jeeannyy/TodoTodo",
        open: "https://jeeannyy.github.io/TodoTodo/"
      },
      "London": {
        desc:
          "A poster for practicing CSS grid and flex.",
        techStack: "HTML5, CSS",
        link: "https://github.com/jeeannyy/London",
        open: ""
      },
      "Bad Religion": {
        desc:
          "A poster for practicing CSS grid and flex.",
        techStack: "HTML5, CSS",
        link: "https://github.com/jeeannyy/Bad-Religion",
        open: ""
      },
      "Dice game": {
        desc:
          "A dice game made with Vanilla JS.",
        techStack: "JavaScript, HTML5, CSS",
        link: "https://github.com/jeeannyy/Dice-Game",
        open: "https://dicegame-jeeann.netlify.app"
      },

    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ software-creations</span>
        </div>
        {/* <Carousel>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
              />
              <div className="caption-bg">
                <Carousel.Caption>
                  <h3>{spotlightProjects[key]["title"]}</h3>
                  <p>
                    {spotlightProjects[key]["desc"]}
                    <p className="techStack">
                      {spotlightProjects[key]["techStack"]}
                    </p>
                  </p>
                  <ExternalLinks
                    githubLink={spotlightProjects[key]["link"]}
                    openLink={spotlightProjects[key]["open"]}
                  ></ExternalLinks>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel> */}
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
