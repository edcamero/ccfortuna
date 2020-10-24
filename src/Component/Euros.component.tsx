import React from 'react';
import Ticket from "./Ticket.component";
import { Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import EuroImage from '../billetes/euro.jpeg'
import Euro500 from '../billetes/euro/euro-500.jpg'
import Euro200 from '../billetes/euro/euro-200.jpg'
import Euro100 from '../billetes/euro/euro-100.jpg'
import Euro50 from '../billetes/euro/euro-50.jpg'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    image: {
      width: "100%",
      maxHeight: 100,
      padding: theme.spacing(0, "auto"),
    },
    logo: {
      position: "absolute",
      top: "10px",
      left: "16px",
      maxWidth: 200,
      margin: theme.spacing(2, 2),
      padding: theme.spacing(0, 2),
    },
    card: {
      margin: theme.spacing(0, 0),
    },
    boder: {
      border: "solid",
      borderColor: "#ffc400",
    },
    text: {
      padding: theme.spacing("auto", "auto"),
    },
  })
);


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
const Euros:React.FC=()=>{
    const [euros, setEuros] = React.useState<IEuro>(euro)
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const classes = useStyles({});
    const readData = () => {
      let strEuros = localStorage.getItem("euros");
      if (strEuros !== undefined && strEuros!== null) {
        setEuros(JSON.parse(strEuros));
      }
    };

    React.useEffect(() => {
      if (!isLoading) {
        setIsLoading(true);
        readData();
      }
    }, [isLoading, setIsLoading]);
    
    return(
      <React.Fragment>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <Grid container item xs={12} direction="row" className={classes.card}>
          <Grid item xs={6} className={classes.boder}>
            <Typography variant="h2" component="h6" className={classes.text}>
              Euros
            </Typography>
          </Grid>
          <Grid item xs={6} className={classes.boder}>
            <Link href="/setup" color="inherit">
              <img
                src={EuroImage}
                alt="imagen del Dolar"
                data-testid="image-ticket"
                className={classes.image}
              />
            </Link>
          </Grid>
        </Grid>           
          <Ticket image={Euro500} value={euros.euro500} deno={500} divisa='EUR' />
          <Ticket image={Euro200} value={euros.euro200} deno={200} divisa='EUR' />
          <Ticket image={Euro100} value={euros.euro100} deno={100} divisa='EUR' />
          <Ticket image={Euro50} value={euros.euro50} deno={50} divisa='EUR' />
        </Grid>
      </React.Fragment>
    );
  };
export default Euros