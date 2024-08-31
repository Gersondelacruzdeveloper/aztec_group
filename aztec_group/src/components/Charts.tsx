import React from 'react';
import '../assets/scss/Charts.scss'
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend, 
} from 'chart.js';
// Register the required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Charts: React.FC = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
      {
        label: 'Dataset 2',
        data: [28, 48, 40, 19, 86, 27, 90],
        fill: false,
        borderColor: '#742774',
      },
    ],
  };

  return (
    <div className="charts">
      <div className="chart-container">
       <h2>Evolve</h2>
        <Line data={data} />
      </div>
      <div className="chart-container">
       <h2>Evolve</h2>
        <Line data={data} />
      </div>
      <div className="chart-container">
       <h2>Evolve</h2>
        <Line data={data} />
      </div>
      <div className="chart-container">
       <h2>Evolve</h2>
        <Line data={data} />
      </div>
    </div>
  );
}

export default Charts;
