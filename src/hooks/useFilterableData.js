import { useState, useCallback } from 'react'

const useFilterableData = () => {
const [q, setQ] = useState("");
const [ searchParam ] = useState(['group','SHORTNAME','MFO'])
const [ filterParam, setFilterParam ] = useState('All')

const search = useCallback(
  elems => {
    return elems.filter(elem => {
      if(elem.group === filterParam || filterParam === "All"){
        return searchParam.some(newElem => {
          return (
            elem[newElem]
            .toString()
            .toLowerCase()
            .indexOf(q.toLowerCase()) > -1
            // .includes(q.toLowerCase())
          )
        })
      }
      return ''
    })
  }, [filterParam, q, searchParam]
)
  return { search, q, setQ, filterParam, setFilterParam, searchParam }
}

export default useFilterableData