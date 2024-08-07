import React, { useState, useEffect } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import axios from 'axios';

const chartSetting = {
  xAxis: [
    {
      label: 'rainfall (mm)',
    },
  ],
  width: 500,
  height: 400,
};
const dataset = [
  {
    seoul: 21,
    month: 'Jan',
  },
  {
    seoul: 28,
    month: 'Fev',
  },
  {
    seoul: 41,
    month: 'Mar',
  },
  {
    seoul: 73,
    month: 'Apr',
  },
  {
    seoul: 99,
    month: 'May',
  },
  {
    seoul: 144,
    month: 'June',
  },
  {
    seoul: 319,
    month: 'July',
  },
  {
    seoul: 249,
    month: 'Aug',
  },
  {
    seoul: 131,
    month: 'Sept',
  },
  {
    seoul: 55,
    month: 'Oct',
  },
  {
    seoul: 48,
    month: 'Nov',
  },
  {
    seoul: 25,
    month: 'Dec',
  },
];

// const valueFormatter = (value) => `${value}mm`;

export default function HorizontalBars() {
  const [dataa, setDataa] = useState([]);

  useEffect( () => {
    // console.log("check");

    axios.get(`http://universities.hipolabs.com/search?country=India`)
      .then((res) => {
        console.log(res);
        // console.log(res.data);
        setDataa(res.data);
      })

  }, []);

  let domains = [];
  dataa.map((values) => {
    domains.push(values["domains"]);
  })
  // console.log(domains);

  let arr = [];

  for (let dom of domains) {
    const d = dom[0].split(".");
    d.shift();
    let a = d.join('.')
    // console.log(a);
    arr.push(a);
  }
  // console.log(arr);

   let countDomains = arr.reduce((obj, domains) => {

    obj[domains] ? obj[domains]++ : obj[domains] = 1;

    return obj;
  }, {});

  console.log(countDomains);

  // console.log(Object.keys(countDomains));

  let final_arr = [];
  // let dataset = [];
  for (let i of Object.keys(countDomains)) {
    let arr = { 
                seoul: Number(`${countDomains[i]}`), 
                month: i 
              };
    final_arr.push(arr);
    // dataset.push(arr);
  }

console.log(final_arr);
// console.log(dataset);

// let dataset = final_arr.slice(0, 11);


  return (
    <BarChart
      dataset={dataset}
      yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[{ dataKey: 'seoul', label: 'domains' }]}
      layout="horizontal"
      {...chartSetting}
    />
  );
}