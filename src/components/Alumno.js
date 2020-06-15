import React from 'react'

const Alumno = ({alumno}) => {
    return (
        <tr>
            <td>{alumno.codigo}</td>
            <td>{alumno.nombre}</td>
            <td>{alumno.definitiva}</td>
            <td>{alumno.definitiva < 3 ?'Perdió' :'Ganó'}</td>
        </tr>
    )
}

export default Alumno
