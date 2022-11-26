import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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
                <>
                  <BankItem key={bank.mfo} {...bank} />
                  <Link to={`/bank/${bank.mfo}`} className='btn btn-primary btn-details'>
                    details
                  </Link>
                </>
              )
            })
          }
        </div>
        
    </section>
  )
}

export default Home
