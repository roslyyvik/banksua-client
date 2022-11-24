import axios from 'axios';
import React, {useContext, useState, useEffect } from 'react';
const AppContext = React.createContext();
// const rootUrl = 'http://localhost:5000'

const AppProvider = ({children}) => {

  // const { mfo } = useParams()
  const [loading, setLoading] = useState(true)
  const [ data, setData ] = useState([])
  const [ bank, setBank ] = useState()
  const [ indicators, setIndicators ] = useState([])

  const getBanks = async () => {
    setLoading(true)
    try {
      const response = await axios('https://banksua.herokuapp.com/api/v1/banks')
      const data = response.data
      setData(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  const getBank = async (MFO) => {
    setLoading(true)
    try {
      const response = await axios.get(`https://banksua.herokuapp.com/api/v1/banks/${MFO}`)
      setBank(response.data)
      setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  }

  const getIndicators = async () => {
    setLoading(true)
    try {
      const response = await axios.get('https://banksua.herokuapp.com/api/v1/indicators')
      setIndicators(response.data)
      setLoading(false)
    } catch (e) {
      console.log(e);
      setLoading(false)
    }
  }

  useEffect(()=>{
    getBanks()
    getIndicators()
  },[])

  return (
    <AppContext.Provider
      value={{
        loading,
        data,
        bank,
        indicators
      }}
    >
      { children }
    </AppContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export {AppContext, AppProvider }
