// import React, { useState, useEffect } from 'react';
// import * as firebase from 'firebase';
// import { makeStyles } from '@material-ui/core/styles';
// import { Paper ,Container, Grid , CssBaseline, TextField ,Card,CardContent ,Avatar, Button, Typography , InputLabel, Select , MenuItem, FormControl} from '@material-ui/core';
// import Loading from './Loading';
import React , { Component } from 'react';
import {Pie} from 'react-chartjs-2';


export default function PieChartCrebit(props){



    const data = {
        labels: [
            'Income',
            'Salary',
            'Profit'
        ],
        datasets: [{
            // data: [300, 50, 100],
            data: props.data,
            backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
            ],
            hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
            ]
        }]
    }
    return (
      <div>
        <h2>Credit</h2>
        <Pie data={data} 
        height={100}  
        options={{
          responsive: true,
          maintainAspectRatio: false,
        }}/>
      </div>
    );
};

