import { useEffect, useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useStyles } from './styles';

const DropdownMenu = ({ setRegion, setCountry }: any) => {
  const classes = useStyles();

  const [countries, setCountries] = useState([]);
  const [continents, setContinents] = useState([]);

  useEffect(() => {
    const fetchRegions = async (region: string) => {
      let baseUrl = `https://corona.lmao.ninja/v2/${region}?yesterday&sort`;
      try {
        const res = await fetch(baseUrl);
        const data = await res.json();
        if (region === 'continents') {
          setContinents(data);
        } else {
          setCountries(data);
        }
      } catch (err) {
        console.log(err, 'Error');
      }
    };
    fetchRegions('continents');
    fetchRegions('countries');
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
