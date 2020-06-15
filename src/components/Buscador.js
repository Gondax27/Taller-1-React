import React from 'react'

export default function Buscador({filtro, handleChangeFiltro, handleChangeBuscador}) {

    return (
        <div className="card mt-4">
            <form className="container py-2">
                <input  type="number" className="form-control mt-2" placeholder="Documento" onChange={handleChangeBuscador} />
                
                <div className="mt-2 text-center">
                    <label className="mr-5">
                        <input className="mr-1" type="radio" name="filtro" 
                            value="Ganó" 
                            checked={filtro === 'Ganó' && true} 
                            onChange={handleChangeFiltro}
                        />Ganaron
                    </label>

                    <label className="mr-5">
                        <input className="mr-1" type="radio" name="filtro" 
                            value="Perdió" 
                            checked={filtro === 'Perdió' && true} 
                            onChange={handleChangeFiltro}
                        />Perdieron
                    </label>

                    <label className="mr-5">
                        <input className="mr-1" type="radio" name="filtro" 
                            value="" 
                            checked={filtro === '' && true} 
                            onChange={handleChangeFiltro}
                        />Todos
                    </label>
                </div>
                
            </form>
        </div>
        
    )
}
