import 'apexcharts/dist/apexcharts.css'; 
import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { getPostsByMonth } from '../../utils/constatns';
import axios from '../../utils/axios';
const colors = ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0'];

const ApexChart = () => {

  const [data, setdata] = useState([])

  const groupPostsByMonth = async () => {
    try {
      const response = await axios.get(getPostsByMonth)
      setdata(response.data)
      const seriesData = response.data.map((month) => month.count);
      setChartData({
        ...chartData,
        series: [{
          data: seriesData
        }]
      })

    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    groupPostsByMonth()
  }, [])
  const [chartData, setChartData] = useState({
    series: [{
      data: [0,0,0,0,0,0,0,0,0,0,0,0]
    }],
    options: {
      chart: {
        height: 350,
        type: 'bar',
        events: {
          click: function (chart, w, e) {
            // console.log(chart, w, e)
          }
        }
      },
      colors: colors,
      plotOptions: {
        bar: {
          columnWidth: '80%',
          distributed: true,
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      xaxis: {
        categories: [
          ['Jan'],
          ['Feb'],
          ['March'],
          'Mar',
          ['Apr'],
          ['May'],
          ['Jun'],
          ['July'],
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec'
        ],
        labels: {
          style: {
            colors: colors,
            fontSize: '10px'
          }
        }
      }
    }
  });

  return (
  <>
  <div className='text-xl font-semibold pt-6'>Total Posts </div>
  <div className='text-center justify-center'>
    <div id="chart" className=' md:w-[800px]'>
      <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={350} />
    </div>
    <p>This Year 2023</p>
    </div>
  </>
  );
};

export default ApexChart;