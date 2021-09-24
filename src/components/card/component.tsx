import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles';

const CardDetails = ({ type, count }: any) => {
  const classes = useStyles();

  let color;
  switch (type) {
    case 'Total cases':
      color = 'orange';
      break;
    case 'Deaths':
      color = 'red';
      break;
    case 'Active':
      color = 'rgb(165 55 15)';
      break;
    case 'Recovered':
      color = 'green';
      break;
    default:
      break;
  }

  return (
    <Card className={classes.root}>
      <CardContent style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <Typography variant="h4" component="h1">
          {type}
        </Typography>
        <Typography variant="h3" className={classes.pos} style={{ color }}>
          {count}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardDetails;
