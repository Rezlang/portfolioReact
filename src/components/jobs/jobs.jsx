import { Tabs, rem } from '@mantine/core';
import '@mantine/core/styles.css';
import classes from './jobs.css';
import rpiLogo from '../../assets/images/rpi.png';
import factsetLogo from '../../assets/images/factset.jpeg';
import ntopLogo from '../../assets/images/ntop.png';
import ResumeText from '../resumeText/resumeText';


export default function Jobs() {
  const iconStyle = { width: rem(20), height: rem(20) };

  return (
    <Tabs color="grey" variant="pills" defaultValue="factset" classNames={{list: classes.list}}>
      <Tabs.List>
      <Tabs.Tab value="factset" leftSection={<img src={factsetLogo} style={iconStyle} alt="Factset" />}>
          Factset
        </Tabs.Tab>
        <Tabs.Tab value="scorec" leftSection={<img src={rpiLogo} style={iconStyle} alt="RPI SCOREC" />}>
          RPI SCOREC
        </Tabs.Tab>
        <Tabs.Tab value="ntop" leftSection={<img src={ntopLogo} style={iconStyle} alt="Ntop" />}>
          Ntop
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="factset">
        <div class='jobPanel'>
          <h2>FactSet Research Systems Inc.</h2>
          <h3>Software Engineering Intern</h3>
          <p>
            <ul>
              <li>Internship from May 28th to August 16th, 2024</li>
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
            <li>Designed 3d Bezier mesh display and simulation</li>
            <li>Displayed using Qt and custom Libraries</li>
            <li>Mesh logic and calculations using C++ and Rust</li>
            <li>Experience with Github Actions</li>
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
            <li>Development of autocomplete engine</li>
            <li>Created custom search/sort/filter feature for visual function blocks</li>
            <li>Frontend using Qt</li>
            <li>High speed modern C++ codebase</li>
          </ul>
        </p>
        <ResumeText />
      </div>
      </Tabs.Panel>
    </Tabs>
  );
}