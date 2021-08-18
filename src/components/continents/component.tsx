import { Grid } from '@material-ui/core';
import CardDetails from '../card/component';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useStyles } from './styles';

const Continents = ({ continent, setCountry }: any) => {
  const classes = useStyles();

  const displayCountry = (c: any) => {
    setCountry(c);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ padding: '10px' }}>{continent ? continent.continent : ''}</h1>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={3}>
          <CardDetails type="cases" count={continent?.cases} />
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <CardDetails type="deaths" count={continent?.deaths} />{' '}
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <CardDetails type="active" count={continent?.active} />
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <CardDetails type="recovered" count={continent?.recovered} />
        </Grid>
      </Grid>
      <div>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  Countries {continent ? `under ${continent.continent} continent` : ''}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {continent?.countries.map((c: any) => (
                <TableRow key={c}>
                  <TableCell
                    style={{ cursor: 'pointer' }}
                    onClick={() => displayCountry(c)}
                    component="th"
                    scope="row"
                  >
                    {c}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Continents;
