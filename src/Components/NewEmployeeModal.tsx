import { FormEvent, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import Modal from 'react-modal';

import { useAppDispatch } from '../Redux/hooks';
import { createNewEmployee } from '../Redux/employeeSlice';

import '../styles/newEmployeeModal.scss';

Modal.setAppElement('#root');

type NewEmployeeModalProps = {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewEmployeeModal({isOpen, onRequestClose} : NewEmployeeModalProps) {
    const dispatch = useAppDispatch();

    const [employeePosition, setEmployeePosition] = useState("");
    const [isOnline, setIsOnline] = useState(false);
    const [name, setName] = useState("");
    const [salary, setSalary] = useState(0);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleCreateEmployee(e: FormEvent){
        e.preventDefault();

        if (employeePosition === "" || name.trim() === ""  || salary === 0) {
            alert('Digite todos os dados para cadastrar o funcionário');
        } 
        
        else {
            dispatch(createNewEmployee(
                email,
                password,
                name,
                isOnline,
                salary,
                employeePosition
            )).then(() => {
                setEmployeePosition("");
                setIsOnline(false);
                setName("");
                setSalary(0);
                setEmail("");
                setPassword("");
                alert('Cadastro efetuado com sucesso!');
            }).catch(() => {
                alert('Erro no cadastro');
            })
        }
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