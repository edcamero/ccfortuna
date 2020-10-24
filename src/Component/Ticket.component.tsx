import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    image: {
      maxWidth: "100%",
      maxHeight: 200,
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

interface ITicket {
  image: string;
  value: number;
  deno: number;
  divisa: string;
}

const Ticket: React.FC<ITicket> = (props) => {
  const classes = useStyles({});
  return (
    <Grid container item xs={12} direction="row" className={classes.card}>
      <Grid item xs={4} className={classes.boder}>
        <img
          src={props.image}
          alt="imagen de inicio"
          data-testid="image-ticket"
          className={classes.image}
        />
      </Grid>
      <Grid
        item
        xs={2}
        className={classes.boder}
        container
        direction="column"
        justify="space-around"
        alignItems="center"
      >
        <Typography variant="h4" component="h6" className={classes.text}>
          <Hidden mdDown>Denominación: </Hidden> {props.deno}{" "+props.divisa}
        </Typography>
      </Grid>
      <Grid
        item
        xs={3}
        className={classes.boder}
        container
        direction="column"
        justify="space-around"
        alignItems="center"
      >
        <Typography variant="h4" component="h6">
          {
            "x" +
            props.value  }
        </Typography>
      </Grid>
      <Grid
        item
        xs={3}
        className={classes.boder}
        container
        direction="column"
        justify="space-around"
        alignItems="center"
      >
        <Typography variant="h4" component="h6">
          { props.value * props.deno +
            " COP"}
        </Typography>
      </Grid>
    </Grid>
  );
};
export default Ticket;
