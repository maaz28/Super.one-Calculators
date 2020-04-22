import React, { Component } from 'react';
import { calculateTokenPriceInDollars } from '../smartContractFunc/functions';
import { levels_values } from './NetworkCalculator/Dropdown_constant_values';
import './App.css';
import Topbar from './common/Topbar';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import SliderReferral from './common/SliderReferral';
import SliderLevel from './common/SliderLevel';
// const levels_arr = [level1, level2, level3, level4, level5, level6, level7, level8, level9, level10];

export default class Network extends Component {
  constructor() {
    super();

    this.state = {
      id1: false,
      id2: true,
      id3: false,
      id4: false,
      prevId: 'id2',
      referral: 6,
      level: 7,
      pkg: 50,
    };

    this.setValue = this.setValue.bind(this);
  }

  setValue(value, name) {
    this.setState({ [name]: value });
  }

  componentDidMount() {
    this.tokenPriceCalculator();
  }

  tokenPriceCalculator = async () => {
    let tokenPrice = await calculateTokenPriceInDollars(1);
    console.log(tokenPrice);
    this.setState({
      tokenPrice,
    });
  };

  boxHandler = (ev, value) => {
    console.log(value);

    this.setState({
      [this.state.prevId]: false,
      [ev.target.id]: true,
      prevId: ev.target.id,
      pkg: value,
    });
  };

  referralValueChange = (value) => {
    console.log(value);
    this.setState({
      referral: value,
    });
  };

  levelValueChange = (value) => {
    console.log(value);
    this.setState({
      level: value,
    });
  };

  render() {
    let btn_class1 = this.state.id1 ? 'clicked' : 'normal';
    let btn_class2 = this.state.id2 ? 'clicked' : 'normal';
    let btn_class3 = this.state.id3 ? 'clicked' : 'normal';
    let btn_class4 = this.state.id4 ? 'clicked' : 'normal';

    const { referral, level, pkg } = this.state;
    const resolved_level = levels_values.find((element) => {
      console.log(element);
      return element.label === String(level);
    });
    console.log(resolved_level);
    let profit = (referral - 3) * pkg * resolved_level.value;

    console.log(profit);
    return (
      <div>
        <Topbar />
        <div>
          <div id="box-3">
            <div className="row mb-2">
              <div className="col">
                <h4 className="medium-14 custom-color">
                  <b>Coding rewards</b>
                </h4>
              </div>
            </div>

            <div className="row mb-5">
              <div className="col">
                <h2 className="numeric-35">
                  <b>
                    $
                    {profit
                      .toFixed(0)
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                  </b>
                </h2>
              </div>
            </div>

            <div className="row mb-2">
              <div className="col">
                <h4 className="medium-14 custom-color">
                  <b>Package tier</b>
                </h4>
              </div>
            </div>

            <Grid container spacing={2}>
              <Grid item xs={6} align="center">
                <Paper
                  id="id1"
                  className={`paper ${btn_class1}`}
                  onClick={(ev) => this.boxHandler(ev, 10)}
                >
                  $100
                </Paper>
              </Grid>
              <Grid item xs={6} align="center">
                <Paper
                  id="id2"
                  className={`paper ${btn_class2}`}
                  onClick={(ev) => this.boxHandler(ev, 50)}
                >
                  $500
                </Paper>
              </Grid>
              <Grid item xs={6} align="center">
                <Paper
                  id="id3"
                  className={`paper ${btn_class3}`}
                  onClick={(ev) => this.boxHandler(ev, 100)}
                >
                  $1000
                </Paper>
              </Grid>
              <Grid item xs={6} align="center">
                <Paper
                  id="id4"
                  className={`paper ${btn_class4}`}
                  onClick={(ev) => this.boxHandler(ev, 250)}
                >
                  $2500
                </Paper>
              </Grid>
            </Grid>
            <br />
            <div className="row mb-2">
              <div className="col">
                <h4 className="medium-14 custom-color">
                  <b>Direct referrals</b>
                </h4>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h2 className="numeric-35">
                  <b>
                    {referral
                      .toFixed(0)
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                  </b>
                </h2>
              </div>
            </div>
            <SliderReferral valueChange={this.referralValueChange} />

            <br />
            <br />
            <br />
            {/* <br /> */}

            <div className="row mb-2">
              <div className="col">
                <h4 className="medium-14 custom-color">
                  <b>Levels</b>
                </h4>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h2 className="numeric-35">
                  <b>
                    {level.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                  </b>
                </h2>
              </div>
            </div>
            <SliderLevel valueChange={this.levelValueChange} />
            <br />
            <br />
            <br />

            <div
              style={{
                fontSize: '10px',
              }}
            >
              <i>
                {' '}
                This calculator provides estimates of potential rewards and does
                not constitute or guarantee any profit. The estimates are based
                on all members recruiting a minimum of three new members each,
                as this is the coding requirement.
              </i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
