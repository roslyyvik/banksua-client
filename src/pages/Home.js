import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../context'
import BankItem from '../components/BankItem'
import { useIdFetch } from '../hooks/useIdFetch'

const Home = () => {
  const {data, loading} = useGlobalContext()
  // const {data, loading} = useIdFetch()
  const [ banks, setBanks ] = useState([])

  useEffect(() => {
    setBanks(data)
  },[loading, data])

  if(loading){
    return <p>loading...</p>
  }
  return (
    <section className=''>
      <h2>Banks </h2>
      <>
        {banks.map((bank) => {
            return(
              <BankItem key={bank.MFO} {...bank} />
            )
          })
        }
      </>


    </section>
  )
}

export default Home
