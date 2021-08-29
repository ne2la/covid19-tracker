import React from 'react'
import { Bar } from 'react-chartjs-2';
import NotFoundPage from '../pages/NotFoundPage'

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
              'rgba(54, 162, 235, 0.3)',
              'rgba(255, 99, 132, 0.3)',
              'rgba(75, 192, 192, 0.3)',
              'rgba(255, 206, 86, 0.3)',
            ],
            borderColor: [
              'rgba(54, 162, 235, 0.9)',
              'rgba(255, 99, 132, 0.9)',
              'rgba(75, 192, 192, 0.9)',
              'rgba(255, 206, 86, 0.9)',
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
              'rgba(54, 162, 235, 0.3)',
              'rgba(255, 99, 132, 0.3)',
              'rgba(75, 192, 192, 0.3)',
            ],
            borderColor: [
              'rgba(54, 162, 235, 0.9)',
              'rgba(255, 99, 132, 0.9)',
              'rgba(75, 192, 192, 0.9)',
            ],
            borderWidth: 1,
          },
        ],
      };

    return (
        <>
            {dataType === 'local' ? <Bar data={localData} /> : dataType === 'global' ? <Bar data={globalData}/> : <NotFoundPage/> }
        </>
    )
}

export default BarChart
