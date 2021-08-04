import { FormEvent, useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import Modal from 'react-modal';

import { useAppDispatch, useAppSelector } from '../Redux/hooks';
import { createNewEmployee } from '../Redux/employeeSlice';
import { setIsModalOpen } from '../Redux/modalSlice';

import { Button, NativeSelect, makeStyles, TextField, Typography, Link, createStyles, Switch } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

Modal.setAppElement('#root');

export function NewEmployeeModal() {
    const dispatch = useAppDispatch();
    const { isModalOpen } = useAppSelector(state => state.modalSlice);

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

const useStyles = makeStyles(() => ({ 
    reactModalOverlay: {
        background: 'rgba(0,0,0,0.1)',  
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    reactModalContent: {
        width:'30%',
        height: '100%',
        maxWidth: 576,
        background: '#f4f4f4',
        padding: 25,
        position: 'fixed',
        top: 0,
        right: 0,
    },
    top: {
        display: 'flex',
        gap: 10,
        marginBottom: 20,
    },
    close: {
        cursor: 'pointer',
    },
    submitButton: {
      width: '100%',
      padding: 8,
      marginTop: 18,
    },
    textFields: {
        background: '#e7e7e7',
        width: '100%',
        padding: 8,
        marginTop: 18,
        borderRadius: 5,
    },
    select: {
        background: '#e7e7e7',
        width: '100%',
        padding: 8,
        marginTop: 18,
        borderRadius: 5,
    },
    centralText: {
        marginTop: 5,
        textAlign: 'center',
    },
    onlineStatus: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        marginTop: 18,
    },
    signIn: {
        marginTop: 25,
    }, 
}));

const AntSwitch = withStyles(() =>
  createStyles({
    root: {
      width: 47,
      height: 23,
      padding: 0,
      display: 'flex',
    },
    switchBase: {
      padding: 3,
      color: '#FFF',
      '&$checked': {
        transform: 'translateX(22px)',
        color: '#FFF',
        '& + $track': {
          opacity: 1,
          backgroundColor: '#22ec15',
          borderColor: '#22ec15',
        },
      },
    },
    thumb: {
      width: 18,
      height: 18,
    },
    track: {
      border: `1px solid #fb2a3c`,
      borderRadius: 60,
      opacity: 1,
      backgroundColor: '#fb2a3c',
    },
    checked: {},
  }),
)(Switch);
  