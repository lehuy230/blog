import  Main  from '../FrontEnd/components/Main/index';
import {
	createStyles,
	makeStyles,
	useTheme,
	Theme,
  } from "@material-ui/core/styles";
import dynamic from 'next/dynamic'
import { NextPage } from 'next/types';
import Personal from '../FrontEnd/components/Personal';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "block",
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
);
const PersonalPage: NextPage = () => {
const classes = useStyles();
	return (
        <div className={classes.root}>
            <Main />
            <main className={classes.content}>
                <div>
                    < Personal/>
                </div>
            </main>
        </div>
	);
}

export default PersonalPage;
