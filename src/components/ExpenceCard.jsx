import React, { useContext } from 'react'
import { mainContext } from '../context/mainContextAPI'
import Swal from 'sweetalert2'
import UpdateExpence from './UpdateExpence'

const ExpenceCard = ({data, no}) => {
    const {allExpence, setAllExpence} = useContext(mainContext)
    const deleteExpence = () =>{
        const new_expence = allExpence.filter(
            (cur, i)=>cur.id!=data.id)
        setAllExpence(new_expence)
        Swal.fire({
        title: "Success!",
        text: "Expence Deleted",
        icon: "success",
        confirmButtonText: "OK"
})
 
   localStorage.setItem("expence",JSON.stringify(new_expence))

    }


  return (
    <tr>
        <td className="border border-gray-300 py-3 px-3">{no}</td>
        <td className="border border-gray-300 py-3 px-3
        font-semibold">&#8377; {data.price}</td>
        <td className="hidden lg:table-cell border border-gray-300 py-3 px-3
         ">{data.description}</td>
        <td className={`border border-gray-300 py-3 px-3
            text-center`}>
                {data.purpose=='income' && <span className="px-4
                py-1 bg-green-100 rounded-full text-green-600">
                    {'Income'}</span>}
                {data.purpose=='expence' && <span className="px-4
                py-1 bg-red-100 rounded-full text-red-600">
                    {'Expence'}
                </span>} </td>
        <td className="border border-gray-300 py-3 px-3">
            <button onClick={deleteExpence} className="px-3
            py-1 rounded bg-red-500 text-white">Delete</button>
            <UpdateExpence data={data} />
        </td>

    </tr>
  )
}

export default ExpenceCard
