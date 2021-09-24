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
import Typography from '@material-ui/core/Typography';

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
          <CardDetails type="Total cases" count={continent?.cases} />
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <CardDetails type="Deaths" count={continent?.deaths} />{' '}
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <CardDetails type="Active" count={continent?.active} />
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <CardDetails type="Recovered" count={continent?.recovered} />
        </Grid>
      </Grid>
      <div style={{ margin: '25px 0' }}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="h4" component="h1">
                    Countries {continent ? `under ${continent.continent} continent` : ''}
                  </Typography>
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
                    <Typography variant="h5" component="h1">
                      {c}
                    </Typography>
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
