import React from 'react'
import CoffeeCard from '../CoffeeCard/CoffeeCard'


type Props = {}

const MainPage = (props: Props) => {
  return (
    <div className='flex flex-col gap-10 justify-center items-center min-h-screen p-3 bg-slate-300'>
        <CoffeeCard/>
    </div>
  )
}

export default MainPage