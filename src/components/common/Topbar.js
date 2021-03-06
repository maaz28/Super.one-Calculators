import React from 'react';
import { Grid } from '@material-ui/core';
import Logo from '../../images/logo1.png';
import Arrow from '@material-ui/icons/KeyboardArrowLeft';
import { Link } from 'react-router-dom';

export default function Topbar() {
  return (
    <div id="box-2">
      <Grid container>
        <Grid item xs={12} align="center">
          <Link
            to="/"
            style={{
              float: 'left',
              marginLeft: '5px',
              color: 'black',
              fontWeight: 'bold',
            }}
          >
            <Arrow />
          </Link>
          <Link to={'/'}>
            <img
              src={Logo}
              style={{ width: '120px', marginLeft: '-40px' }}
              alt=""
              srcset=""
            />
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}
