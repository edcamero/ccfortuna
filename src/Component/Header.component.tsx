import React from 'react';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Baner from '../baner.jpeg'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    image: {
      width: "100%",
      padding: theme.spacing(0, "auto"),
    },}))

const Header:React.FC=()=>{
    const classes=useStyles()
    return (
        <img
        src={Baner}
        alt="imagen del Dolar"
        data-testid="image-ticket"
        className={classes.image}
      />
    )
}
export default Header;