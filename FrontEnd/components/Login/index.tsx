import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './style';
import Container from '@material-ui/core/Container';
import { useSelector, useDispatch, } from "react-redux";
import { getUser } from '../../redux/actions/LoginActions';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



export default function SignIn() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [userLogin,setUserLogin] = useState({userName:"",password:""});
  const handleChangeUserLogin =(e)=>{
    var target = e.target;
    var value = target.value;
    var name = target.name;
    setUserLogin({
      ...userLogin,
      [name]:value,
    })
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Đăng nhập
        </Typography>
        <form className={classes.form} noValidate onSubmit={(event)=>{
          event.preventDefault();
          dispatch(getUser(userLogin))
        }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="userName"
            label="Tài khoản"
            name="userName"
            onChange={handleChangeUserLogin}
            autoComplete="userName"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Mật khẩu"
            onChange={handleChangeUserLogin}
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Đăng nhập
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"bạn chưa có tài khoản? đăng ký!"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
