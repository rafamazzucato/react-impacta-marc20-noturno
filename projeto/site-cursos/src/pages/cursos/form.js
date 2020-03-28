import React from 'react';

export class CursoForm extends React.Component {

    state = {
        codigo: 0,
        descricao: '',
        cargaHoraria: 0,
        preco: 0,
        categoria : 'INFORMATICA'
    }

    setCodigo(e){
        this.setState({codigo : e.target.value});
    }

    setDescricao(e){
        this.setState({descricao : e.target.value});
    }

    setCargaHoraria(e){
        this.setState({cargaHoraria : e.target.value});
    }

    setPreco(e){
        this.setState({preco : e.target.value});
    }

    setCategoria(e){
        this.setState({categoria : e.target.value});
    }

    render() {
        return (
            <div className="border-right pl-3 pr-3">
                <h3 className="border-bottom">Formulário</h3>
                <form>
                    <div className="form-group row">
                        <label htmlFor="codigo"
                            className="col-sm-3 col-form-label">
                            Código:
                        </label>
                        <div className="col-sm-9">
                            <input type="number"
                                className="form-control" id="codigo"
                                value={this.state.codigo}
                                onChange={this.setCodigo.bind(this)} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="descrição"
                            className="col-sm-3 col-form-label">
                            Descrição:
                 </label>
                        <div className="col-sm-9">
                            <input type="text"
                                className="form-control" id="descricao"
                                value={this.state.descricao}
                                onChange={this.setDescricao.bind(this)} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="cargaHoraria"
                            className="col-sm-3 col-form-label">
                            Carga Horária:</label>
                        <div className="col-sm-9">
                            <input type="number"
                                className="form-control" id="cargaHoraria" 
                                value={this.state.cargaHoraria}
                                onChange={this.setCargaHoraria.bind(this)}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="preco"
                            className="col-sm-3 col-form-label">
                            Preço:</label>
                        <div className="col-sm-9">
                            <input type="text"
                                className="form-control" id="preco"
                                value={this.state.preco} 
                                onChange={this.setPreco.bind(this)}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="categoria"
                            className="col-sm-3 col-form-label">Categoria:</label>
                        <div className="col-sm-9">
                            <select className="form-control" id="categoria" 
                                value={this.state.categoria}
                                onChange={this.setCategoria.bind(this)}>
                                <option>INFORMATICA</option>
                                <option>ENGENHARIA</option>
                                <option>ADMINISTRACAO</option>
                                <option>REDES</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <button
                            className="btn btn-primary ml-3 mb-3">
                            Adicionar
                    </button>
                    </div>
                </form>
            </div>
        );
    }
}