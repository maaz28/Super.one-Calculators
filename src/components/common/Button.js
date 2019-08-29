import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Arrow from '@material-ui/icons/KeyboardArrowRight';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  button: {
    width: 300,
    marginTop: 30,
    backgroundColor: 'white'
  },
  rightIcon: {
    marginLeft: theme.spacing("100 %"),
  }
}));

export default function IconLabelButtons({ title }) {
  const classes = useStyles();

  return (
    <div>
      <Link to={"/" + title}>
        <Button variant="contained" fullWidth className={classes.button} >
          <Grid item xs={10} align="left">
            <b>{title} calculator</b>
          </Grid>
          <Grid item xs={2} align="right">
            <Arrow className={classes.rightIcon} />
          </Grid>
        </Button>
      </Link>
    </div>
  );
}