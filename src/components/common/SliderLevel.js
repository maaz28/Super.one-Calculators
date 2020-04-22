import React from "react";
import Slider from "@material-ui/core/Slider";
import { withStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    color: "#3880ff",
    height: 2,
    padding: "15px 0",
  },
  thumb: {
    height: 28,
    width: 28,
    backgroundColor: "#fff",
    // boxShadow: iOSBoxShadow,
    marginTop: -14,
    marginLeft: -14,
    "&:focus, &:hover, &$active": {
      boxShadow:
        "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)",
      // Reset on touch devices, it doesn't add specificity
      // "@media (hover: none)": {
      //   boxShadow: iOSBoxShadow,
      // },
    },
  },
  active: {},
  markLabel: {
    marginTop: 15,
  },
  track: {
    height: 2,
  },
  rail: {
    height: 2,
    opacity: 0.5,
    backgroundColor: "#bfbfbf",
  },
  mark: {
    backgroundColor: "#bfbfbf",
    height: 8,
    width: 1,
    marginTop: 10,
  },
});
const levels = [
  {
    value: 1,
    label: "1",
  },
  {
    value: 2,
    label: "2",
  },
  {
    value: 3,
    label: "3",
  },
  {
    value: 4,
    label: "4",
  },
  {
    value: 5,
    label: "5",
  },
  {
    value: 6,
    label: "6",
  },
  {
    value: 7,
    label: "7",
  },
  {
    value: 8,
    label: "8",
  },
  {
    value: 9,
    label: "9",
  },
  {
    value: 10,
    label: "10",
  },
  {
    value: 11,
    label: "11",
  },
  {
    value: 12,
    label: "12",
  },
  {
    value: 13,
    label: "13",
  },
  {
    value: 14,
    label: "14",
  },
  {
    value: 15,
    label: "15",
  },
];

const AirbnbSlider = withStyles({
  thumb: {
    height: 27,
    width: 27,
    backgroundColor: "#fff",
    border: "1px solid currentColor",
    marginTop: -12,
    marginLeft: -13,
    boxShadow: "#ebebeb 0px 2px 2px",
    "&:focus, &:hover, &$active": {
      boxShadow: "#ccc 0px 2px 3px 1px",
    },
    "& .bar": {
      // display: inline-block !important;
      height: 9,
      width: 1,
      backgroundColor: "currentColor",
      marginLeft: 1,
      marginRight: 1,
    },
  },
});

function valueLabelFormat(value) {
  return levels.findIndex((mark) => mark.value === value) + 1;
}

function AirbnbThumbComponent(props) {
  return (
    <span
      style={{
        height: 27,
        width: 27,
        backgroundColor: "#fff",
        border: "1px solid currentColor",
        marginTop: -12,
        marginLeft: -13,
        boxShadow: "#ebebeb 0px 2px 2px",
        "&:focus, &:hover, &$active": {
          boxShadow: "#ccc 0px 2px 3px 1px",
        },
      }}
    >
      <span
        className="bar"
        style={{
          height: 9,
          width: 1,
          backgroundColor: "currentColor",
          marginLeft: 1,
          marginRight: 1,
        }}
      />
      <span
        className="bar"
        style={{
          height: 9,
          width: 1,
          backgroundColor: "currentColor",
          marginLeft: 1,
          marginRight: 1,
        }}
      />
      <span
        className="bar"
        style={{
          height: 9,
          width: 1,
          backgroundColor: "currentColor",
          marginLeft: 1,
          marginRight: 1,
        }}
      />
    </span>
  );
}

export default function SliderLevel({ valueChange }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Slider
        style={{
          color: "#b267cc",
        }}
        // ThumbComponent={AirbnbThumbComponent}
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
