import { Tabs, rem } from '@mantine/core';
import '@mantine/core/styles.css';
import classes from './jobs.css';
import ResumeText from '../resumeText/resumeText';



export default function Jobs() {
  const iconStyle = { width: rem(20), height: rem(20) };

  return (
    <Tabs color="grey" variant="pills" defaultValue="kpmg" classNames={{list: classes.list}}>
      <Tabs.List justify="center">
        <Tabs.Tab value="kpmg" leftSection={<img src={`${process.env.PUBLIC_URL}/kpmg.png`} style={iconStyle} alt="KPMG" />}>
          KPMG
        </Tabs.Tab>
        <Tabs.Tab value="factset" leftSection={<img src={`${process.env.PUBLIC_URL}/factset.jpeg`} style={iconStyle} alt="Factset" />}>
          Factset
        </Tabs.Tab>
        <Tabs.Tab value="craft">
          CRAFT
        </Tabs.Tab>
        <Tabs.Tab value="scorec" leftSection={<img src={`${process.env.PUBLIC_URL}/rpi.png`} style={iconStyle} alt="RPI SCOREC" />}>
          RPI SCOREC
        </Tabs.Tab>
        <Tabs.Tab value="ntop" leftSection={<img src={`${process.env.PUBLIC_URL}/ntop.png`} style={iconStyle} alt="Ntop" />}>
          Ntop
        </Tabs.Tab>
        
      </Tabs.List>

      <Tabs.Panel value="kpmg">
        <div class='jobPanel'>
          <h2>KPMG</h2>
          <h3>AI Developer</h3>
          <p>
            <ul>
              <li>Built distributed, stateless service backends for AI agents with explicit orchestration, fault isolation, and retry semantics.</li>
              <li>Designed modular MCP tools with structured parameter validation, elicitation, and low-token structured data response.</li>
              <li>Spearheaded model governance initiatives, focusing on compliance and prompt injection risk management.</li>
              <li>Implemented fullstack C#/Angular based AI features</li>
            </ul>
          </p>
          <ResumeText />
        </div>
      </Tabs.Panel>

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
              every implementation of an elixir websocket (dozens of projects).</li>
              <li>Creation of one page frontend dashboard to view subscription traffic using React.</li>
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
            <li>Displayed using Qt frontend and custom C++ Libraries for the mesh object.</li>
            <li>Mesh logic and calculations using C++ and Rust.</li>
            <li>Experience with Github Actions for publishing and updating deployed version.</li>
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
      <Tabs.Panel value="craft">
      <div class='jobPanel'>
        <h2>Center for Research Toward Advancing Financial Technology</h2>
        <h3>Blockchain Researcher</h3>
        <p>
          <ul>
            <li>Implemented a Solidity-EVM ISDA master contract for automated derivative settlement.</li>
            <li>Partnered with Bank of America to engineer LLM pipelines to convert over-the-counter derivative contracts into Solidity smart contracts.</li>
            <li>Deployed a Chainlink oracle to transmit real-world SEC filing and other offchain triggers on-chain.</li>
          </ul>
        </p>
        <ResumeText />
      </div>
      </Tabs.Panel>
    </Tabs>
  );
}