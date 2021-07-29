import { FormEvent, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { api } from '../services/api';
import Modal from 'react-modal';

import '../styles/newEmployeeModal.scss';

Modal.setAppElement('#root');

type NewEmployeeModalProps = {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewEmployeeModal({isOpen, onRequestClose} : NewEmployeeModalProps) {
    const [employeePosition, setEmployeePosition] = useState("");
    const [isOnline, setIsOnline] = useState(false);
    const [name, setName] = useState("");
    const [salary, setSalary] = useState(0);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleCreateEmployee(e: FormEvent){
        e.preventDefault();
    
        api.post('funcionarios', {
            username: email,
            password: password,
            nome: name,
            online: isOnline,
            salario: salary,
            cargo: employeePosition
        },
        {
            headers: {
                "Authorization": "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLnp1bWVyLmFwcFwvYXBpXC9lc3RhYmVsZWNpbWVudG9cL2xvZ2luIiwiaWF0IjoxNjA3NjMwMjI4LCJleHAiOjE2MTAyMjIyMjgsIm5iZiI6MTYwNzYzMDIyOCwianRpIjoibjVoVmlSUjhDczlmTzhBOSIsInN1YiI6MiwicHJ2IjoiNmExMjg1NjkxMjkzNjRiNTg4NDlkNTRkMDE5ZWJmYTBmNTJhYjJlMCIsInVzZXJuYW1lIjoiY3J1c2NhdG9AeWFob28uY29tLmJyIn0.akREoGCtNBue3SK2tyTyvfpiTX5hd2EEtirGT43MpeiLls7VabYAwZg6b6d30zjaqlE2PFfza2retZDeJO6aKSoN8lp9Yzjrv6YNogMWjgp6b51ZJyX2JH7UG1kjjRhRYa7rAdn4GGL21BQVghN0x2OCecDjs9De3qXl4XrZBdA",
                "Content-Type": "application/json",  
            }
        }).then(() => {
            setEmployeePosition("");
            setIsOnline(false);
            setName("");
            setSalary(0);
            setEmail("");
            setPassword("");
            alert('Cadastro efetuado com sucesso!');
        }).catch(() => {
            alert('Erro no cadastro')
        })
    }
    

    return(
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <div className="top">
                <button onClick={onRequestClose}>
                    <IoClose />
                </button>
                <h4>Funcionário</h4>
            </div>

            <form onSubmit ={ handleCreateEmployee }>
                <h3>Novo Funcionário</h3>
                <span>Se atente às indicações do formulário &#128512;</span>

                <fieldset>
                    <select value="" onChange={(e) => setEmployeePosition(e.target.value)}>
                        <option value="" disabled hidden>Cargo</option>
                        <option value="Atendente">Atendente</option>
                        <option value="Entregador">Entregador</option>
                        <option value="Caixa">Caixa</option>
                    </select>

                    <p>Atendentes ou entregadores(as) possuirão acesso ao aplicativo de pedidos. 
                        <a href=""> Acesse esse link no celular.</a>
                    </p>
                    
                    <div className="online-status">
                        <label className="toggle">
                            <input type="checkbox" className={isOnline ? 'online' : ''} onClick={() => setIsOnline(!isOnline)}/>
                            <span className="slider"></span>
                        </label>
                        <p>{isOnline ? 'Online' : 'Offline'}</p>
                    </div>

                    <input
                        placeholder="Nome"
                        onChange={(e) => setName(e.target.value)}
                    /> 
                    <input
                         placeholder="Salário"
                         type="number"
                         onChange={(e) => setSalary(Number(e.target.value))}
                    /> 

                    <p>Não se preocupe ao preencher o salário, ele ficará visível no sistema somente com a senha mestre</p>
                </fieldset>

                {
                    employeePosition === "Entregador" || employeePosition === "Atendente" ? 
                    <fieldset>
                        <p>Acesso ao aplicativo</p>
                        <input
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            placeholder="Senha para acessar o app"
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                        />
                    </fieldset>  
                    : <></> 
                }

                <button type="submit" className="submit-button">PRONTO!</button>
            </form>
        </Modal>
    );
}