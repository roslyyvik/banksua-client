import React, { useState } from 'react'
import { IndicatorChart, IndicatorLineChart } from './IndicatorChart'
import {FaChartLine, FaChartBar, FaTable} from 'react-icons/fa'

const Chart = ({ chart, itemName, table }) => {
  const [ typeChart, setTypeChart ] = useState()
  return (
    <>
      <h2>{itemName}</h2>
      <div onClick={() => setTypeChart(!typeChart)}>
        {typeChart ? <IndicatorLineChart chart={chart} /> : <IndicatorChart chart={chart} /> }
        <button className='btn btn-type'>{typeChart ? <FaChartBar/> : <FaChartLine/>}</button>
      </div>
      {table}
    </>
  )
}

export default Chart