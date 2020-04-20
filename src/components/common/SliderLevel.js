import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    // width: 300,
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

function valueLabelFormat(value) {
  return levels.findIndex((mark) => mark.value === value) + 1;
}

export default function SliderLevel({ valueChange }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Slider
        style={{
          color: "#b267cc",
        }}
        defaultValue={7}
        valueLabelFormat={valueLabelFormat}
        onChange={(ev, value) => valueChange(value)}
        aria-labelledby="discrete-slider-restrict"
        step={1}
        min={1}
        max={15}
        marks={levels}
      />
    </div>
  );
}
