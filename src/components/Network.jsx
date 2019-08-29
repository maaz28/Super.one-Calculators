import React, { Component } from 'react';
import Dropdown from './common/Dropdown';
import { calculateTokenPriceInDollars } from '../smartContractFunc/functions';
import { package_values, average_purchases_values, referral_values, virality_values, levels_values } from './NetworkCalculator/Dropdown_constant_values';
import { binary_reward_func, unilevel_reward, binary_reward_func_level2 } from './NetworkCalculator/algo';
import './App.css'
import Topbar from './common/Topbar';
// const levels_arr = [level1, level2, level3, level4, level5, level6, level7, level8, level9, level10];

export default class Network extends Component {

  constructor() {
    super();

    this.state = {
      referrals: 5,
      virality: 2,
      levels: 10,
      purchase: 1,
      pkg: 0.83
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
      tokenPrice
    })
  }

  render() {
    const { referrals,
      virality,
      levels,
      purchase,
      pkg } = this.state;
    let BR;
    if (levels == 2) {
      BR = binary_reward_func_level2(referrals, virality, levels, pkg, purchase);
    } else {
      BR = binary_reward_func(referrals, virality, levels, pkg, purchase);
    }
    let UR = unilevel_reward(referrals, virality, levels, pkg, purchase);
    let profit = BR + UR;
    console.log(profit);
    return (
      <div>
        <Topbar />
        <div id="box-3">
          <div className="row mb-2">
            <div className="col">
              <h4 className="medium-14"> <b>Network rewards</b> </h4>
            </div>
          </div>

          <div className="row mb-5">
            <div className="col">
              <h2 className="numeric-35">
                <b>
                  ${profit.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                </b>
              </h2>
            </div>
          </div>

          <div className="container-fluid col-md-7 line-space">
            <Dropdown
              label="Your referrals"
              id="referrals"
              values={referral_values}
              func={this.setValue}
              default_value_index={4}
            />
          </div>

          <div className="container-fluid col-md-7 line-space">
            <Dropdown
              label="Virality"
              id="virality"
              values={virality_values()}
              func={this.setValue}
              default_value_index={1}
            />
          </div>

          <div className="container-fluid col-md-7 line-space">
            <Dropdown
              label="Levels"
              id="levels"
              values={levels_values()}
              func={this.setValue}
              default_value_index={8}
            />
          </div>

          <div className="container-fluid col-md-7 line-space">
            <Dropdown
              label="Average purchase"
              id="purchase"
              values={average_purchases_values}
              func={this.setValue}
              default_value_index={0}
            />
          </div>

          <div className="container-fluid col-md-7 line-space">
            <Dropdown
              label="Your Package"
              id="pkg"
              values={package_values}
              func={this.setValue}
              default_value_index={1}
            />
          </div>
        </div>
      </div>
    );
  }
}
