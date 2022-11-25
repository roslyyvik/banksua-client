import axios from 'axios';
import React, {useContext, useState, useEffect, useCallback } from 'react';
const AppContext = React.createContext();
const rootUrl = 'https://banksua-api.onrender.com'

const AppProvider = ({children}) => {

  // const { mfo } = useParams()
  const [loading, setLoading] = useState(true)
  const [ banks, setBanks ] = useState([])
  const [ bank, setBank ] = useState()
  const [ indicators, setIndicators ] = useState([])

  // const getBanks = async () => {
  //   setLoading(true)
  //   try {
  //     const response = await axios('https://banksua-api.onrender.com/api/v1/banks')
  //     const data = response.data
  //     setData(data)
  //     setLoading(false)
  //   } catch (error) {
  //     console.log(error)
  //     setLoading(false)
  //   }
  // }

  const getBanks = useCallback( async () => {
    setLoading(true)
    try {
      const response = await axios(`${rootUrl}/api/v1/banks`)
      const { banks } = response.data
      if(banks){
        const newBanks = banks.map((item) => {
          const {
            MFO,
            SHORTNAME,
            KOD_EDRPOU,
            group,
            NP,
            ADRESS,
            P_IND,
          } = item
          return {
            mfo: MFO,
            brand: SHORTNAME,
            kod: KOD_EDRPOU,
            group,
            np: NP,
            adress: ADRESS,
            postindex: P_IND
          }
        })
        setBanks(newBanks)
      } else {
        setBanks([])
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  },[])

  // const getBank = async (MFO) => {
  //   setLoading(true)
  //   try {
  //     const response = await axios.get(`https://banksua-api.onrender.com/api/v1/banks/${MFO}`)
  //     setBank(response.data)
  //     setLoading(false)
  //   } catch (error) {
  //     console.log(error);
  //     setLoading(false)
  //   }
  // }

  const getIndicators = async () => {
    setLoading(true)
    try {
      const response = await axios.get(`${rootUrl}/api/v1/indicators`)
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
  },[getBanks])

  return (
    <AppContext.Provider
      value={{
        loading,
        banks,
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
