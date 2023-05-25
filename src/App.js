import './App.css';
import Navbar from './components/Navbar';
import countries from './countries.json';
import CountriesList from './components/CountriesList';
import { Route, Routes } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
function App() {
  return (
    <div className="App">
      <Navbar />

      <CountriesList countries={countries} />

      <Routes>
        <Route path="/:alpha3Code" element={<CountryDetails countries={countries} />} />
      </Routes>
    </div>
  );
}

export default App;
