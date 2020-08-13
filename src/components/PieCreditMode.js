import React from 'react';
import {Pie} from 'react-chartjs-2';


export default function PieChartCrebit(props){



    const data = {
        labels: [
            'Debit Card',
            'Credit Card',
            'UPI',
            'Cash',
            'NetBanking',
        ],
        datasets: [{
            // data: [300, 50, 100],
            data: props.data,
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#3f51b5',
                '#009688',
            ],
            hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#3f51b5',
                '#009688',
            ]
        }]
    }
    return (
      <div>
        <Pie data={data} 
        height={200}  
        options={{
          responsive: true,
          maintainAspectRatio: false,
        }}/>
      </div>
    );
};

