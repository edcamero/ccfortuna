import React from "react";
import Ticket from "./Ticket.component";
import { Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import DollarImage from "../billetes/dollar.jpeg";
import Dollar1 from "../billetes/dollar/dollar-1.jpg";
import Dollar5 from "../billetes/dollar/dollar-5.jpg";
import Dollar10 from "../billetes/dollar/dollar-10.jpg";
import Dollar20 from "../billetes/dollar/dollar-20.jpg";
import Dollar50 from "../billetes/dollar/dollar-50.jpg";
import Dollar100 from "../billetes/dollar/dollar-100.jpg";
import Logo from "../logo.jpeg";

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

const Dollars2: React.FC = () => {
  const [dollars, setDollars] = React.useState<IDollar>(dollar);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const classes = useStyles({});
  const readData = () => {
    let strDollar = localStorage.getItem("dollars");
    if (strDollar !== undefined && strDollar !== null) {
      setDollars(JSON.parse(strDollar));
    }
  };
  React.useEffect(() => {
    if (!isLoading) {
      setIsLoading(true);
      readData();
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
        <Ticket image={Dollar10} value={dollars.dollar10} deno={10} />
        <Ticket image={Dollar5} value={dollars.dollar5} deno={5} />
        <Ticket image={Dollar1} value={dollars.dollar1} deno={1} />
      </Grid>
    </React.Fragment>
  );
};
export default Dollars2;
