import React, {useContext} from 'react'
import {mainContext} from '../context/mainContextAPI.jsx'
import ExpenceCard from './ExpenceCard'

const ListExpence = () => {
    const{allExpence} = useContext(mainContext)

    return (
        <>
           <div className="w-[96%] lg:w-[80%] mx-auto my-10">
            <table className="w-full border table-auto
                my-10 py-3">
            <tr>
                <th className="border text-zinc-600
                border-gray-300">No</th>
                <th className="border text-zinc-600
                border-gray-300">Price</th>
                <th className="border text-zinc-600
                border-gray-300 hidden lg:table-cell
                border-t-transparent 
                ">Description</th>
                <th className="border text-zinc-600
                border-gray-300">Purpose</th>
                <th className="border text-zinc-600
                border-gray-300">Action</th>
            </tr>
            <tbody>
                {
                    allExpence && allExpence.length > 0 ? <>
                      {
                        allExpence.map((cur, i) =>{
                            return <ExpenceCard data={cur} no={i+1}
                            key={i} />
                        })
                      }
                    </>:<></>
                }
            </tbody>
           </table>
           </div>
        
        </>

    )
}

export default ListExpence