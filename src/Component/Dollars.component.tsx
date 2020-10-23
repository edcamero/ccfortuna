import React from "react";
import Ticket from "./Ticket.component";
import { Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import DollarImage from "../billetes/dollar.jpeg";
import Dollar20 from "../billetes/dollar/dollar-20.jpg";
import Dollar50 from "../billetes/dollar/dollar-50.jpg";
import Dollar100 from "../billetes/dollar/dollar-100.jpg";
import Logo from "../logo.jpeg";
import { useHistory } from "react-router-dom";

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

interface IDollar {
  dollar1: number;
  dollar5: number;
  dollar10: number;
  dollar20: number;
  dollar50: number;
  dollar100: number;
}
const dollar: IDollar = {
  dollar1: 0,
  dollar5: 0,
  dollar10: 0,
  dollar20: 0,
  dollar50: 0,
  dollar100: 0,
};

const Dollars: React.FC = () => {
  let history = useHistory();
  const [dollars, setDollars] = React.useState<IDollar>(dollar);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const classes = useStyles({});
  const readData = () => {
    let strDollar = localStorage.getItem("dollars");
    if (strDollar !== undefined && strDollar !== null) {
      setDollars(JSON.parse(strDollar));
    }
  };
  function pushable() {
    history.push("/dolar2");
  }
  React.useEffect(() => {
    if (!isLoading) {
      setIsLoading(true);
      readData();
      setInterval(pushable, 3000)
    }
  }, [isLoading, setIsLoading]);
  return (
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
              Dolar
            </Typography>
          </Grid>
          <Grid item xs={6} className={classes.boder}>
            <Link href="/setup" color="inherit">
              <img
                src={DollarImage}
                alt="imagen del Dolar"
                data-testid="image-ticket"
                className={classes.image}
              />
            </Link>
          </Grid>
        </Grid>        
        <Ticket image={Dollar100} value={dollars.dollar100} deno={100} />
        <Ticket image={Dollar50} value={dollars.dollar50} deno={50} />
        <Ticket image={Dollar20} value={dollars.dollar20} deno={20} />
      </Grid>
    </React.Fragment>
  );
};
export default Dollars;
