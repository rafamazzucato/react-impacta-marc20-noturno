import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    setData,
    setNome,
    setEmail,
    setAssunto,
    limparForm,
    adicionar
} from '../../actions/contato';

const ContatoForm = props => {
    const {
        data, setData,
        nome, setNome,
        email, setEmail,
        assunto, setAssunto,
        msgErro, msgSucesso,
        limparForm, adicionar
    } = props;

    useEffect(() => {
        limparForm();
    }, [limparForm])

    return (
        <div>
            <h3 className="border-bottom">Formulário</h3>

            { msgSucesso ? 
                <div className="alert alert-success" role="alert">
                    <strong>Parabéns</strong> {msgSucesso}
                </div>
            : null
            }

            { msgErro ? 
                <div className="alert alert-danger" role="alert">
                    <strong>Ops!</strong> {msgErro}
                </div>
            : null
            }
            
            <form>
                <div className="form-group row">
                    <label htmlFor="data"
                        className="col-sm-3 col-form-label">Data:</label>
                    <div className="col-sm-5 col-6">
                        <input type="date"
                            className="form-control" id="data"
                            value={data}
                            onChange={setData} />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="nome"
                        className="col-sm-3 col-form-label">Nome:</label>
                    <div className="col-sm-9">
                        <input type="text"
                            className="form-control" id="nome"
                            value={nome}
                            onChange={setNome} />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="email"
                        className="col-sm-3 col-form-label">Email:</label>
                    <div className="col-sm-9">
                        <input type="email"
                            className="form-control" id="email"
                            value={email}
                            onChange={setEmail} />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="assunto"
                        className="col-sm-3 col-form-label">Assunto:</label>
                    <div className="col-sm-9">
                        <textarea className="form-control"
                            id="assunto" rows="5"
                            value={assunto}
                            onChange={setAssunto} />
                    </div>
                </div>
                <div className="form-group row">
                    <button className="btn btn-primary ml-3 mb-3"
                        onClick={e => adicionar(e, data, nome, email, assunto)}>
                        Adicionar
                    </button>
                    <button className="btn btn-secondary ml-3 mb-3"
                        onClick={limparForm}>
                        Limpar
                    </button>
                </div>
            </form>
        </div>
    );
}

const mapStoreToProps = store => ({
    data: store.contato.data,
    nome: store.contato.nome,
    email: store.contato.email,
    assunto: store.contato.assunto,
    msgSucesso : store.contato.msgSucesso,
    msgErro : store.contato.msgErro
})

const mapActionsToProps = dispatch => bindActionCreators({
    setData,
    setNome,
    setEmail,
    setAssunto,
    limparForm,
    adicionar
}, dispatch);

const conectado = connect(mapStoreToProps, mapActionsToProps)(ContatoForm);

export { conectado as ContatoForm }