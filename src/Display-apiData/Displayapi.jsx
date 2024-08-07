import React, { useState, useEffect } from 'react';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';


const size = {
  width: 1000,
  height: 500,
};


export default function Displayapi() {

  const [dataa, setDataa] = useState([]);
  useEffect(() => {
    fetch("http://universities.hipolabs.com/search?country=India")
      .then((resp) => resp.json())
      .then((objdata) => setDataa(objdata))
  }, []);


  console.log(dataa);

  let States_arr = [];

  dataa.map((values) => {
    if (values["state-province"]) {
      States_arr.push(values["state-province"]);
    }
  })

  console.log(States_arr);

  let countStates = States_arr.reduce((obj, states) => {

    obj[states] ? obj[states]++ : obj[states] = 1;

    return obj;
  }, {});

  console.log(countStates);


  console.log(Object.keys(countStates));

  let final_arr = [];
  for (let i of Object.keys(countStates)) {
    let arr = { value: Number(`${countStates[i]}`), label: i };
    final_arr.push(arr);
  }

  let data = final_arr.slice(0, 8);

  return (
    <PieChart
      series={[
        {
          arcLabel: (item) => `${item.label} (${item.value})`,
          arcLabelMinAngle: 5,
          data,
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: 'white',
          fontWeight: 'bolder',
        },
      }}
      {...size}
    />
  );
}