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
    <div style={{ maxWidth: 400, margin: '2rem auto', fontFamily: 'system-ui' }}>
      <h2>PrimeReact Unstyled Demo scss</h2>
      <section>
        <h3>Button (uses --color-primary)</h3>
        <Button className="my-primary-button" label="My Purple Button" />
      </section>
      <section>
        <h3>InputText (focus border uses --color-primary)</h3>
        <InputText className="my-primary-input" placeholder="Type here..." />
      </section>
      <section>
        <h3>Dropdown (focus border uses --color-primary)</h3>
        <Dropdown className="my-primary-dropdown" value={selectedCity} options={cities} onChange={e => setSelectedCity(e.value)} optionLabel="name" placeholder="Select a City" />
      </section>
      <section>
        <h3>Checkbox (checked uses --color-primary)</h3>
        <Checkbox className="my-primary-checkbox" checked={checked} onChange={e => setChecked(e.checked!)} />
        <span style={{ marginLeft: 8 }}>Check me</span>
      </section>
    </div>
  );
}
