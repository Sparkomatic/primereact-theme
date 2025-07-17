import { useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Checkbox } from 'primereact/checkbox';
import { TabView, TabPanel } from 'primereact/tabview';
import { Calendar } from 'primereact/calendar';

export default function App() {
  const [checked, setChecked] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);
  const [date, setDate] = useState<Date | null>(null);
  const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'London', code: 'LDN' },
    { name: 'Paris', code: 'PRS' }
  ];

  return (
    <div style={{ padding: 32 }}>
      <h1>PrimeReact Demo</h1>
      
      <div style={{ margin: '16px 0' }}>
        <h3>Buttons</h3>
        <Button label="Primary Button" style={{ marginRight: 8 }} />
        <Button label="Secondary Button" severity="secondary" style={{ marginRight: 8 }} />
        <Button label="Success Button" severity="success" style={{ marginRight: 8 }} />
        <Button label="Info Button" severity="info" style={{ marginRight: 8 }} />
        <Button label="Warning Button" severity="warning" style={{ marginRight: 8 }} />
        <Button label="Danger Button" severity="danger" />
      </div>

      <div style={{ margin: '16px 0' }}>
        <h3>Form Components</h3>
        <InputText placeholder="Type here..." style={{ marginRight: 8 }} />
        <Calendar 
          value={date} 
          onChange={(e) => setDate(e.value || null)} 
          placeholder="Select Date"
          style={{ marginRight: 8 }}
        />
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

      <div style={{ margin: '16px 0' }}>
        <h3>Tabs</h3>
        <TabView>
          <TabPanel header="Tab 1">Content 1</TabPanel>
          <TabPanel header="Tab 2">Content 2</TabPanel>
        </TabView>
      </div>
    </div>
  );
}
