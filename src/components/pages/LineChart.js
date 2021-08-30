import React from 'react'
import { Line } from 'react-chartjs-2';

const LineChart = ({apiData}) => {

    const pcr_data = apiData.pcr_data
    
    const pcrObj = {}
    
    for(var i = 0;i<50;i++){
        pcrObj[i] = pcr_data[i].pcr_count
    }

    const pcrData = {
        labels: ['1', '2', '3', '4', '5', '6','7','8','9','10',
                '11', '12', '13', '14', '15', '16','17','18','19','20',
                '21', '22', '23', '24', '25', '26','27','28','29','30',
                '31', '32', '33', '34', '35', '36','37','38','39','40',
                '41', '42', '43', '44', '45', '46','47','48','49','50'],
        datasets: [
          {
            label: 'pcr count',
            data: [
                pcrObj[0],pcrObj[1],pcrObj[2],pcrObj[3],pcrObj[4],pcrObj[5],
                pcrObj[6],pcrObj[7],pcrObj[8],pcrObj[9],pcrObj[10],pcrObj[11],
                pcrObj[12],pcrObj[13],pcrObj[14],pcrObj[15],pcrObj[16],pcrObj[17],
                pcrObj[18],pcrObj[19],pcrObj[20],pcrObj[21],pcrObj[22],pcrObj[23],
                pcrObj[24],pcrObj[25],pcrObj[26],pcrObj[27],pcrObj[28],pcrObj[29],
                pcrObj[30],pcrObj[31],pcrObj[32],pcrObj[33],pcrObj[34],pcrObj[35],
                pcrObj[36],pcrObj[37],pcrObj[38],pcrObj[39],pcrObj[40],pcrObj[41],
                pcrObj[42],pcrObj[43],pcrObj[44],pcrObj[45],pcrObj[46],pcrObj[47],
                pcrObj[48],pcrObj[49]
            ],
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.4)',
            pointBorderWidth:1,
            pointRadius:1,
          },
        ],
      };

      const antigen_data = apiData.antigen_data
      const antigenObj = {}

      for(var j = 0;j<50;j++){
        antigenObj[j] = antigen_data[j].antigen_count
      }

      const antigenData = {
        labels: ['1', '2', '3', '4', '5', '6','7','8','9','10',
                '11', '12', '13', '14', '15', '16','17','18','19','20',
                '21', '22', '23', '24', '25', '26','27','28','29','30',
                '31', '32', '33', '34', '35', '36','37','38','39','40',
                '41', '42', '43', '44', '45', '46','47','48','49','50'],
        datasets: [
          {
            label: 'antigen count',
            data: [
              antigenObj[0],antigenObj[1],antigenObj[2],antigenObj[3],antigenObj[4],antigenObj[5],
              antigenObj[6],antigenObj[7],antigenObj[8],antigenObj[9],antigenObj[10],antigenObj[11],
              antigenObj[12],antigenObj[13],antigenObj[14],antigenObj[15],antigenObj[16],antigenObj[17],
              antigenObj[18],antigenObj[19],antigenObj[20],antigenObj[21],antigenObj[22],antigenObj[23],
              antigenObj[24],antigenObj[25],antigenObj[26],antigenObj[27],antigenObj[28],antigenObj[29],
              antigenObj[30],antigenObj[31],antigenObj[32],antigenObj[33],antigenObj[34],antigenObj[35],
              antigenObj[36],antigenObj[37],antigenObj[38],antigenObj[39],antigenObj[40],antigenObj[41],
              antigenObj[42],antigenObj[43],antigenObj[44],antigenObj[45],antigenObj[46],antigenObj[47],
              antigenObj[48],antigenObj[49]
            ],
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.4)',
            pointBorderWidth:1,
            pointRadius:1,
          },
        ],
      };

      const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      };
    return (
        <>
            <Line data={pcrData} options={options} />
            <hr style={{width:'60%',marginLeft:'20%'}}/>
            <Line data={antigenData} options={options} />
        </>
    )
}

export default LineChart
