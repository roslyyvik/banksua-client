import React from 'react'

const BankItem = (props) => {

  return (
    <div>
      <ul>
        <li>Назва: {props.brand}</li>
        <li>Код ЄДРПОУ: {props.kod}</li>
        <li>МФО: {props.mfo}</li>
        <li>Адреса: {props.np},{props.adress}, {props.postindex}</li>
        <li>Банківська група: {props.group}</li>
      </ul>
    </div>
  )
}

export default BankItem