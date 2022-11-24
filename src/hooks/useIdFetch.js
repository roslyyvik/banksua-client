import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const banksUrl = 'https://banksua.herokuapp.com/api/v1/banks'

const indicatorUrl = "https://banksua.herokuapp.com/api/v1/indicators"

export const useIdFetch = () => {
  const { mfo } = useParams()
  const [loading, setLoading] = useState(true)
  const [ data, setData ] = useState([])
  const [ indicators, setIndicators ] = useState([])

  const getBanks = async () => {
    const response = await axios.get(banksUrl)
    setData(response.data)
    setLoading(false)
  }

  const bank = data
      .find(item => item.MFO === mfo)

  const getBank = async (mfo) => {
    const response = await axios.get(`${banksUrl}/${mfo}`)
    setData(response.data)
    setLoading(false)
  }

  const getIndicators = async (mfo) => {
    try {
      const response = await axios.get(`${indicatorUrl}/${mfo}`)
      setIndicators(response.data)
      setLoading(false)
    } catch (e) {
      console.log(e);
    }
  }

  const indicatorsValue = (indicator,level) => {
    const filteredData = indicators
      .filter(elem => elem.mfo == mfo
          && elem.indicator === indicator
          && elem.level === level)

filteredData.forEach((item, index) => {
  item['bg'] = '#f3ba2f'
if(index > 0){
  item['bg'] = '#50AF95'
}
if(index > 1){
  item['bg'] = '#2a71d0'
}
if(index > 2){
  item['bg'] = '#ff1a1a'
}
if(index > 3){
  item['bg'] = '#ff99ff'
}
if(index > 4){
  item['bg'] = '#ff9900'
}
if(index > 5){
  item['bg'] = '#ff9900'
}
})
return filteredData
}

  useEffect(()=>{
    getBanks()
    getBank()
    getIndicators()
    indicatorsValue()
  },[])
  return {loading, data, indicatorsValue, indicators, bank}
}