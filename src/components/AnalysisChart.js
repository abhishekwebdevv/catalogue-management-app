import React from 'react'
import PropTypes from 'prop-types'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

const getCount = (products, category) => {
  const arr = products.filter((item) => item.category === category)
  return arr.length
}

const getData = (products, categories) => {
  const data = []
  for (let i in categories) {
    data.push(getCount(products, categories[i]))
  }

  return data
}

const AnalysisChart = ({ products, categories }) => {
  const data = {
    labels: categories,
    datasets: [
      {
        label: 'No. of Items',
        data: getData(products, categories),
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
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
  }

  return <Pie data={data} />
}

AnalysisChart.propTypes = {
  products: PropTypes.array,
  categories: PropTypes.array,
}

export default AnalysisChart
