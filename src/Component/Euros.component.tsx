import React from 'react';
import Ticket from './Ticket.component';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import EuroImage from '../billetes/euro.jpeg'
import Dollar1 from '../billetes/dollar/dollar-1.jpg'
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

  interface IEuro {
    euro5 :number
    euro10 :number
    euro20 :number
    euro50 :number
    euro100 :number
    euro200 :number
    euro500 :number
  }

  const euro:IEuro={
    euro5 :0,
    euro10 :0,
    euro20 :0,
    euro50 :0,
    euro100 :0,
    euro200 :0,
    euro500 :0,
  }
const Dollars:React.FC=()=>{
    const [valorCambio, setValorCambio] = React.useState(3848)
    const [euros, setEuros] = React.useState<IEuro>(euro)
    const classes = useStyles({})
    return(
        <React.Fragment>
            <img
          src={EuroImage}
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
               <Ticket image={Dollar1} value={euros.euro5} deno={5}/>
                <Ticket image={Dollar5} value={euros.euro10} deno={10}/>
                <Ticket image={Dollar10} value={euros.euro20} deno={20}/>
                </ Grid>
                
                <Ticket image={Dollar20} value={euros.euro50} deno={50}/>
                <Ticket image={Dollar50} value={euros.euro100} deno={100}/>
                <Ticket image={Dollar100} value={euros.euro200} deno={200} />
                <Ticket image={Dollar100} value={euros.euro500} deno={500} />
            </Grid>
            
        </React.Fragment>
    )
}
export default Dollars