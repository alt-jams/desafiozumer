import { FormEvent, useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import Modal from 'react-modal';
import { EmployeeForm } from '../../types/employee';

import { useAppDispatch, useAppSelector } from '../../Redux/hooks';
import { createNewEmployee } from '../../Redux/employeeSlice';
import { setIsModalOpen } from '../../Redux/modalSlice';

import { useStyles, AntSwitch } from './styles'
import { Button, NativeSelect, TextField, Typography, Link } from '@material-ui/core';

import { useFormik } from 'formik';
import * as yup from 'yup';

Modal.setAppElement('#root');

export function NewEmployeeModal() {
    const dispatch = useAppDispatch();
    const { isModalOpen } = useAppSelector(state => state.modalSlice);

    const initialValues: EmployeeForm = { 
        online: false,
        employeePosition: "",
        name: "",
        salary: 0,
        email: "",
        password: "" 
    };

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

    const styles = useStyles()

    return(
        <Modal 
            isOpen={isModalOpen}
            onRequestClose={() => dispatch(setIsModalOpen(false))}
            overlayClassName={styles.reactModalOverlay}
            className={styles.reactModalContent}
        >
            <div className={styles.top}>
                <CloseIcon color="primary" className={styles.close} onClick={() => dispatch(setIsModalOpen(false))}/>
                <Typography variant="h4">Funcionário</Typography>
            </div>

            <form onSubmit ={ handleCreateEmployee }>
                <Typography variant="h3">Novo Funcionário</Typography>
                <Typography variant="body1">Se atente às indicações do formulário &#128512;</Typography>

                    <NativeSelect className={styles.select} id="select" value={employeePosition} onChange={(e) => setEmployeePosition(e.target.value)}>
                        <option value="" disabled hidden>Cargo</option>
                        <option value="Atendente">Atendente</option>
                        <option value="Entregador">Entregador</option>
                        <option value="Caixa">Caixa</option>
                    </NativeSelect>

                    <Typography variant="body2" className={styles.centralText}>Atendentes ou entregadores(as) possuirão acesso ao aplicativo de pedidos. 
                        <Link href=""> Acesse esse link no celular.</Link>
                    </Typography>
                    
                    <div className={styles.onlineStatus}>
                        <AntSwitch checked={isOnline} onChange={() => setIsOnline(!isOnline)} />
                        <Typography variant="body1">{isOnline ? 'Online' : 'Offline'}</ Typography>
                    </div>

                    <TextField
                        placeholder="Nome"
                        value={name}
                        className={styles.textFields}
                        onChange={(e) => setName(e.target.value)}
                    /> 
                    <TextField
                        placeholder="Salário"
                        value={salary}
                        type="number"
                        className={styles.textFields}
                        onChange={(e) => setSalary(Number(e.target.value))}
                    /> 

                    <Typography variant="body2" className={styles.centralText}>Não se preocupe ao preencher o salário, ele ficará visível no sistema somente com a senha mestre</Typography>

                {
                    employeePosition === "Entregador" || employeePosition === "Atendente" ? 
                        <div className={styles.signIn}>
                            <Typography variant="body2" className={styles.centralText}>Acesso ao aplicativo</Typography>
                            <TextField
                                className={styles.textFields}
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <TextField
                                className={styles.textFields}
                                value={password}
                                placeholder="Senha para acessar o app"
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                            />
                        </div> 
                    : ''
                }
                <Button className={styles.submitButton}
                        variant="contained" 
                        color="primary" 
                        disableElevation
                        type="submit">
                        PRONTO!
                </Button>  
            </form>
        </Modal>
    );
}


  