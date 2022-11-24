import React from 'react'

const BankItem = (props) => {

  return (
    <div>
      <ul>
        <li>Назва: {props.SHORTNAME}</li>
        <li>Код ЄДРПОУ: {props.KOD_EDRPOU}</li>
        <li>МФО: {props.MFO}</li>
        <li>Адреса: {props.NP},{props.ADRESS}, {props.P_IND}</li>
        <li>Банківська група: {props.group}</li>
      </ul>
    </div>
  )
}

export default BankItem