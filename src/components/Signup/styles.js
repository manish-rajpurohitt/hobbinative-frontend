import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  paper: {
    background: '#FFFFFF',
    border: 0,
    marginLeft: 140,
    marginTop: 100,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 640,
    width: 450,
    padding: '0 30px',
  },
  title: {
      fontFamily : 'Cinizel-Regular'
  },
  textfield:{
    paddingTop: 60
  }
});

export default useStyles;