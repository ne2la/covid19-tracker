import React from 'react'
import { Pie } from 'react-chartjs-2'

const Graphs = ({apiData}) => {

    const graphData = {
        labels: ['Local Total Cases', 'Local Total Deaths', 'Local Recovered', 'Local Active Cases'],
        datasets: [
          {
            label: '# of Votes',
            data: [apiData.data.local_total_cases,
                    apiData.data.local_deaths,
                    apiData.data.local_recovered,
                    apiData.data.local_active_cases],
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


    return (
        <>
            <Pie data={graphData} />
        </>
    )
}

export default Graphs
