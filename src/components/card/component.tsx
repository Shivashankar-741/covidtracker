import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { useStyles } from './styles';

const CardDetails = ({ type, count }: any) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {type}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {count}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardDetails;
