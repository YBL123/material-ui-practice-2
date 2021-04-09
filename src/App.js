import React, { useState } from 'react';
import './App.css';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';

import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';
import { pink, yellow } from '@material-ui/core/colors';
import 'fontsource-roboto';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, lightblue, lightpink)',
    border: 0,
    marginBottom: '15px',
    borderRadius: '15px',
    color: 'white',
    padding: '5px 30px',
  },
});

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: '36px',
      marginBotom: '15px',
    },
  },
  palette: {
    primary: {
      main: pink[300],
    },
    secondary: {
      main: yellow[300],
    },
  },
});

const ButtonStyled = () => {
  const classes = useStyles();
  return <Button className={classes.root}>Test style</Button>;
};

const CheckboxExample = () => {
  const [checked, setChecked] = useState(true);
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          icon={<SaveIcon />}
          checkedIcon={<SaveIcon />}
          onChange={(e) => setChecked(e.target.checked)}
          inputProps={{
            'aria-label': 'secondary checkbox',
          }}
        />
      }
      label="Testing Checkbox"
    />
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs">
        <div className="App">
          <header className="App-header">
            <AppBar color="secondary">
              <Toolbar>
                <IconButton>
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6">
                  MUI Themeing
                </Typography>
                <Button>Login</Button>
              </Toolbar>
            </AppBar>
            <Typography variant="h2" component="div">
              Welcome to MUI
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Lean how to use Material UI
            </Typography>
            <ButtonStyled />
            {/* <TextField
              variant="filled"
              color="secondary"
              type="email"
              label="The Time"F
              placeholder="test@test.com"
            /> */}

            <Grid container spacing={2} justify="center">
              <Grid item xs={3} sm={6} lg={12}>
                {/* can also do it automatically with availabe space:
                <Grid item xs={3} sm={6} lg={12}> */}
                <Paper style={{ height: 75, width: '100%' }} />
              </Grid>
              <Grid item xs={3} sm={6} lg={12}>
                <Paper style={{ height: 75, width: '100%' }} />
              </Grid>
              <Grid item xs={3} sm={6} lg={12}>
                <Paper style={{ height: 75, width: '100%' }} />
              </Grid>
            </Grid>

            <CheckboxExample />
            <ButtonGroup variant="contained" color="primary">
              <Button startIcon={<SaveIcon />}>Save</Button>
              <Button startIcon={<DeleteIcon />}>Discard</Button>
            </ButtonGroup>
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;

//NOTES!

// Container -> represents a max-width and some padding on the left and the right

{
  /* <Button onClick={()=>alert('hello')} variant="contained" color="secondary"></Button> */
}
{
  /* <Button size="large" style={{fontSize: 30}} variant="contained" color="secondary"></Button> */
}
// display icons at start or end:
// startIcon={<SaveIcon />}
// endIcon={<SaveIcon />}

// <Grid item xs={12} sm={6}> ----> RESPONSIVE DESIGN
