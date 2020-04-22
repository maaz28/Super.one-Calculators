import React from 'react';
import Slider from '@material-ui/core/Slider';
import { withStyles, makeStyles } from '@material-ui/core/styles';

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
const levels = [
  {
    value: 1,
    label: '1',
  },
  {
    value: 2,
    label: '2',
  },
  {
    value: 3,
    label: '3',
  },
  {
    value: 4,
    label: '4',
  },
  {
    value: 5,
    label: '5',
  },
  {
    value: 6,
    label: '6',
  },
  {
    value: 7,
    label: '7',
  },
  {
    value: 8,
    label: '8',
  },
  {
    value: 9,
    label: '9',
  },
  {
    value: 10,
    label: '10',
  },
  {
    value: 11,
    label: '11',
  },
  {
    value: 12,
    label: '12',
  },
  {
    value: 13,
    label: '13',
  },
  {
    value: 14,
    label: '14',
  },
  {
    value: 15,
    label: '15',
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

function valueLabelFormat(value) {
  return levels.findIndex((mark) => mark.value === value) + 1;
}

function RangeSliderThumbComponent(props) {
  return (
    <span {...props}>
      <span className="bar" />
      <span className="bar" />
      <span className="bar" />
    </span>
  );
}

export default function SliderLevel({ valueChange }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <RangeSlider
        ThumbComponent={RangeSliderThumbComponent}
        defaultValue={7}
        valueLabelFormat={valueLabelFormat}
        onChange={(ev, value) => valueChange(value)}
        aria-labelledby="discrete-slider-restrict"
        step={1}
        min={1}
        classes={{
          mark: classes.mark, // class name, e.g. `classes-nesting-root-x`
          markLabel: classes.markLabel,
        }}
        max={15}
        marks={levels}
      />
    </div>
  );
}
