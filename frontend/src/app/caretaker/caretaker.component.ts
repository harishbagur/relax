import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import Chart from 'chart.js/auto';


@Component({
  selector: 'app-caretaker',
  standalone: true,
  imports: [CommonModule,HeaderComponent,MatCardModule,MatIconModule],
  templateUrl: './caretaker.component.html',
  styleUrl: './caretaker.component.css',
})
export class CaretakerComponent {
  public chart: any;
  ngOnInit(): void {
    this.createChart();
    this.createProgressChart();
    this.radialChart()
  }
  createChart(){
  
    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
								 '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17', ], 
	       datasets: [
          {
            label: "Med- left",
            data: ['467','576', '572', '79', '92',
								 '574', '573', '576'],
            backgroundColor: 'blue'
          },
          {
            label: "Left",
            data: ['542', '542', '536', '327', '17',
									 '0.00', '538', '541'],
            backgroundColor: 'limegreen'
          }  
        ]
      },
      options: {
        indexAxis: 'y',
        // Elements options apply to all of the options unless overridden in a dataset
        // In this case, we are setting the border of each horizontal bar to be 2px wide
        elements: {
          bar: {
            borderWidth: 2,
          }
        },
        aspectRatio:2.5,
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true
          }
        }
    
      }
      
    });
  }


  createProgressChart(){
    this.chart = new Chart("MyChart1", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
								 '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17', ], 
	       datasets: [
          {
            label: "Sales",
            data: ['467','576', '572', '79', '92',
								 '574', '573', '576'],
            backgroundColor: 'blue'
          },
          {
            label: "Profit",
            data: ['542', '542', '536', '327', '17',
									 '0.00', '538', '541'],
            backgroundColor: 'limegreen'
          }  
        ]
      },
      options: {
        indexAxis: 'y',
        // Elements options apply to all of the options unless overridden in a dataset
        // In this case, we are setting the border of each horizontal bar to be 2px wide
        elements: {
          bar: {
            borderWidth: 2,
          }
        },
        aspectRatio:2.5,
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true
          }
        }
    
      }
      
    });
  }

  radialChart(){
    let labels = ["Relaxed", "Angry"];
    this.chart = new Chart("MyChart2", {
      type: 'pie', //this denotes tha type of chart

      data: {
        labels: ['Relaxed', 'Angry'],
        datasets: [
          {
            backgroundColor: ['#AAA', '#777'],
            data: [83, 17]
            
          },
          {
            backgroundColor: ['hsl(0, 100%, 60%)', 'hsl(0, 100%, 35%)'],
            data: [80, 20]
            
          },
          {
            backgroundColor: ['hsl(100, 100%, 60%)', 'hsl(100, 100%, 35%)'],
            data: [79, 21]
          },
          {
            backgroundColor: ['hsl(180, 100%, 60%)', 'hsl(180, 100%, 35%)'],
            data: [70, 30]
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            labels: {
              generateLabels: function(chart) {
                // Get the daefault label list
                const original = Chart.overrides.pie.plugins.legend.labels.generateLabels;
                const labelsOriginal = original.call(this, chart);
    
                // Build an array of colors used in the datasets of the chart
                let datasetColors = chart.data.datasets.map(function(e) {
                  return e.backgroundColor;
                });
                datasetColors = datasetColors.flat();
    
                // Modify the color and hide state of each label
                labelsOriginal.forEach(label => {
                  // There are twice as many labels as there are datasets. This converts the label index into the corresponding dataset index
              
                });
    
                return labelsOriginal;
              }
            },
          
  
          },
        }
      },
    })
  }
}
