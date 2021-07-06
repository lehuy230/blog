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
import { getSignUp } from '../../redux/actions/SignUpAction';
import { CertificateRow } from './CerificateRow';
import * as yup from "yup";
import { Field, Formik } from 'formik';
import {  InputLabel} from '@material-ui/core';

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
  
function index(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [userSignUp,setUserSignUp] = useState({userName:"",password:"",name:""});
    const [formChanged, setFormChanged] = React.useState(false);
    const handleChangeUserLogin =(e)=>{
    var target = e.target;
    var value = target.value;
    var name = target.name;
    setUserSignUp({
      ...userSignUp,
      [name]:value,
    })
  }
  const initialFormValues = {
    userName:"",
    password:"",
    name:"",
    images:""
   }
  const calcFileSize = (base64String) => {
    let stringLength = base64String.length - "data:image/png;base64,".length;
    let sizeInBytes = 4 * Math.ceil(stringLength / 3) * 0.5624896334383812;
    let sizeInKb = sizeInBytes / 1000;
    return sizeInKb;
  };
  // const handleSubmit = (values)=>{
  //   console.log("hekk")
  //   dispatch(getSignUp(values))
  // }
  const handleSubmit = (values) =>{
    dispatch(getSignUp(values))
  }
  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Đăng Ký
        </Typography>
        <Formik
             initialValues={initialFormValues}
             onSubmit={handleSubmit}
          
          >
            {(props)=>(
              <form
                onSubmit={props.handleSubmit}
                onChange={()=> setFormChanged(true)}
              >
              
                  <Grid container spacing={2} style={{marginTop:20}}>
                  <Grid item xs={12}>
                          <Grid container spacing={2}>
                            <Grid item xs={6}>
                            <TextField
                                variant="outlined"
                                id="outlined-multiline-static"
                                label="tên tài khoản"
                                name="userName"
                                value={props.values.userName}
                                onChange={props.handleChange}
                                fullWidth={true}
                                size="small"
                              />
                             
                            </Grid>
                            <Grid item xs={6}>
                           
                              <TextField
                                 variant="outlined"
                                 id="outlined-multiline-static"
                                 label="mật khẩu"
                                 name="password"
                                 value={props.values.password}
                                 onChange={props.handleChange}
                                 fullWidth={true}
                                 size="small"
                              />
                            

                            </Grid>
                        </Grid>
                        </Grid>


                        <Grid item xs={12}>
                          <Grid container spacing={2}>
                            <Grid item xs={6}>
                         
                              <TextField
                                variant="outlined"
                                id="outlined-multiline-static"
                                label="họ tên đầy đủ"
                                name="name"
                                value={props.values.name}
                                onChange={props.handleChange}
                                fullWidth={true}
                                size="small"
                              />

                            </Grid>
                        
                            <Grid item xs={6}>
                         
                              <TextField
                                variant="outlined"
                                id="outlined-multiline-static"
                                label="địa chỉ"
                                name="address"
                                value={props.values.address}
                                onChange={props.handleChange}
                                fullWidth={true}
                                size="small"
                              />

                            </Grid>
                            <Grid item xs={12}></Grid>
                         
                              <TextField
                                id="outlined-multiline-static"
                                label="Giới thiệu"
                                defaultValue="Nhập nội dung"
                                multiline
                                rows={4}
                                variant="outlined"
                                name="introduce"
                                value={props.values.introduce}
                                onChange={props.handleChange}
                                fullWidth={true}
                               
                              />

    
                          </Grid>
                          
                        </Grid>
                        <Grid item xs={12} className={classes.gridItem}>
                        <InputLabel id="" style={{ marginLeft: "10px", marginTop:'30px' }}>
                          Hình của tin tức (giới hạn 1MB)
                        </InputLabel>
                        <Field
                          name="images"
                          validate={(value) => {
                            if (value.length === 0) {
                              return "Chứng chỉ đi kèm phải lớn hơn 1";
                            } else {
                              let totalSize = value.reduce(
                                (acc, i) => (acc += calcFileSize(i)),
                                0
                              );
                              if (totalSize > 1000) {
                                return "Tổng dung lượng phải nhỏ hơn 1MB";
                              }
                            }
                          }}
                          value={props.values.images}
                          component={CertificateRow}
                        />
                      </Grid>

                  </Grid>
                <Button
                 fullWidth
                 variant="contained"
                 color="primary"
                 className={classes.submit}
                 type="submit"
                >
                  đăng ký
                </Button>
                <Grid container>
                <Grid item>
                  <Link href="/" variant="body2">
                    {"Bạn đã có tài khoản? Đăng nhập!"}
                  </Link>
                </Grid>
              </Grid>
              </form>
            )}

          </Formik>
        {/* <form className={classes.form} noValidate onSubmit={(event)=>{
          event.preventDefault();
          dispatch(getSignUp(userSignUp))
        }}>
          
     
                        <InputLabel id="" style={{ marginLeft: "10px", marginTop:'30px' }}>
                          Hình của tin tức (giới hạn 1MB)
                        </InputLabel>
                        <Field
                          name="images"
                          validate={(value) => {
                            if (value.length === 0) {
                              return "Chứng chỉ đi kèm phải lớn hơn 1";
                            } else {
                              let totalSize = value.reduce(
                                (acc, i) => (acc += calcFileSize(i)),
                                0
                              );
                              if (totalSize > 1000) {
                                return "Tổng dung lượng phải nhỏ hơn 1MB";
                              }
                            }
                          }}
                          value={props.values.images}
                          component={CertificateRow}
                        />
                
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Đăng ký
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/" variant="body2">
                {"Bạn đã có tài khoản? Đăng nhập!"}
              </Link>
            </Grid>
          </Grid>
        </form> */}
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default index;