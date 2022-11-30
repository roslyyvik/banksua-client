import axios from 'axios';
import React, {useContext, useState, useEffect, useCallback } from 'react';
const AppContext = React.createContext();
const rootUrl = 'https://banksua-api.onrender.com'

const AppProvider = ({children}) => {

  const [loading, setLoading] = useState(true)
  const [ banks, setBanks ] = useState([])

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
            assetstotal,
            liabilities,
            capitaltotal,
            profittotal,
          } = item
          return {
            mfo: MFO,
            brand: SHORTNAME,
            kod: KOD_EDRPOU,
            group,
            np: NP,
            adress: ADRESS,
            postindex: P_IND,
            assetstotal,
            liabilities,
            capitaltotal,
            profittotal,
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

  useEffect(()=>{
    getBanks()
  },[getBanks])

  return (
    <AppContext.Provider
      value={{
        loading,
        banks,
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
