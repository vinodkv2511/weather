import './App.css';
import PrimaryInfoCard from './components/PrimaryInfoCard/PrimaryInfoCard';

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
        description={'Cloudy'}
      />
    </div>
  );
}

export default App;
