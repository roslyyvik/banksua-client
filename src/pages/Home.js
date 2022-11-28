import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'
import BankItem from '../components/BankItem'
import Loading from '../components/Loading'
import useFilterableData from '../hooks/useFilterableData'
import MyInput from '../ui/input/MyInput'
import MySelect from '../ui/select/MySelect'
import Alert from '../components/Alert'
import {FaAngleDoubleRight} from 'react-icons/fa'

const Home = () => {
  const {banks, loading} = useGlobalContext()
  const [ services, setServices ] = useState([])
  const { search, q, setQ, filterParam, setFilterParam } = useFilterableData()

  useEffect(() => {
    if (loading) return
    setServices(banks)
  },[loading, banks])

  const searchLength = search((banks).map((item) => {
    return item
  }))

  if(loading){
    return <Loading />
  }
  return (
    <main>
      <div className='section-title'>
        <h1>{loading ? <Loading/> : (searchLength.length === 0 ? <Alert /> : `Кількість банківських установ: ${searchLength.length}`)}</h1>
      </div>
      {!loading && (
        <div className='input-section'>
          <MyInput
            type="text"
            placeholder='Введіть назву банка'
            value={q}
            onChange={ e => setQ(e.target.value) }
           />
           <MySelect
             value={filterParam}
             onChange={sortedItems => setFilterParam(sortedItems)}
             options={[
               { value: 'All', name: 'Всі Банки' },
               { value: 'Банки з державною часткою', name: 'Банки з державною часткою' },
               { value: 'Банки з приватним капіталом', name: 'Банки з приватним капіталом' },
               { value: 'Банки іноземних банківських груп', name: 'Банки іноземних банківських груп' }
             ]}
           />
        </div>
        )}
      <section className='followers'>
        <h1>Банки України </h1>
        <div className='container'>
          {search(services).map((bank) => {
              return (
                <>
                  <BankItem key={bank.mfo} {...bank} />
                  <Link to={`/bank/${bank.mfo}`} >
                    <button  className='btn btn-details'>Детальніше  <FaAngleDoubleRight/></button>
                  </Link>
                </>
              )
            })
          }
        </div>        
      </section>
    </main>
    
  )
}

export default Home
