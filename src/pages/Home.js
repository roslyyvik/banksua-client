import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../context'
import BankItem from '../components/BankItem'
// import { useIdFetch } from '../hooks/useIdFetch'

const Home = () => {
  const {banks, loading} = useGlobalContext()
  // const {data, loading} = useIdFetch()
  const [ services, setServices ] = useState([])

  useEffect(() => {
    setServices(banks)
  },[loading, banks])

  if(loading){
    return <p>loading...</p>
  }
  return (
    <section className=''>
      <h2>Banks </h2>
        <div>
          {services.map((bank) => {
              return (
                <BankItem key={bank.mfo} {...bank} />
              )
            })
          }
        </div>
        
    </section>
  )
}

export default Home
