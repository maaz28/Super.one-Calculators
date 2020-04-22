import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    color: '#3880ff',
    height: 2,
    padding: '15px 0',
  },
  thumb: {
    height: 28,
    width: 28,
    backgroundColor: '#fff',
    // boxShadow: iOSBoxShadow,
    marginTop: -14,
    marginLeft: -14,
    '&:focus, &:hover, &$active': {
      boxShadow:
        '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
      // Reset on touch devices, it doesn't add specificity
      // "@media (hover: none)": {
      //   boxShadow: iOSBoxShadow,
      // },
    },
  },
  active: {},
  markLabel: {
    marginTop: 33,
  },
  track: {
    height: 2,
  },
  rail: {
    height: 2,
    opacity: 0.5,
    backgroundColor: '#bfbfbf',
  },
  mark: {
    backgroundColor: '#bfbfbf',
    height: 8,
    width: 1,
    marginTop: 28,
  },
});

const referrals = [
  {
    value: 4,
    label: '4',
  },
  {
    value: 10,
    label: '10',
  },
  {
    value: 20,
    label: '20',
  },
  {
    value: 30,
    label: '30',
  },
  {
    value: 40,
    label: '40',
  },
  {
    value: 50,
    label: '50',
  },
  {
    value: 60,
    label: '60',
  },
  {
    value: 70,
    label: '70',
  },
  {
    value: 80,
    label: '80',
  },
  {
    value: 90,
    label: '90',
  },
  {
    value: 100,
    label: '100',
  },
];

const RangeSlider = withStyles({
  root: {
    color: '#AF00CC',
    height: 120,
  },
  thumb: {
    width: 40,
    height: 40,
    borderRadius: 5,
    backgroundColor: '#fff',
    border: '1px solid #AF00CC',
    marginTop: -17,
    marginLeft: -18,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
    '& .bar': {
      // display: inline-block !important;
      height: 15,
      width: 1,
      backgroundColor: '#AF00CC',
      marginLeft: 2,
      marginRight: 2,
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

function RangeSliderThumbComponent(props) {
  return (
    <span {...props}>
      <span className="bar" />
      <span className="bar" />
      <span className="bar" />
    </span>
  );
}

function valueLabelFormat(value) {
  console.log(value);
  return referrals.findIndex((mark) => mark.value === value) + 1;
}

export default function SliderReferral({ valueChange }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <RangeSlider
        ThumbComponent={RangeSliderThumbComponent}
        defaultValue={6}
        valueLabelFormat={valueLabelFormat}
        onChange={(ev, value) => valueChange(value)}
        aria-labelledby="discrete-slider-restrict"
        // step={null}
        min={4}
        max={100}
        classes={{
          mark: classes.mark, // class name, e.g. `classes-nesting-root-x`
          markLabel: classes.markLabel,
        }}
        marks={referrals}
      />
    </div>
  );
}
