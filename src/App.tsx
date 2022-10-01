import './App.css';
import InfoDisplay from './components/InfoDisplay/InfoDisplay';
import PrimaryInfoCard from './components/PrimaryInfoCard/PrimaryInfoCard';
import SecondaryInfoCard from './components/SecondaryInfoCard/SecondaryInfoCard';

function App() {
  return (
    <div className="App">
      <PrimaryInfoCard 
        location={'Hyderabad'} 
        timestamp={1664639523}
        timezoneOffset={19800}
        temperature={24} 
        feelsLikeTemparature={22} 
        temparatureUnit={'C'} 
        iconCode={'09d'} 
        description={'thunderstorm with heavy drizzle'}
      />

      <SecondaryInfoCard data={[
        {label: 'wind', value: '20', units: 'km/h'},
        {label: 'Humidity', value: '95', units: '%'},
        {label: 'Precipitation', value: '33', units: '%'},
        {label: 'Sunrise', value: '6:30', units: 'AM'},
        {label: 'Sunset', value: '6:00', units: 'PM'},
        {label: 'UV Index', value: '5'},
        {label: 'Atmospheric Pressure', value: '18', units: 'bar'}
      ]} />
    </div>
  );
}

export default App;
