import {makeStyles} from '@material-ui/core/styles';
export const useStyles = makeStyles((theme)=>({
    root: {
        width: '100%',
      },
      media: {
        height:350,
      },
      expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      },
      expandOpen: {
        transform: 'rotate(180deg)',
      },
      inforRoot:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      paper: {
        padding: theme.spacing(2),
        // textAlign: "center",
        color: theme.palette.text.secondary,
      },
}))