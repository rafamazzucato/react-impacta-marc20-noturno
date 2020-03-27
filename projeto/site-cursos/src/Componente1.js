import React from 'react';
import {Lista} from './Lista';
import {Link} from 'react-router-dom';

export class Componente1 extends React.Component {

    state = {
        escola: 'Impacta',
        cursos: ['React', 'MEAN', "Vue"]
    }

    componentDidMount(){
        console.log('Componente 1 foi montado');
        setTimeout(() => this.setState({escola: 'Impacta 2020 teste'}), 3000);
    }

    componentDidUpdate(){
        console.log('Componente 1 foi atualizado');
        setTimeout(() => this.setState({escola: this.state.escola+'1'}), 500);
    }

    componentWillUnmount(){
        console.log('Componente 1 vai ser desmontado');
    }

    render() {
        return (
            <div>
                <h1>Escola: {this.state.escola}</h1>
                <h2>Cursos:</h2>
                <div>
                    {this.state.cursos.map((curso, i) =>
                        <Lista key={i} informacao={curso} />)}
                </div>
                <Link to="/exemplo2">Teste 2</Link>
            </div>
        );
    }
}