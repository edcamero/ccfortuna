import  React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
      image:{
          maxWidth:350
      }

  }))

  interface ITicket{
    image:string,
    value:number,
    deno:number
  }

const Ticket:React.FC<ITicket>=(props)=>{
    const classes = useStyles({})
    return(
        <div>
            <img
          src={props.image}
          alt="imagen de inicio"
          data-testid="image-ticket"
          className={classes.image}
        />
        <Typography variant="h6" component="h6">{props.deno+"x"+props.value+" = "+props.value*props.deno+" COP"}</Typography>
        </div>
    )
}
export default Ticket