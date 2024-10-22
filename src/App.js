import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <section className="Header">
          <h1>Saphaan Swaleh</h1>
          <p>Musician and Mechanical Engineer</p>
          <p>University of British Columbia, Class of 2022</p>
        </section>
        <section className="Bio">
          <h2>About Me</h2>
          <p>
            I am a passionate musician and a dedicated mechanical engineer. Graduated from UBC in 2022,
            I blend creativity with technical expertise to bring innovative solutions to life.
          </p>
        </section>
        <section className="Education">
          <h2>Education</h2>
          <p>University of British Columbia, Vancouver, BC</p>
          <p>Bachelor of Applied Science in Mechanical Engineering, Sept. 2016 - May 2022</p>
          <p>Relevant Coursework: Algorithms, Calculus (I, II, III), Computer Aided Design, Databases, Design of Machine Elements, Dynamics, Engineering Design, Engineering Project Management, Finite Element Analysis, Fluid Mechanics, Kinematics, Linear Algebra</p>
        </section>
        <section className="Experience">
          <h2>Experience</h2>
          <div className="job">
            <h3>Business Intelligence Analyst [Contract], Alberta Blue Cross, Edmonton, AB</h3>
            <p>Aug. 2023 - Jan. 2023</p>
            <ul>
              <li>Conducted ad-hoc SQL queries to various databases, analyzing critical data.</li>
              <li>Created and maintained analytic dashboard in Power BI, focusing on the Wellness index.</li>
              <li>Addressed security standards and data requirements both internally and externally.</li>
            </ul>
          </div>
          <div className="job">
            <h3>Engineering Consultant [Contract], Enbridge, Edmonton, AB</h3>
            <p>Apr. 2023 - Aug. 2023</p>
            <ul>
              <li>Evaluated ARV drawings for pipelines designated as out of service.</li>
              <li>Developed a Pipeline Lifecycle Management (PLM) estimating tool.</li>
              <li>Provided consulting recommendations to third party vendors.</li>
            </ul>
          </div>
          <div className="job">
            <h3>Junior Business Analyst, Brock Canada, Edmonton, AB</h3>
            <p>Jul. 2022 – Apr. 2023</p>
            <ul>
              <li>Designed SQL Server queries and integrated them through automated systems.</li>
              <li>Performed administrative functions including managing contracts and correspondence.</li>
              <li>Managed corporate SharePoint and Microsoft Dynamics sites.</li>
            </ul>
          </div>
          <div className="job">
            <h3>Engineering Intern, Sigma Phi Delta Honor Society, Remote</h3>
            <p>Aug. 2021 – Aug. 2022</p>
            <ul>
              <li>Provided administrative support and managed correspondence.</li>
              <li>Developed and maintained custom tables and charts in Excel and CANVA.</li>
              <li>Collected data on old investments and trials for sanctioning guidelines.</li>
            </ul>
          </div>
        </section>
        <section className="Volunteer">
          <h2>Volunteer Experience</h2>
          <div className="job">
            <h3>Capstone Member, OpenBCI, Vancouver, BC</h3>
            <p>Sep. 2017 - Apr. 2020</p>
            <ul>
              <li>Designed brain computer interface using MATLAB.</li>
            </ul>
          </div>
        </section>
        <section className="Skills">
          <h2>Skills</h2>
          <ul>
            <li>Technical Skills: SolidWorks, AutoCAD, ANSYS, Abaqus, CATIA, OpenFOAM, CNC Machining, Root Cause Analysis</li>
            <li>Programming Languages: C++, C#, Java, JavaScript, MATLAB, Python, SQL, TypeScript, VBA</li>
            <li>General Skills: 3D Printing, Analysis, Arduino, Communication, Git, Microsoft Office (Project, PowerBI, SharePoint, Word, Excel, PowerPoint), Process Modeling, Technical Writing</li>
          </ul>
        </section>
      </main>
      <footer className="App-footer">
        <p>Contact: (780) 676-1480 | saphaan.swaleh@gmail.com | <a href="https://linkedin.com/in/saphaanswaleh">LinkedIn</a></p>
      </footer>
    </div>
  );
}

export default App;
