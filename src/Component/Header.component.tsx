import React from 'react';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Baner from '../baner.jpeg'
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    image: {
      width: "100%",
      padding: theme.spacing(0, "auto"),
    },}))

const Header:React.FC=()=>{
  let history = useHistory();
  let rutas=['/','/dolar2','/wallpaper','euros1','euros2','/wallpaper']
  let cont=0
    const classes=useStyles()
    const pushable=()=> {
      history.push(rutas[cont++]);
      cont=cont>5?0:cont
    }
    setInterval(pushable, 5000)
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