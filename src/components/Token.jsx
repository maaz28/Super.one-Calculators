import React, { Component } from 'react';
import Dropdown from './common/Dropdown';
import './App.css'
import { user_values, annualARPU_values, token_values, price_values } from './TokenCalculator/dropdown_const_value';
import { token_rewards, token_sale } from './TokenCalculator/algo';
import { Grid } from '@material-ui/core';
import Topbar from './common/Topbar';
// const levels_arr = [level1, level2, level3, level4, level5, level6, level7, level8, level9, level10];

export default class Token extends Component {

  constructor() {
    super();

    this.state = {
      PS: 4,
      T: 100000,
      A: 50, //SuperOne - ads, gaming, services 
      U: 1000000
    };

    this.setValue = this.setValue.bind(this);
  }

  setValue(value, name) {
    this.setState({ [name]: value });
  }

  render() {
    const { U, A, T, PS } = this.state;
    let TR = token_rewards(U, A, T), TV = token_sale(U, A, T, PS);
    console.log(TR, TV);
    return (
      <div>
        <Topbar />
        <div id="box-3">
          <div className="container-fluid col-md-7 ">
            <Grid container>
              <Grid item xs={6} >
                <div className="row mb-2">
                  <div className="col">
                    <h4 className="medium-14"> <b>Token rewards</b> </h4>
                  </div>
                </div>
              </Grid>
              <Grid item xs={6} >
                <div className="row mb-2">
                  <div className="col">
                    <h4 className="medium-14"> <b>Token value</b> </h4>
                  </div>
                </div>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={6} >
                <div className="row mb-5">
                  <div className="col">
                    <h2 className="numeric-35">
                      <b>
                        ${TR.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                      </b>
                    </h2>
                  </div>
                </div>
              </Grid>
              <Grid item xs={6} >
                <div className="row mb-5">
                  <div className="col">
                    <h2 className="numeric-35">
                      <b>
                        ${TV.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                      </b>
                    </h2>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>

          {/* <div className="row mb-5">
            <div className="col">
              <h2 className="numeric-35">
                <b>
                  ${profit.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                </b>
              </h2>
            </div>
          </div> */}

          <div className="container-fluid col-md-7 line-space">
            <Dropdown
              label="Users"
              id="U"
              values={user_values()}
              func={this.setValue}
              default_value_index={1}
            />
          </div>

          <div className="container-fluid col-md-7 line-space">
            <Dropdown
              label="Annual ARPU"
              id="A"
              values={annualARPU_values()}
              func={this.setValue}
              default_value_index={10}
            />
          </div>

          <div className="container-fluid col-md-7 line-space">
            <Dropdown
              label="tokens"
              id="T"
              values={token_values()}
              func={this.setValue}
              default_value_index={18}
            />
          </div>

          <div className="container-fluid col-md-7 line-space">
            <Dropdown
              label="Price / Sales"
              id="PS"
              values={price_values()}
              func={this.setValue}
              default_value_index={2}
            />
          </div>

        </div>
      </div>
    );
  }
}
