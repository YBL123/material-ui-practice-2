import React, { useState } from 'react';
import './App.css';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';

import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { pink } from '@material-ui/core/colors';

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
  palette: {
    primary: {
      main: pink[300], 
    }
  }
})

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
      <div className="App">
        <header className="App-header">
          <ButtonStyled />
          <TextField
            variant="filled"
            color="secondary"
            type="email"
            label="The Time"
            placeholder="test@test.com"
          />
          <CheckboxExample />
          <ButtonGroup variant="contained" color="primary">
            <Button startIcon={<SaveIcon />}>Save</Button>
            <Button startIcon={<DeleteIcon />}>Discard</Button>
          </ButtonGroup>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;

//NOTES!

{
  /* <Button onClick={()=>alert('hello')} variant="contained" color="secondary"></Button> */
}
{
  /* <Button size="large" style={{fontSize: 30}} variant="contained" color="secondary"></Button> */
}
// display icons at start or end:
// startIcon={<SaveIcon />}
// endIcon={<SaveIcon />}
