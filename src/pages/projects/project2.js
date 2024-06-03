import React, { useState } from "react";
import "./projects.css";

function Project2() {
  const [expandedFeature, setExpandedFeature] = useState(null);

  const toggleFeature = (feature) => {
    setExpandedFeature(expandedFeature === feature ? null : feature);
  };

  return (
    <div className="map">
      <h1>SHELF LIFE</h1>
      <div className="container-p">
        <div className="column">
          <div className="disc">
            <p>
              ShelfLife is a game review website built with gamers in mind. With
              so many games and so many platforms, getting fast, relevant
              information, and curated reviews by trusted fellow gamers is
              important in influencing future purchases. Users are able to see
              up to date information on their favorite games, and find new ones
              that may interest them. They will also get relevant reviews for
              each game, published by other users of the application to help
              influence their purchasing decisions. Once a user creates an
              account, they will be able to post their own reviews for games,
              making their voice heard by the growing community on ShelfLife!
            </p>
          </div>

          <div className="role">
            <h3> ROLE </h3>
            <p> Design & Frontend </p>
          </div>

          <div className="respons">
            <h3> RESPONSIBILITIES </h3>
            <p>
              Designed and Developed various pages and components. Designed the
              individual game page, games page, user profile, multiple versions
              of the review component, and the initial game card in Figma.
              Developed the individual game page, review component, popup button
              functionality, and the average reviews histogram.
            </p>
          </div>

          <div className="link">
            <h3> LINK </h3>
            <a
              href="https://github.com/MarvNC/CSCI342-Group-2"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <p> GitHub repo </p>{" "}
            </a>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#f9f9f9",
          height: "auto",
          paddingBottom: "30px",
        }}
      >
        <h2
          style={{
            color: "#000",
            textAlign: "center",
            padding: "30px",
            fontSize: "40px",
            textTransform: "uppercase",
          }}
        >
          demo
        </h2>
        <div className="content">
          <div className="features">
            {renderFeature(
              "Technologies Used",
              "JavaScript, MongoDB, Express JS, React, NodeJS, Vite, Tailwind CSS, Figma, Notion, Discord, GitHub."
            )}
            {renderFeature(
              "Games Page",
              "Displays dynamically generated lists of games based on categories (trending, top all time, recent). Each game card links to the corresponding game page."
            )}
            {renderFeature(
              "Game Page",
              " Dynamically generated pages showcasing different game stats and user reviews, with a modal for creating a review."
            )}
            {renderFeature(
              "Login/Registration Pages",
              "Uses Zod for schema validation and store user information in MongoDB."
            )}
            {renderFeature(
              "User Page",
              "Shows a list of favorites, recently played games, and user-submitted reviews."
            )}
            {renderFeature(
              "Database Hosting",
              "Can be hosted locally or online with MongoDB Atlas."
            )}
          </div>

          <div className="demo">
            <div className="video-container">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/nTF0QLlImP0?si=EbYRW7dQEgSiTLvG"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <h2
        style={{
          textAlign: "center",
          fontSize: "40px",
          textTransform: "uppercase",
        }}
      >
        Future
      </h2>
      <div className="Futures">
        <div className="notifs">
          <h3>User Game Lists</h3>
          <p>
            Allow users to store and persist lists of games they are playing.
          </p>
        </div>

        <div className="promt">
          <h3>Likes and Comments</h3>
          <p>Enable adding likes and comments to reviews.</p>
        </div>

        <div className="interventions">
          <h3>Certified Reviewers</h3>
          <p>Create a section for certified reviewers.</p>
        </div>

        <div className="dark-mode">
          <h3>Follow Reviewers</h3>
          <p>Give users the ability to follow other reviewers.</p>
        </div>
      </div>
    </div>
  );

  function renderFeature(title, content) {
    return (
      <div className={`feature ${title.toLowerCase()}`}>
        <h3 onClick={() => toggleFeature(title)}>
          {title} {expandedFeature === title ? "▲" : "▼"}
        </h3>
        {expandedFeature === title && <p>{content}</p>}
      </div>
    );
  }
}

export default Project2;
