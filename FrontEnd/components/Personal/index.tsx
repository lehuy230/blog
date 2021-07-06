import React,{useState,useEffect} from 'react';
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {useStyles} from './style';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import { Field, Formik } from 'formik';
import { CertificateRow } from './CerificateRow';
import TextField from '@material-ui/core/TextField';
import {  InputLabel, Paper} from '@material-ui/core';
import { getnewPost, newPost } from '../../redux/actions/NewPost';
import {  useDispatch, } from "react-redux";

function index(props) {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [formChanged, setFormChanged] = React.useState(false);
    const state_user = useSelector(
        (state: any) => state.getUserReducers.user
      );
      const [expanded, setExpanded] = React.useState(false);

      const handleExpandClick = () => {
        setExpanded(!expanded);
      };
      const calcFileSize = (base64String) => {
        let stringLength = base64String.length - "data:image/png;base64,".length;
        let sizeInBytes = 4 * Math.ceil(stringLength / 3) * 0.5624896334383812;
        let sizeInKb = sizeInBytes / 1000;
        return sizeInKb;
      };
      const initialFormValues = {
        user_id:state_user?state_user[0].id:"",
        description:"",
        imagesPost:""
       }
       const handleSubmit = (values) =>{
        dispatch(newPost(values))
      }
      const user_id = state_user?state_user[0].id:"";
      useEffect(() => {
        dispatch(getnewPost(user_id));
      }, [dispatch]);
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} >
            <div className={classes.inforRoot}>
            {state_user &&(
                <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image={state_user[0].images[0]}
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h2" component="h4" style={{textAlign:'center'}}>
                        {state_user[0].name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    địa chỉ: {state_user[0].address}
                    </Typography>
                    
                    </CardContent>
                    <CardActions disableSpacing>
                    <Button size="small" color="primary" onClick={handleExpandClick}>
                       xem giới thiệu
                    </Button>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {state_user[0].introduce}
                        </Typography>
                        </CardContent>
                    </Collapse>
                </CardActionArea>
            </Card>
            )}
            </div>
            </Grid>
             <Grid item xs={12}>
             <Paper className={classes.paper}>
                <Formik
                initialValues={initialFormValues}
                onSubmit={handleSubmit}
                
                >
                {(formikProps)=>(
                    <form  
                        onSubmit={formikProps.handleSubmit}
                        onChange={()=> setFormChanged(true)}
                    >
                            
                        <Grid container spacing={3}>
                    {/* --------------------------------------------Tiêu đề------------------------------------------ */}
                        <Grid item xs={8}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={12} lg={12} >
                            <TextField
                                    id="outlined-multiline-static"
                                    label="Nội dung bài viết"
                                    defaultValue="Nhập nội dung"
                                    multiline
                                    rows={4}
                                    name="description"
                                    value={formikProps.values.description}
                                    onChange={formikProps.handleChange}
                                    fullWidth={true}
                                    size="small"
                            />
                            </Grid>
                        </Grid>
                        </Grid>
                        <Grid item xs={12} md={12} lg={12} >
                            <InputLabel id="" style={{ marginLeft: "10px" }}>
                            ảnh của tin tức 
                            </InputLabel>
                            <Field
                            name="imagesPost"
                            validate={(value) => {
                                if (value.length === 0) {
                                return "ảnh của tin tức chưa được thêm vào";
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
                            value={formikProps.values.imagesPost}
                            component={CertificateRow}
                            />
                        </Grid>

                        {/*------------------------------------------------Nội dung------------------------------------------ */}
                        <Grid item xs={12} md={12} lg={12}>                    
                        </Grid>
                        <Grid item xs={3}>
                            <Button variant="contained" color="primary" type="submit" >
                                Đăng
                            </Button>
                        </Grid>

                        </Grid>
                    
                    </form>
                )}
                </Formik>
                </Paper>
            </Grid>
        </Grid>

    );
}

export default index;