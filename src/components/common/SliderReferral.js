import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    // width: 300,
  },
});

const referrals = [
  {
    value: 5,
    label: "5",
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
        defaultValue={70}
        valueLabelFormat={valueLabelFormat}
        onChange={(ev, value) => valueChange(value)}
        aria-labelledby="discrete-slider-restrict"
        step={null}
        min={5}
        max={100}
        // valueLabelDisplay="auto"
        marks={referrals}
      />
    </div>
  );
}
