import React from 'react'

function Formulario({alumno, error, handleChangeFormulario, handleSubmitFormulario}) {

    const {codigo, nombre, parcial, final, seguimiento, definitiva} = alumno

    return (
        <div className="card mt-4">
            <form className="container py-3" onSubmit={handleSubmitFormulario} >
                {error && <div className={error.categoria} role="alert">{error.msg}</div>}
                <div className="form-group mt-2">
                    <label className="font-weight-bold">CODIGO:</label>
                    <input type="number" className="form-control" name="codigo" placeholder="Código del Alumno" value={codigo} onChange={handleChangeFormulario} />
                </div>

                <div className="form-group">
                    <label className="font-weight-bold">ALUMNO:</label>
                    <input type="text" className="form-control" name="nombre" placeholder="Nombre del Alumno" value={nombre} onChange={handleChangeFormulario} />
                </div>

                <div className="row">
                    <div className="col">
                        <div className="form-group">
                            <label className="font-weight-bold">PARCIAL:</label><br/>
                            <input type="number" className="form-control" name="parcial" value={parcial} onChange={handleChangeFormulario} />
                        </div>
                    </div>

                    <div className="col">
                        <div className="form-group">
                            <label className="font-weight-bold">FINAL:</label><br/>
                            <input type="number" className="form-control" name="final" value={final} onChange={handleChangeFormulario} />
                        </div>
                    </div>
                </div>

                <div className="form-group text-center">
                    <label className="font-weight-bold">SEGUIMIENTO:</label><br/>
                    <input type="number" className="form-control text-center w-50" style={{marginLeft:'27%'}}  name="seguimiento" value={seguimiento} onChange={handleChangeFormulario} />
                </div>
                
                <p className="text-dark bg-dark my-4" style={{height:'3px'}}></p>

                <div className="form-group text-center">
                    <label className="font-weight-bold">DEFINITIVA:</label><br/>
                    <input type="number" className="form-control text-center w-50" style={{marginLeft:'27%'}}  name="definitiva" value={definitiva} readOnly />
                </div>
                 
                <div className="text-center">
                    <input type="submit" value="Guardar" className="btn btn-secondary text-center w-25" />
                </div>
                
            </form>
        </div>
    )
}

export default Formulario
