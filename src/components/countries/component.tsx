import { Card, CardMedia, Grid } from '@material-ui/core';
import React from 'react';
import CardDetails from '../card/component';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import CardContent from '@material-ui/core/CardContent';
import { useStyles } from './styles';

const Countries = ({ country }: any) => {
  const classes = useStyles();

  return (
    <div style={{ padding: '20px' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={2}>
          {/* <Card>
            <CardContent>
              <CardMedia
                className={classes.media}
                image={country?.countryInfo?.flag}
                title="Flag"
              />
            </CardContent>
          </Card> */}
          <div>
            <img src={country?.countryInfo?.flag} alt="Flag" width="100%" height="100%" />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={2}>
          <CardDetails type="Total cases" count={country?.cases} />
        </Grid>
        <Grid item xs={12} sm={12} md={2}>
          <CardDetails type="Deaths" count={country?.deaths} />{' '}
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <CardDetails type="Active" count={country?.active} />
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <CardDetails type="Recovered" count={country?.recovered} />
        </Grid>
      </Grid>
      <div style={{ margin: '15px 0' }}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="h4" component="h1">
                    Country{' '}
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  <Typography variant="h5" component="h1">
                    {country.country}
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Countries;
