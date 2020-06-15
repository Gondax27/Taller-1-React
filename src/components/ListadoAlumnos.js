import React from 'react'
import Alumno from './Alumno'

const ListadoAlumnos = ({alumnos, filtro, buscador}) => {
    return (
        <div className="card mt-4" style={{height:'416px'}}>
            <div className="card-header">
                <h3 className="text-center">LISTADO</h3>
            </div>
            <div className="card-body">
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col" className="font-weight-bold">Código</th>
                            <th scope="col" className="font-weight-bold">Alumno</th>
                            <th scope="col" className="font-weight-bold">Nota</th>
                            <th scope="col" className="font-weight-bold">Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtro === 'Perdió' &&
                            <>
                                {buscador !== ''
                                    ?(
                                        <>
                                            {alumnos.filter( alumno => alumno.estado === 'Perdió' && alumno.codigo === buscador).map( alumno => (
                                                <Alumno 
                                                    key={alumno.codigo}
                                                    alumno={alumno}
                                                />
                                            ))}
                                        </>

                                    )

                                    :(
                                        <>
                                            {alumnos.filter( alumno => alumno.estado === 'Perdió' ).map( alumno => (
                                                <Alumno 
                                                    key={alumno.codigo}
                                                    alumno={alumno}
                                                />
                                            ))}
                                        </>
                                    )
                                }
                            </>   
                        }

                        {filtro === 'Ganó' &&
                            <>
                                {buscador !== ''
                                    ?(
                                        <>
                                            {alumnos.filter( alumno => alumno.estado === 'Ganó' && alumno.codigo === buscador).map( alumno => (
                                                <Alumno 
                                                    key={alumno.codigo}
                                                    alumno={alumno}
                                                />
                                            ))}
                                        </>

                                    )

                                    :(
                                        <>
                                            {alumnos.filter( alumno => alumno.estado === 'Ganó' ).map( alumno => (
                                                <Alumno 
                                                    key={alumno.codigo}
                                                    alumno={alumno}
                                                />
                                            ))}
                                        </>
                                    )
                                }
                            </>   
                        }

                        {filtro === '' &&
                            <>
                                {buscador !== ''
                                    ?(
                                        <>
                                            {alumnos.filter( alumno => alumno.codigo === buscador).map( alumno => (
                                                <Alumno 
                                                    key={alumno.codigo}
                                                    alumno={alumno}
                                                />
                                            ))}
                                        </>

                                    )

                                    :(
                                        <>
                                            {alumnos.map( alumno => (
                                                <Alumno 
                                                    key={alumno.codigo}
                                                    alumno={alumno}
                                                />
                                            ))}
                                        </>
                                    )
                                }
                            </>   
                        }
                    </tbody>
                </table>
            </div> 
        </div>
    )
}

export default ListadoAlumnos
