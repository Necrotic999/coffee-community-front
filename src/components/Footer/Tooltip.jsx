import React from 'react'

const Tooltip = ({workingHours}) => {
  return (
    <ul className='absolute py-5 px-8 w-[250px] rounded-[15px] bg-[#611B1B] -top-[100px]'>
        {workingHours.map(({day, hours}, idx) => {
            return <li key={idx} className='text-white flex justify-between items-center text-[14px]'>
                <p>{day}</p>
                <p>{hours}</p>
            </li>
        })}
    </ul>
  )
}

export default Tooltip