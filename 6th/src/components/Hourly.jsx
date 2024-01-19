import React from 'react'

export default function Hourly({hourly}) {

    return (
        <>
            <div style={{paddingTop:"1rem", fontWeight:"bold"}}>Hourly Data</div>
            <ul className='hourly__list'>
                {hourly.map((e,index) =>
                    <p key={index} className='hourly__list--item'>{(e.main.temp - 273.15).toFixed(2)} &deg;C ({e.dt_txt.slice(11, 13)})</p>
                )}
            </ul>
        
        </>
    )
}
