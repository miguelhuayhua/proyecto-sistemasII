import { Component, OnInit } from '@angular/core';
import { Row } from 'angular-google-charts';
import { ChartType, ChartBase } from 'angular-google-charts';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor() { }
  data = [["Jan", 7.0, 1, 1, 3.9],
  ["Feb", 6.9, 0.8, 0.6, 4.2],
  ["Mar", 9.5, 5.7, 3.5, 5.7],
  ["Apr", 14.5, 11.3, 8.4, 8.5],
  ["May", 18.2, 17.0, 13.5, 11.9],
  ["Jun", 21.5, 22.0, 17.0, 15.2],
  ["Jul", 25.2, 24.8, 18.6, 17.0],
  ["Aug", 26.5, 24.1, 17.9, 16.6],
  ["Sep", 23.3, 20.1, 14.3, 14.2],
  ["Oct", 18.3, 14.1, 9.0, 10.3],
  ["Nov", 13.9, 8.6, 3.9, 6.6],
  ["Dec", 9.6, 2.5, 1.0, 4.8]];
  options = {
    showType: true, colors: ['#A2ACEC', '#E7EAFA', '#FEFEFE', '#9492FF', '9492FF'], is3D: true,
    chartArea: {
      backgroundColor: {
        opacity: 100
      }
    },
    legend: { textStyle: { color: 'white' } },
    titleColor: '#CCC',
    titleFontSize: 20,
    backgroundColor: '#3A5486',
    hAxis: {
      gridlines: {
        color: "#A20102"
      },
      baselineColor: '#A20102',
      textStyle: { color: 'white' },

    },
    vAxis: {
      gridlineColor: '#A2ACEC',
      baselineColor: 'white',
      textStyle: { color: 'white' }
    }
  }
  type: ChartType = ChartType.LineChart
  //pieChart
  type2: ChartType = ChartType.PieChart
  data2 = [
    ['Firefox', 45.0],
    ['IE', 26.8],
    ['Chrome', 12.8],
    ['Safari', 8.5],
    ['Opera', 6.2],
    ['Others', 0.7]
  ];
  options2 = {
    pieHole: 0.4,
    showType: true, colors: ['#A2ACEC', '#E7EAFA', '#6E2B44', '#9492FF', '9492FF'],
    chartArea: {
      backgroundColor: {
        opacity: 100
      }

    },
    titleColor: '#CCC',
    backgroundColor: '#FEFEFE',

    vAxis: {
      gridlineColor: '#A2ACEC',
      baselineColor: 'white',
      textStyle: { color: 'white' }
    }
  }
  //barChart
  type3: ChartType = ChartType.BarChart
  data3 = [
    ["2012", 900, 390],
    ["2013", 1000, 400],
    ["2014", 1170, 440],
    ["2015", 1250, 480],
    ["2016", 1530, 540]
  ]

  options3 = {
    bar: { groupWidth: "95%" },
    showType: true,
    colors: ['#544065', '#D0D5F5'],
    backgroundColor: '#FEFEFE',
    legend: { position: 'top', textStyle: { fontSize: 16 }, alignment: 'center' },
    vAxis: {
      gridlineColor: 'blue',
      baselineColor: 'white',
      textStyle: { color: 'white' }
    }
    ,
    hAxis: {
      gridlineColor: 'blue',
      baselineColor: '#041297'
    }
  }
  ngOnInit(): void {
  }
  //events (methods)
  clickUser(ev: MouseEvent): void {
    this.showUserOptions = !this.showUserOptions;
  }
  userLeave(ev: any): void {
    this.showUserOptions = false;
  }

  //attributes

  showUserOptions: boolean = false;
}
