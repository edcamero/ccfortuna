import React from 'react';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Logo from '../logo.jpeg'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    image: {
      width: "100%",
      padding: theme.spacing(0, "auto"),
    },}))

const Wallpaper:React.FC=()=>{
    return(
        <img
        src={Logo}/>
    )
}
export default Wallpaper