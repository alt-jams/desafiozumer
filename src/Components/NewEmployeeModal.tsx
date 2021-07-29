import { useState } from 'react';
import Modal from 'react-modal';
import '../styles/newEmployeeModal.scss';

type NewEmployeeModalProps = {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewEmployeeModal({isOpen, onRequestClose} : NewEmployeeModalProps) {
    const [cargo, setCargo] = useState("");
    const [isOnline, setIsOnline] = useState(false);
    const [nome, setNome] = useState("");
    const [salario, setSalario] = useState(0);
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    return(
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <div className="top">
                <button onClick={onRequestClose}>X</button>
                <h4>Funcionário</h4>
            </div>

            <form>
                <h3>Novo Funcionário</h3>
                <span>Se atente às indicações do formulário &#128512;</span>

                <fieldset>
                    <select value="" onChange={(e) => setCargo(e.target.value)}>
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
                        <p>Online</p>
                    </div>

                    <input
                        placeholder="Nome"
                        onChange={(e) => setNome(e.target.value)}
                    /> 
                    <input
                         placeholder="Salário"
                         type="number"
                         onChange={(e) => setSalario(Number(e.target.value))}
                    /> 

                    <p>Não se preocupe ao preencher o salário, ele ficará visível no sistema somente com a senha mestre</p>
                </fieldset>

                {
                    cargo === "Entregador" || cargo === "Atendente" ? 
                    <fieldset>
                        <p>Acesso ao aplicativo</p>
                        <input
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            placeholder="Senha para acessar o app"
                            onChange={(e) => setSenha(e.target.value)}
                            type="password"
                        />
                    </fieldset>  
                    : <></> 
                }

                <button type="submit" className="submit-button">Pronto</button>

            </form>
        </Modal>
    );
}