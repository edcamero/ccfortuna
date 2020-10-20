import React from 'react';
import Ticket from './Ticket.component';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import DollarImage from '../billetes/dollar.jpeg'
import Dollar5 from '../billetes/dollar/dollar-5.jpg'
import Dollar10 from '../billetes/dollar/dollar-10.jpg'
import Dollar20 from '../billetes/dollar/dollar-20.jpg'
import Dollar50 from '../billetes/dollar/dollar-50.jpg'
import Dollar100 from '../billetes/dollar/dollar-100.jpg'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
      image:{
          maxWidth:300,
          margin: theme.spacing(2, 2),
          padding: theme.spacing(0, 2),
      }

  }))

const Dollars:React.FC=()=>{
    const [valorCambio, setValorCambio] = React.useState(3848)
    const classes = useStyles({})
    return(
        <React.Fragment>
            <img
          src={DollarImage}
          alt="imagen del Dolar"
          data-testid="image-ticket"
          className={classes.image}
        />
            <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
            >
               < Grid
            container
            item xs={10} 
            direction="row"
            justify="space-around"
            alignItems="center"
            >
                <Ticket image={Dollar5} value={5*valorCambio} />
                <Ticket image={Dollar10} value={10*valorCambio} />
                </ Grid>
                
                <Ticket image={Dollar20} value={20*valorCambio} />
                <Ticket image={Dollar50} value={50*valorCambio} />
                <Ticket image={Dollar100} value={100*valorCambio} />
            </Grid>
        </React.Fragment>
    )
}
export default Dollars