import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import TwitterIcon from '@material-ui/icons/Twitter';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import InputAdornment from '@material-ui/core/InputAdornment';
import format from 'date-fns/format';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  DatePicker,
} from '@material-ui/pickers';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/soko-no-otaku/twitter-easy-search">
        soko-no-otaku
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function App() {
  const classes = useStyles();

  const [inputKeyword, setInputKeyword] = React.useState('');
  const handleKeywordChange = (event) => {
    setInputKeyword(event.target.value);
  };

  const [inputUsername, setInputUsername] = React.useState('');
  const handleUsernameChange = (event) => {
    setInputUsername(event.target.value);
  };

  const [selectedSinceDate, setSelectedSinceDate] = React.useState(new Date());
  const handleSinceDateChange = (date) => {
    setSelectedSinceDate(date);
  };

  const [selectedUntilDate, setSelectedUntilDate] = React.useState(new Date());
  const handleUntilDateChange = (date) => {
    setSelectedUntilDate(date);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <TwitterIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Search
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            value={inputKeyword}
            onChange={handleKeywordChange}
            id="keyword"
            label="Keyword"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            value={inputUsername}
            onChange={handleUsernameChange}
            id="username"
            label="Username"
            InputProps={{
              startAdornment: <InputAdornment position="start">@</InputAdornment>,
            }}
          />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              margin="normal"
              fullWidth
              id="since"
              label="Since"
              format="yyyy-MM-dd"
              value={selectedSinceDate}
              onChange={handleSinceDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
            <DatePicker
              margin="normal"
              fullWidth
              id="until"
              label="Until"
              format="yyyy-MM-dd"
              value={selectedUntilDate}
              onChange={handleUntilDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </MuiPickersUtilsProvider>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            value={`${inputKeyword} from:${inputUsername} since:${format(selectedSinceDate, "yyyy-MM-dd")} until:${format(selectedUntilDate, "yyyy-MM-dd")}`}
            id="query"
            label="Query"
            name="q"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Search
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default App;
