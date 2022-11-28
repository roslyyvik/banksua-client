import React from 'react'
import moneyFormatter from '../utils/format'

const BankItem = ({
  brand,
  mfo, 
  kod, 
  np, 
  adress, 
  postindex, 
  group, 
  assetstotal,
  liabilities,
  capitaltotal,
  profittotal,
}) => {

  return (
    <div className='banks-item-container'>
      <ul>
        <li>Назва: {brand}</li>
        <li>Код ЄДРПОУ: {kod}</li>
        <li>МФО: {mfo}</li>
        <li>Адреса: {np},{adress}, {postindex}</li>
        <li>Банківська група: {group}</li>
      </ul>
        <table>
        <thead>
          <tr>
            <th>Дата</th>
            <th>АКТИВИ</th>
            <th>ЗОБОВ`ЯЗАННЯ</th>
            <th>КАПІТАЛ</th>
            <th>ПРИБУТОК</th>
          </tr>
        </thead>
        <tbody>
        <tr>
            <td data-th="Дата">2021/01</td>
            <td data-th="АКТИВИ">{moneyFormatter(assetstotal[0])}</td>
            <td data-th="ЗОБОВ`ЯЗАННЯ">{moneyFormatter(liabilities[0])}</td>
            <td data-th="КАПІТАЛ">{moneyFormatter(capitaltotal[0])}</td>
            <td data-th="ПРИБУТОК">{moneyFormatter(profittotal[0])}</td>
          </tr>
          <tr>
            <td data-th="Дата">2022/01</td>
            <td data-th="АКТИВИ">{moneyFormatter(assetstotal[1])}</td>
            <td data-th="ЗОБОВ`ЯЗАННЯ">{moneyFormatter(liabilities[1])}</td>
            <td data-th="КАПІТАЛ">{moneyFormatter(capitaltotal[1])}</td>
            <td data-th="ПРИБУТОК">{moneyFormatter(profittotal[1])}</td>
          </tr>
          <tr>
            <td data-th="Дата">2022/07</td>
            <td data-th="АКТИВИ" className={assetstotal[2] <= assetstotal[1] ? 'danger' : 'success'}>{moneyFormatter(assetstotal[2])}</td>
            <td data-th="ЗОБОВ`ЯЗАННЯ" className={liabilities[2] <= liabilities[1] ? 'danger' : 'success'}>{moneyFormatter(liabilities[2])}</td>
            <td data-th="КАПІТАЛ" className={capitaltotal[2] <= capitaltotal[1] ? 'danger' : 'success'}>{moneyFormatter(capitaltotal[2])}</td>
            <td data-th="ПРИБУТОК" className={profittotal[2] <= profittotal[1] ? 'danger' : 'success' }>{moneyFormatter(profittotal[2])}</td>
          </tr>
        </tbody>
        </table>
    </div>
  )
}

export default BankItem