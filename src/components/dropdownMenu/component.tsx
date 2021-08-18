import { useEffect, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      color: '#ffff',
    },
  })
);

const DropdownMenu = ({ region, setRegion, country, setCountry }: any) => {
  const classes = useStyles();

  const [countries, setCountries] = useState([]);
  const [continents, setContinents] = useState([]);

  useEffect(() => {
    let fetchContinents = 'https://corona.lmao.ninja/v2/continents?yesterday&sort';
    let fetchCountries = 'https://corona.lmao.ninja/v2/countries?yesterday&sort';
    fetch(fetchContinents)
      .then((res) => res.json())
      .then((out) => setContinents(out))
      .catch((err) => {
        throw err;
      });
    fetch(fetchCountries)
      .then((res) => res.json())
      .then((out) => setCountries(out))
      .catch((err) => {
        throw err;
      });
  }, []);

  const selectRegion = (country: string, data: any) => {
    if (country) {
      setCountry(null);
    }
    setRegion([data, country]);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-select">Select country</InputLabel>
        <Select defaultValue="" id="grouped-select">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <ListSubheader>Continent</ListSubheader>
          {continents.map((continent: any) => (
            <MenuItem
              key={continent.continent}
              onClick={() => selectRegion('continent', continent)}
            >
              {continent.continent}
            </MenuItem>
          ))}
          <ListSubheader>Country</ListSubheader>
          {countries.map((country: any) => (
            <MenuItem key={country.country} onClick={() => selectRegion('country', country)}>
              {country.country}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
export default DropdownMenu;
