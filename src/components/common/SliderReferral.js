import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

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

const referrals = [
  {
    value: 4,
    label: "4",
  },
  {
    value: 10,
    label: "10",
  },
  {
    value: 20,
    label: "20",
  },
  {
    value: 30,
    label: "30",
  },
  {
    value: 40,
    label: "40",
  },
  {
    value: 50,
    label: "50",
  },
  {
    value: 60,
    label: "60",
  },
  {
    value: 70,
    label: "70",
  },
  {
    value: 80,
    label: "80",
  },
  {
    value: 90,
    label: "90",
  },
  {
    value: 100,
    label: "100",
  },
];

function valuetext(value) {
  console.log(value);
  return `${value}`;
}

function valueLabelFormat(value) {
  console.log(value);
  return referrals.findIndex((mark) => mark.value === value) + 1;
}

export default function SliderReferral({ valueChange }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Slider
        style={{
          color: "#b267cc",
        }}
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
