import React from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import FormGroup from '@material-ui/core/FormGroup'
import Button from '@material-ui/core/Button';
import DollarImage from '../billetes/dollar.jpeg'
import EuroImage from '../billetes/euro.jpeg'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      background:'#fff',
      margin:theme.spacing(2),
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: '#000',
    },
    image:{
        maxHeight:200,
        padding: theme.spacing(2, 0),
        background:'#2E2E2E'
    },
    money:{
      margin:theme.spacing(0),
    }
  }),
);
interface IDollar {
  dollar1:number
  dollar5:number
  dollar10:number
  dollar20:number
  dollar50:number
  dollar100:number
  }
  interface IEuro {
    euro5 :number
    euro10 :number
    euro20 :number
    euro50 :number
    euro100 :number
    euro200 :number
    euro500 :number
  }

  const dollar: IDollar = {
    dollar1:0,
    dollar5:0,
    dollar10:0,
    dollar20:0,
    dollar50:0,
    dollar100:0
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
  
const Change:React.FC=()=>{
    const classes = useStyles();
    const [dollars, setDollars] = React.useState<IDollar>(dollar)
    const [euros, setEuros] = React.useState<IEuro>(euro)
    const [isLoading, setIsLoading] = React.useState<boolean>(false)
    function saveDollars(){
      localStorage.setItem('dollars',JSON.stringify(dollars))
      /*localStorage.setItem('dollar1',dollars.dollar1)
      localStorage.setItem('dollar2',dollars.dollar2)
      localStorage.setItem('dollar5',dollars.dollar5)
      localStorage.setItem('dollar10',dollars.dollar10)
      localStorage.setItem('dollar20',dollars.dollar20)
      localStorage.setItem('dollar100',dollars.dollar100)*/
    }
    function saveEuros(){
      localStorage.setItem('euros',JSON.stringify(euros))
    }
    const readData = ()=> {
      let strDollar=localStorage.getItem('dollars')
      
      if(strDollar!== undefined && strDollar!== null)
        {setDollars(JSON.parse(strDollar))}
    let strEuro=localStorage.getItem('euros')
     if(strEuro!== undefined && strEuro!== null)
        {setEuros(JSON.parse(strEuro))}
    }

    React.useEffect(() => {
      if (!isLoading) {
        setIsLoading(true)
        readData()
      }
    }, [isLoading, setIsLoading])
    return(
        <Grid
        item
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
          <form className={classes.root} noValidate autoComplete="off" >
        
          <FormGroup  className={classes.money}>
          <img
          src={DollarImage}
          alt="imagen del Dolar"
          data-testid="image-ticket"
          className={classes.image}
        />
            <TextField id="dollar1" label="dollar-1" variant="filled" value={dollars.dollar1} onChange={(e) => setDollars({ ...dollars, dollar1: +e.target.value})}/>
            <TextField id="dollar-5" label="dollar-5" variant="filled" value={dollars.dollar5} onChange={(e) => setDollars({ ...dollars, dollar5: +e.target.value})}/>
            <TextField id="dollar-10" label="dollar-10" variant="filled" value={dollars.dollar10} onChange={(e) => setDollars({ ...dollars, dollar10: +e.target.value})}/>
            <TextField id="dollar-20" label="dollar-20" variant="filled" value={dollars.dollar20} onChange={(e) => setDollars({ ...dollars, dollar20: +e.target.value})}/>
            <TextField id="dollar-50" label="dollar-50" variant="filled" value={dollars.dollar50} onChange={(e) => setDollars({ ...dollars, dollar50: +e.target.value})}/>
            <TextField id="dollar-100" label="dollar-100" variant="filled" value={dollars.dollar100} onChange={(e) => setDollars({ ...dollars, dollar100: +e.target.value})}/>
            <Button variant="contained" color="primary" onClick={saveDollars}>
              Actualizar Datos
            </Button>
          </FormGroup>
          
         
      
    </form>

    <form className={classes.root} noValidate autoComplete="off" >
        
          <FormGroup  className={classes.money}>
          <img
          src={EuroImage}
          alt="imagen del Dolar"
          data-testid="image-ticket"
          className={classes.image}
        />
            <TextField id="euro-5" label="euro-5" variant="filled" value={euros.euro5} onChange={(e) => setEuros({ ...euros, euro5: +e.target.value})}/>
            <TextField id="euro-10" label="euro-10" variant="filled" value={euros.euro10} onChange={(e) => setEuros({ ...euros, euro10: +e.target.value})}/>
            <TextField id="euro-20" label="euro-20" variant="filled" value={euros.euro20} onChange={(e) => setEuros({ ...euros, euro20: +e.target.value})}/>
            <TextField id="euro-50" label="euro-50"  variant="filled" value={euros.euro50} onChange={(e) => setEuros({ ...euros, euro50: +e.target.value})}/>
            <TextField id="euro-100" label="euro-100" variant="filled" value={euros.euro100} onChange={(e) => setEuros({ ...euros, euro100: +e.target.value})}/>
            <TextField id="euro-200" label="euro-200" variant="filled" value={euros.euro200} onChange={(e) => setEuros({ ...euros, euro200: +e.target.value})}/>
            <TextField id="euro-500" label="euro-500" variant="filled" value={euros.euro500} onChange={(e) => setEuros({ ...euros, euro500: +e.target.value})}/>
            <Button variant="contained" color="primary" onClick={saveEuros}>
              Actualizar Datos
            </Button>
          </FormGroup>
          
         
      
    </form>

      </Grid>
    )
}
export default Change