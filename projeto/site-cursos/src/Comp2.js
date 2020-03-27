import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Lista2 } from './Lista2';

export const Componente2 = function () {
    const [escola, setEscola] = useState('Impacta');
    const [cursos] = useState(['React', 'Mean', 'Vue']);

    useEffect(() => {
        setTimeout(() => setEscola(escola+'1'), 500);
        console.log('Componente 2 foi montado');

        return () => console.log('Componente 2 foi desmontado');
    }, [escola]);

    return (
        <div>
            <h1>Escola: {escola}</h1>
            <h2>Cursos:</h2>
            <div>
                {cursos.map((curso, i) =>
                    <Lista2 key={i} informacao={curso} />)}
            </div>
            <Link to="/exemplo1">Teste 1</Link>
        </div>
    );
}