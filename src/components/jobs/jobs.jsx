import { Tabs, rem } from '@mantine/core';
import '@mantine/core/styles.css';
import classes from './jobs.css';
import ResumeText from '../resumeText/resumeText';



export default function Jobs() {
  const iconStyle = { width: rem(20), height: rem(20) };

  return (
    <Tabs color="grey" variant="pills" defaultValue="factset" classNames={{list: classes.list}}>
      <Tabs.List justify="center">
      <Tabs.Tab value="factset" leftSection={<img src={`${process.env.PUBLIC_URL}/factset.jpeg`} style={iconStyle} alt="Factset" />}>
          Factset
        </Tabs.Tab>
        <Tabs.Tab value="scorec" leftSection={<img src={`${process.env.PUBLIC_URL}/rpi.png`} style={iconStyle} alt="RPI SCOREC" />}>
          RPI SCOREC
        </Tabs.Tab>
        <Tabs.Tab value="ntop" leftSection={<img src={`${process.env.PUBLIC_URL}/ntop.png`} style={iconStyle} alt="Ntop" />}>
          Ntop
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="factset">
        <div class='jobPanel'>
          <h2>FactSet Research Systems Inc.</h2>
          <h3>Software Engineering Intern</h3>
          <p>
            <ul>
              <li>Development of a scalable and self-healing solution for data conflation, subscription, and updates. Built
              to process all FactSet real-time and delayed-time updates from stock exchanges, using elixir, erlang, and
              AWS.</li>
              <li>Creation of a composable elixir websocket subprotocol, replaced over 150 lines of subprotocol setup in
              every implementation of an elixir websocket (dozens of projects)</li>
              <li>Creation of one page frontend dashboard to view subscription traffic using React</li>
            </ul>
          </p>
            <ResumeText />
        </div>
      </Tabs.Panel>

      <Tabs.Panel value="scorec">
      <div class='jobPanel'>
        <h2>RPI Scientific Computation Research Center</h2>
        <h3>Undergraduate Research Assistant</h3>
        <p>
          <ul>
            <li>Designed 3d Bezier mesh display and simulation. Capable of detecting invalid intersections and allowing the user to fix the geometry.</li>
            <li>Displayed using Qt frontend and custom C++ Libraries for the mesh objects</li>
            <li>Mesh logic and calculations using C++ and Rust</li>
            <li>Experience with Github Actions for publishing and updating deployed version</li>
          </ul>
        </p>
        <ResumeText />
      </div>
      </Tabs.Panel>

      <Tabs.Panel value="ntop">
      <div class='jobPanel'>
        <h2>nTopology Inc.</h2>
        <h3>Software Engineering Intern</h3>
        <p>
          <ul>
            <li>Development of compact autocomplete engine </li>
            <li>Created custom live search feature for visual function blocks with results responding in under 100ms. Capable of sorting and filtering with user input</li>
            <li>Frontend using Qt in C++, logic using C++</li>
            <li>Responded to tickets on Jira to fix bugs in C++ platform codebase</li>
          </ul>
        </p>
        <ResumeText />
      </div>
      </Tabs.Panel>
    </Tabs>
  );
}