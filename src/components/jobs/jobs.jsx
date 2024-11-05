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
        <Tabs.Tab value="CRAFT" leftSection={<img src={`${process.env.PUBLIC_URL}/craft.png`} style={iconStyle} alt="CRAFT" />}>
          CRAFT
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
              <li>Development of a scalable and stable-bandwidth solution for real-time data conflation, subscription, and
updates. Built to process all FactSet real-time and delayed updates from stock exchanges, using Elixir,
Erlang, and AWS.</li>
              <li>Created a composable Elixir WebSocket subprotocol, consolidating setup into a reusable component for
current and future WebSocket implementations.</li>
              <li>Developed a single-page frontend dashboard to view subscription traffic using React.</li>
            </ul>
          </p>
            <ResumeText />
        </div>
      </Tabs.Panel>

      <Tabs.Panel value="CRAFT">
        <div class='jobPanel'>
          <h2>Center for Research toward Advancing Financial Technologies</h2>
          <h3>Research Assistant</h3>
          <p>
            <ul>
              <li>Developed an LLM to automatically convert over-the-counter derivative contracts into Solidity smart
contracts.</li>
              <li>Created a smart contract representation of ISDA master agreement for OTC derivatives.</li>
              <li>Developed a Solidity-based oracle for real-time SEC filing data on the Ethereum blockchain.</li>
            </ul>
          </p>
            <ResumeText />
        </div>
      </Tabs.Panel>

      <Tabs.Panel value="scorec">
      <div class='jobPanel'>
        <h2>RPI Scientific Computation Research Center</h2>
        <h3>Research Assistant</h3>
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
            <li>Developed a C++ autocomplete oracle, matching on arbitrary or ranked fields.</li>
            <li>Created custom search, sort, and filter feature for visual function blocks.</li>
            <li>Used technologies including modern C++, Qt, CMake, Jenkins, and Jira.</li>
          </ul>
        </p>
        <ResumeText />
      </div>
      </Tabs.Panel>
    </Tabs>
  );
}