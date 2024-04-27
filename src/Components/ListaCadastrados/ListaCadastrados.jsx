import './ListaCadastrados.css';

function ListaCadastrados() {

    const users = [
        { nome: 'lfreds', sobrenome: 'Futterkiste', email: 'paulo@gmail.com', telefone: 1914586997458 },
        { nome: 'jsmith', sobrenome: 'Johnson', email: 'jsmith@example.com', telefone: 1234567890 },
        { nome: 'mgonzalez', sobrenome: 'Gonzalez', email: 'mgonzalez@example.com', telefone: 9876543210 },
        { nome: 'skumar', sobrenome: 'Kumar', email: 'skumar@example.com', telefone: 9192939495 }
    ];

    return(

        <div>
            <div className='content'>
                <div className='lista'>
                    <table id='customer'>
                        <thead>
                            <tr>
                                <th>Primeiro Nome</th>
                                <th>Sobrenome</th>
                                <th>Email</th>
                                <th>Telefone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.nome}</td>
                                    <td>{user.sobrenome}</td>
                                    <td>{user.email}</td>
                                    <td>{user.telefone}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ListaCadastrados