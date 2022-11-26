import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom'
import Loading from '../components/Loading'

const rootUrl = 'https://banksua-api.onrender.com'

const BankPage = () => {
  const { mfo } = useParams()
  const [ loading, setLoading ] = useState(false)
  const [ singleBank, setSingleBank ] = useState(null)

  useEffect(() => {
    setLoading(true)
    async function getSingleBank() {
      try {
        const response = await axios(`${rootUrl}/api/v1/banks/${mfo}`)
        const {bank} = response.data        
        if(bank){
          const {
            MFO: mfo,
            SHORTNAME: brand,
            KOD_EDRPOU: kod,
            group,
            NP: np,
            ADRESS: adress,
            P_IND:postindex
          } = bank
          const newSingleBank = {
            mfo,
            brand,
            kod,
            group,
            np,
            adress,
            postindex
          }
          setSingleBank(newSingleBank)
        }else {
          setSingleBank(null)
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false)
    }
    getSingleBank()
  },[mfo])

  if(loading){
    return <Loading/>
  }

  if(!singleBank){
    return <h2>no bank to display</h2>
  }
  else {
    const {
      mfo,
      brand,
      kod,
      group,
      np,
      adress,
      postindex
    } = singleBank
    return (
      <section>
        <Link to='/'>back home</Link>
        <h2>Bank: {brand}</h2>
        <div>
          <p>MFO: {mfo}</p>
          <p>EDRPOU: {kod}</p>
          <p>GROUP: {group}</p>
          <p>ADRESS: {postindex}, {np}, {adress}  </p>
        </div>
      </section>
    )
  }
}

export default BankPage