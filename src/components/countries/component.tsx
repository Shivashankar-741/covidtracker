import { Avatar, Card, CardMedia, Grid } from '@material-ui/core';
import React from 'react';
import CardDetails from '../card/component';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  media: {
    height: 70,
  },
});
const Countries = ({ country }: any) => {
  const classes = useStyles();

  return (
    <div style={{ padding: '20px' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={2}>
          <Card>
            <CardContent>
              <CardMedia
                className={classes.media}
                image={country?.countryInfo?.flag}
                title="Flag"
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={2}>
          <CardDetails type="cases" count={country?.cases} />
        </Grid>
        <Grid item xs={12} sm={12} md={2}>
          <CardDetails type="deaths" count={country?.deaths} />{' '}
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <CardDetails type="active" count={country?.active} />
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <CardDetails type="recovered" count={country?.recovered} />
        </Grid>
      </Grid>
      <div>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Country</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  {country.country}
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
