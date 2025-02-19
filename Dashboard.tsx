import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

export default function Dashboard() {
  const data = {
    labels: ['User 1', 'User 2', 'User 3'],
    datasets: [{ label: 'Profile Trends', data: [10, 20, 30], backgroundColor: 'rgba(75,192,192,0.4)' }],
  };

  return <Bar data={data} />;
}
