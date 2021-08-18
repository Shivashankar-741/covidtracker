import { useEffect, useState } from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles';
import DropdownMenu from './components/dropdownMenu/component';
import Countries from './components/countries/component';
import Continents from './components/continents/component';

function App() {
  const classes = useStyles();
  const [region, setRegion] = useState([]);
  const [country, setCountry] = useState(null);
  const [countryInfo, setCountryInfo] = useState([]);

  useEffect(() => {
    if (country) {
      fetch(`https://corona.lmao.ninja/v2/countries/${country}?yesterday&strict&query`)
        .then((res) => res.json())
        .then((out) => {
          setCountryInfo(out);
        })
        .catch((err) => {
          throw err;
        });
    }
  }, [country]);

  return (
    <div className="app">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Covid Tracker
          </Typography>
          <DropdownMenu setRegion={setRegion} setCountry={setCountry} />
        </Toolbar>
      </AppBar>
      <div>
        {country ? (
          <Countries country={countryInfo} />
        ) : region[1] === 'country' ? (
          <Countries country={region[0]} />
        ) : (
          <Continents continent={region[0]} setCountry={setCountry} />
        )}
      </div>
    </div>
  );
}

export default App;
