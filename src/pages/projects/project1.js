import React, { useState } from "react";
import "./projects.css";

function Project1() {
  const [expandedFeature, setExpandedFeature] = useState(null);

  const toggleFeature = (feature) => {
    setExpandedFeature(expandedFeature === feature ? null : feature);
  };

  return (
    <div className="map">
      <h1>panic pal</h1>
      <div className="container-p">
        <div className="column">
          <div className="disc">
            <p>
              Panic Pal is a React Native application with ChatGPT integration.
              The app is designed to assist individuals in managing and coping
              with panic attacks, which are intense episodes of fear and anxiety
              that can lead to symptoms such as shortness of breath,
              palpitations, and a sense of doom or loss of control. These
              episodes can significantly impact social interactions,
              relationships, and overall quality of life.
            </p>
          </div>

          <div className="role">
            <h3>ROLE</h3>
            <p>Front & Backend</p>
          </div>

          <div className="respons">
            <h3>RESPONSIBILITIES</h3>
            <p>
              Developed a journal feature for users to log their experiences and
              track their progress. Created a contact page to facilitate
              communication and support for users. Designed and implemented a
              user-friendly and intuitive login page for a seamless user
              experience.
            </p>
          </div>

          <div className="link">
            <h3>LINK</h3>
            <a href="https://github.com/kaitrice/panic-pal">GitHub repo</a>
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
              "React-Native, ChatGPT API, Expo Go, Firebase: Real-time database, Firebase: Authentication, Azure"
            )}
            {renderFeature(
              "Login",
              "Our app begins with a clean and secure interface that invites users to enter their credentials, with the backend processes powered by Firebase. This choice was made for robust security and efficient data management. Firebase’s authentication system is designed to handle user information securely, providing reliable sign-in and sign-up options using email/password. On the login screen, users with an account can either sign in or recover a forgotten password. For new users, they have the option to create an account."
            )}
            {renderFeature(
              "Chat",
              "Users can quickly access intervention techniques via prompt buttons—these are dynamically retrieved from asynchronous storage, ensuring a personalized and responsive support system. The app also conscientiously records the chat history within the asynchronous storage for user privacy while summarizing session data to Firebase, balancing data security and enhancing the AI model’s learning capabilities for future interactions. Our app stores OpenAI’s API key in Azure storage for security."
            )}
            {renderFeature(
              "Breathing",
              "The central feature is a prominent circle that serves as a visual guide for breathing, with prompts above encouraging engagement. Below the circle are adjustable sliders labeled ‘inhale’ and ‘exhale,’ allowing users to customize the duration of each breath. In case a user would like to come back to their determined breathing exercise, the time information is stored in asynchronous storage for timing, enhancing the personalized experience. "
            )}
            {renderFeature(
              "Phone",
              "The app’s phone feature serves as a resource for users in need of immediate human interaction during distressing situations. The ‘Show Hotlines’ button leads to a list of available emergency numbers or mental health support services. Below, there’s a section labeled ‘Contacts,’ with the user’s permission, the app can access and display user contacts to facilitate quick communication with trusted individuals. The ‘Call’ or ‘Text’ buttons streamline the process of reaching out for help. "
            )}
            {renderFeature(
              "Calendar",
              "This page provides users with a structured and interactive way to track their thoughts and experiences. The top portion displays a weekly calendar view, allowing users to select a day. Below the calendar, there is a ‘Daily Journal’ section with a text input area and a ‘Save Entry’ button, allowing users can record their thoughts or feelings. Any entry on a given day is then listed under ‘Journal Entries’ along with a timestamp, offering a chronological overview of past entries. Users can choose to remove entries if desired. Using the calendar feature located at the top users may view entries from other days or weeks. The app utilizes asynchronous storage to save these entries, ensuring they are stored locally on the user’s device for privacy and quick access."
            )}
            {renderFeature(
              "Settings",
              "The settings page provides a straightforward interface for users to manage their experience. The ‘Interventions’ section lists various coping strategies saved in the asynchronous storage, ensuring that personal settings are securely stored and easily retrievable for each session. The ‘Dark Mode’ toggle is present but disabled as the app currently adheres to the system’s default settings. Additionally, a user may choose to ‘Sign out’ and ‘Delete Account,’ giving users control over their account management within Firebase."
            )}
          </div>

          <div className="demo">
            <div className="video-container">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/Ueqlpl4Sl4U?si=xQjWt_ARl0Z1cjvf"
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
          <h3>Push Notifications</h3>
          <p>
            Implementation of push notifications to provide timely reminders and
            encourage consistent engagement with therapeutic activities.
          </p>
        </div>

        <div className="promt">
          <h3>Prompt Buttons</h3>
          <p>
            Leveraging our use of ChatGPT and chat summaries to provide better
            prompts for users.
          </p>
        </div>

        <div className="interventions">
          <h3>Interventions</h3>
          <p>
            Allowing users to update interventions they find helps the most to
            get fast intervention for a rapidly approaching panic attack.
          </p>
        </div>

        <div className="dark-mode">
          <h3>Dark Mode</h3>
          <p>
            Introducing a switch for Dark Mode, offering users the option to
            manually toggle this feature independent of system settings.
          </p>
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

export default Project1;
