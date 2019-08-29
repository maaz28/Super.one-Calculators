import React from 'react';
import Logo from '../images/logo1.png'
import { Grid } from '@material-ui/core';
import ReactPlayer from 'react-player';
import IconLabelButtons from './common/Button';

export default class Box1 extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      onMobileDevice: false
    }
  }


  componentDidMount() {
    var useragent = navigator.userAgent;
    if (useragent.indexOf('iPhone') !== -1 || useragent.indexOf('Android') !== -1) {
      this.setState({ onMobileDevice: true })
    }
  }

  render() {
    const { onMobileDevice } = this.state;
    return (
      <div>
        <div id="box-1">
          <br />
          <Grid container>
            <Grid item xs={12} align="center">
              <a > <img src={Logo} style={{ width: '170px', paddingLeft: '20px' }} alt="" srcset="" /></a>
              <div className="sub-heading"> <b>CALCULATORS</b> </div>
            </Grid>
            <Grid item xs={12} align="center">
              <ReactPlayer
                url='https://s3.eu-west-2.amazonaws.com/super.one/superone_conceptvideo.mp4'
                playing={false}
                controls
                width={(onMobileDevice) ? 300 : "auto"}
                height={(onMobileDevice) ? 200 : 360}
                style={{ marginTop: '30px' }}
              />
            </Grid>
            <Grid item xs={12} align="center">
              <IconLabelButtons title="token" />
              <IconLabelButtons title="network" />
            </Grid>
          </Grid>
        </div>

      </div>
    );
  }


}
