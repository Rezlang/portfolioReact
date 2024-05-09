import { Tabs, rem } from '@mantine/core';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';
import '@mantine/core/styles.css';
import classes from './jobs.css';
import rpiLogo from '../../assets/images/rpi.png';
import factsetLogo from '../../assets/images/factset.jpeg';
import ntopLogo from '../../assets/images/ntop.png';


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
        <h2>FactSet Research Systems Inc.</h2>
        <p>Software Engineering Intern</p>
      </Tabs.Panel>

      <Tabs.Panel value="scorec">
        <h2>RPI Scientific Computation Research Center</h2>
        <p>Undergraduate Research Assistant</p>
      </Tabs.Panel>

      <Tabs.Panel value="ntop">
        <h2>nTopology Inc.</h2>
        <p>Software Engineering Intern</p>
      </Tabs.Panel>
    </Tabs>
  );
}