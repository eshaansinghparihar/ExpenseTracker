import React  from 'react';
import {Pie} from 'react-chartjs-2';

export default function PieChartDebit(props){



    const data = {
        labels: [
            'Travel',
            'Food',
            'Beverage',
            'Grocery',
            'Shopping',
            'Investment',
            'Bill Payment',
            'Beauty',
            'Household',
            'Self Care',
            'Book',
            'Clothing',
            'Electronics & Gadgets',
            'Others'
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
            '#84ffff',
            '#1de9b6',
            '#4caf50',
            '#cddc39',
            '#ff9800',
            '#607d8b',
            '#64dd17',
            '#69f0ae',
            '',
            ],
            hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#3f51b5',
                '#009688',
                '#84ffff',
                '#1de9b6',
                '#4caf50',
                '#cddc39',
                '#ff9800',
                '#607d8b',
                '#64dd17',
                '#69f0ae',
                '',
            ]
        }]
    }
    return (
      <div>
        <Pie data={data}  
        height={300}
        options={{
          responsive: true,
          maintainAspectRatio: false,
        }}/>
      </div>
    );
};