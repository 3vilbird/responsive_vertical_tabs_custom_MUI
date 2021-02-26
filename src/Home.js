import React from 'react';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles'
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import BackupTwoToneIcon from '@material-ui/icons/BackupTwoTone';
import BackupIcon from '@material-ui/icons/Backup';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

const Home = () => {
    const classes = useStyles();
    return (
        <div>
            <Link to="/dropzone">
                <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    className={classes.button}
                    startIcon={<BackupIcon />}
                >
                    CustomDropZone
          </Button>
            </Link>
            <Link to="/verticletabs">
                <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    className={classes.button}
                    startIcon={<BackupIcon />}
                >
                    VerticleTabs
          </Button>
            </Link>

            <Link to="/footer">
                <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    className={classes.button}
                    startIcon={<BackupIcon />}
                >
                    Footer
      </Button>
            </Link>


        </div>
    );
}

export default Home;