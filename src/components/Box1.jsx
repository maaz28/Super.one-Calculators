import React from 'react';
import Logo from '../images/logo1.png';
import { Grid } from '@material-ui/core';
import ReactPlayer from 'react-player';
import IconLabelButtons from './common/Button';
import Arrow from '@material-ui/icons/KeyboardArrowLeft';

export default class Box1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      onMobileDevice: false,
    };
  }

  componentDidMount() {
    var useragent = navigator.userAgent;
    if (
      useragent.indexOf('iPhone') !== -1 ||
      useragent.indexOf('Android') !== -1
    ) {
      this.setState({ onMobileDevice: true });
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
              <a href="/">
                <img
                  src={Logo}
                  style={{ width: '170px', paddingLeft: '20px' }}
                  alt=""
                  srcset=""
                />
              </a>
              <div className="sub-heading">
                <b>CALCULATORS</b>{' '}
              </div>
            </Grid>
            <Grid item xs={12} align="center">
              <ReactPlayer
                url="https://s3.eu-west-2.amazonaws.com/super.one/superone_conceptvideo.mp4"
                playing={false}
                controls
                width={onMobileDevice ? 300 : 'auto'}
                height={onMobileDevice ? 200 : 360}
                style={{ marginTop: '30px' }}
              />
            </Grid>
            <Grid item xs={12} align="center">
              <IconLabelButtons title="coding" />
              <IconLabelButtons title="token" />
            </Grid>
          </Grid>
          <br />

          <Grid container>
            <Grid item xs={12} align="center">
              <a
                href="https://super.one/"
                style={{
                  // float: "left",
                  // marginLeft: "5px",
                  color: 'black',
                  fontWeight: 'bold',
                }}
              >
                <Arrow /> TO SUPER.ONE
              </a>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}
