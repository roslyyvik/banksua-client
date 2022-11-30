import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom'
import Loading from '../components/Loading'
import AssetsItem from '../components/AssetsItem';
import CapitalItem from '../components/CapitalItem';
import LiabilitiesItem from '../components/LiabilitiesItem';
import ProfitItem from '../components/ProfitItem';
import {FaAngleDoubleLeft} from 'react-icons/fa'

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
      <main>
        <Link to='/'>
        <button  className='btn btn-details'><FaAngleDoubleLeft/> back home</button>
        </Link>
        <h2>Установа: {brand}</h2>
        <ul className='single-bank-container'>
          <li>МФО: {mfo}</li>
          <pli>КОД ЕДРПОУ: {kod}</pli>
          <li>БАНКІВСЬКА ГРУПА: {group}</li>
          <li>АДРЕСА: {postindex}, {np}, {adress}  </li>
          <div>
            <AssetsItem />
            <LiabilitiesItem />
            <CapitalItem />
            <ProfitItem />
          </div>
        </ul>
      </main>
    )
  }
}

export default BankPage