import { useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Checkbox } from 'primereact/checkbox';
import { TabView, TabPanel } from 'primereact/tabview';

export default function App() {
  const [checked, setChecked] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'London', code: 'LDN' },
    { name: 'Paris', code: 'PRS' }
  ];

  return (
    <div style={{ padding: 32 }}>
      <h1>PrimeReact Demo</h1>
      <Button label="Primary Button" />
      <div style={{ margin: '16px 0' }}>
        <InputText placeholder="Type here..." />
      </div>
      <div style={{ margin: '16px 0' }}>
        <Dropdown
          value={selectedCity}
          options={cities}
          onChange={e => setSelectedCity(e.value)}
          optionLabel="name"
          placeholder="Select a City"
        />
      </div>
      <div style={{ margin: '16px 0' }}>
        <Checkbox
          inputId="cb1"
          checked={checked}
          onChange={e => setChecked(!!e.checked)}
        />
        <label htmlFor="cb1" style={{ marginLeft: 8 }}>Check me</label>
      </div>
      <TabView>
        <TabPanel header="Tab 1">Content 1</TabPanel>
        <TabPanel header="Tab 2">Content 2</TabPanel>
      </TabView>
    </div>
  );
}
