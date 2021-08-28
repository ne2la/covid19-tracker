import React from 'react'
import { Bar } from 'react-chartjs-2';

const BarChart = ({apiData}) => {

    const dataType = apiData.type

    const localData = {
        labels: ['Local Total Cases', 'Local Total Deaths', 'Local Recovered', 'Local Active Cases'],
        datasets: [
          {
            label: 'Human Count',
            data: [apiData.local_total_cases,
                    apiData.local_deaths,
                    apiData.local_recovered,
                    apiData.local_active_cases],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };

      const globalData = {
        labels: ['Global Total Cases', 'Global Total Deaths', 'Global Recovered'],
        datasets: [
          {
            label: 'Human Count',
            data: [apiData.global_total_cases,
                    apiData.global_deaths,
                    apiData.global_recovered],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };

    return (
        <>
            {dataType === 'local' ? <Bar data={localData} /> : <Bar data={globalData}/> }
        </>
    )
}

export default BarChart
