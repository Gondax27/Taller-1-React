import React, { Component } from 'react'
import Header from './Header'
import Formulario from './Formulario'
import Buscador from './Buscador'
import ListadoAlumno from './ListadoAlumnos'

export default class Main extends Component {

    state = {
        alumno: {
            codigo: '',
            nombre: '',
            parcial: '',
            final: '',
            seguimiento: '',
            definitiva: '',
            estado: ''
        },
        alumnos: [],
        filtro: '',
        buscador: '',
        error: null
    }

    handleChangeFormulario = e =>{
        this.setState({alumno:{...this.state.alumno, [e.target.name]: e.target.value}})
    }

    handleSubmitFormulario = e =>{
        e.preventDefault();

        if(this.state.alumno.codigo.trim() === '' && this.state.alumno.nombre.trim() === '' && this.state.alumno.parcial <= 0 && this.state.alumno.final <= 0 && this.state.alumno.seguimiento <= 0){
            this.setState({error:{msg:'Todos los campos son obligatorios', categoria:'alert alert-danger text-center font-weight-bold'}});
            setTimeout(() => {
                this.setState({error: null});
            }, 3000);
            return;
        }

        if(this.state.alumno.codigo.trim() === ''){
            this.setState({error:{msg:'El código del Alumno es obligatorio', categoria:'alert alert-danger text-center font-weight-bold'}});
            setTimeout(() => {
                this.setState({error: null});
            }, 3000);
            return;
        }

        if(this.state.alumno.nombre.trim() === ''){
            this.setState({error:{msg:'El nombre del Alumno es obligatorio', categoria:'alert alert-danger text-center font-weight-bold'}});
            setTimeout(() => {
                this.setState({error: null});
            }, 3000);
            return;
        }

        if (this.state.alumno.parcial < 0 || this.state.alumno.parcial > 5) {
            this.setState({error:{msg:'El parcial debe ser un número entre 0 y 5', categoria:'alert alert-danger text-center font-weight-bold'}});
            setTimeout(() => {
                this.setState({error: null});
            }, 3000);
            return;
        }

        if (this.state.alumno.final < 0 || this.state.alumno.final > 5) {
            this.setState({error:{msg:'El final debe ser un número entre 0 y 5', categoria:'alert alert-danger text-center font-weight-bold'}});
            setTimeout(() => {
                this.setState({error: null});
            }, 3000);
            return;
        }

        if (this.state.alumno.seguimiento < 0 || this.state.alumno.seguimiento > 5) {
            this.setState({error:{msg:'El seguimiento debe ser un número entre 0 y 5', categoria:'alert alert-danger text-center font-weight-bold'}});
            setTimeout(() => {
                this.setState({error: null});
            }, 3000);
            return;
        }

        if(this.state.alumnos.filter( alumno => alumno.codigo ===  this.state.alumno.codigo )[0]){
            this.setState({error:{msg:'El estudiante digitado ya existe', categoria:'alert alert-danger text-center font-weight-bold'}});
            setTimeout(() => {
                this.setState({error: null});
            }, 3000);
            return;
        }

        else{
            let definitiva = (this.state.alumno.parcial * 0.25) + (this.state.alumno.final * 0.25) + ((this.state.alumno.seguimiento * 0.5));
            let estado = definitiva < 3 ?'Perdió' :'Ganó'
            this.setState({alumno: {...this.state.alumno, definitiva, estado} });

            setTimeout(() => {
                this.setState({alumnos: [...this.state.alumnos, this.state.alumno] });
            }, 500);

            setTimeout(() => {
                this.setState({alumno: {
                    codigo: '',
                    nombre: '',
                    parcial: '',
                    final: '',
                    seguimiento: '',
                    definitiva: ''
                }}); 
            }, 500);
            
        }
    }

    handleChangeFiltro = e =>{
        this.setState({filtro: e.target.value})
    }

    handleChangeBuscador = e =>{
        this.setState({buscador: e.target.value})
    }

    render() {
        return (
            <div>
                <div className="container">
                   <Header />
                   <div className="row">
                       <div className="col">
                            <Formulario 
                                alumno={this.state.alumno}
                                handleChangeFormulario={this.handleChangeFormulario}
                                handleSubmitFormulario={this.handleSubmitFormulario}
                                error={this.state.error}
                            />
                       </div>

                       <div className="col">
                            <Buscador 
                                filtro={this.state.filtro}
                                handleChangeFiltro={this.handleChangeFiltro}
                                handleChangeBuscador={this.handleChangeBuscador}
                            />
                            <ListadoAlumno 
                                alumnos={this.state.alumnos}
                                filtro={this.state.filtro}
                                buscador={this.state.buscador}
                            />
                       </div>
                   
                   </div>
                </div>
            </div>
        )
    }
}

