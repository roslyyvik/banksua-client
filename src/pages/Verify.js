import React, { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import styled from 'styled-components'
import { useGlobalContext } from '../context'
import axios from 'axios'
import url from '../utils/url'
function useQuery() {
  return new URLSearchParams(useLocation().search)
}

const VerifyPage = () => {
  const [ loading, setLoading ] = useState(false)
  const [ error, setError ] = useState(false)
  const { isLoading } = useGlobalContext()
  const query = useQuery()

  const verifyToken =async () => {
    setLoading(true)
    try {
      const { data } = await axios.post(`${url}/api/v1/auth/verify-email`, {
        verificationToken: query.get('token'),
        email: query.get('email')
      })
    } catch (error) {
      setError(true)
    }
    setLoading(false)
  }

  useEffect(() => {
    if(!isLoading){
      verifyToken()
    }
    // eslint-disable-next-line
  },[])

  if(loading){
    return (
      <Wrapper className='page'>
        <h2>Loading...</h2>
      </Wrapper>
    )
  }

  if(error) {
    return (
      <Wrapper className='page'>
        <h4>There was an error, please double check your verification link </h4>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <h2>Account Confirmed</h2>
      <Link to='/login' className='btn'>
        Please login
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.section``

export default VerifyPage

