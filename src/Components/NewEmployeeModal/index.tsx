import CloseIcon from '@material-ui/icons/Close';
import Modal from 'react-modal';

import { useAppDispatch, useAppSelector } from '../../Redux/hooks';
import { createNewEmployee } from '../../Redux/employeeSlice';
import { setIsModalOpen } from '../../Redux/modalSlice';

import { useStyles, AntSwitch } from './styles'
import { Button, NativeSelect, TextField, Typography, Link } from '@material-ui/core';

import { useFormik } from 'formik';
import * as yup from 'yup';
import { EmployeeForm } from '../../types/employee';

Modal.setAppElement('#root');

export function NewEmployeeModal() {
    const dispatch = useAppDispatch();
    const { isModalOpen } = useAppSelector(state => state.modalSlice);

    const formValidationSchema = yup.object({
        employeePosition: yup.string().required("Selecione o cargo do funcionário"),
        name: yup.string().required("Digite o nome do funcionário"),
        salary: yup.number().positive("Digite o salário do funcionário").required("Digite o salário do funcionário"),
    });

    const initialValues: EmployeeForm = { 
        online: false,
        employeePosition: "",
        name: "",
        salary: 0,
        email: "",
        password: ""
    };

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: (values) => {
          handleCreateEmployee();
        },
        validationSchema: formValidationSchema
    });

    function handleCreateEmployee(){
        dispatch(createNewEmployee(
            formik.values.email,
            formik.values.password,
            formik.values.name,
            formik.values.online,
            formik.values.salary,
            formik.values.employeePosition
        )).then(() => {
            alert('Cadastro efetuado com sucesso!');
        }).catch(() => {
            alert('Erro no cadastro');
        })
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

            <form onSubmit={formik.handleSubmit}>
                <Typography variant="h3">Novo Funcionário</Typography>
                <Typography variant="body1">Se atente às indicações do formulário &#128512;</Typography>

                    <NativeSelect className={styles.select} 
                                    id="employeePosition" 
                                    value={formik.values.employeePosition} 
                                    onChange={formik.handleChange}
                                    error={formik.touched.employeePosition && Boolean(formik.errors.employeePosition)}
                    >
                        <option value="" disabled hidden>Cargo</option>
                        <option value="Atendente">Atendente</option>
                        <option value="Entregador">Entregador</option>
                        <option value="Caixa">Caixa</option>
                    </NativeSelect>
                    <Typography variant="body2" className={styles.error}>{formik.touched.name && formik.errors.name}</Typography>

                    <Typography variant="body2" className={styles.centralText}>Atendentes ou entregadores(as) possuirão acesso ao aplicativo de pedidos. 
                        <Link href=""> Acesse esse link no celular.</Link>
                    </Typography>
                    
                    <div className={styles.onlineStatus}>
                        <AntSwitch checked={formik.values.online} 
                                    value={formik.values.online} 
                                    onChange={formik.handleChange} 
                                    id="online"/>
                        <Typography variant="body1">{formik.values.online ? 'Online' : 'Offline'}</ Typography>
                    </div>

                    <TextField
                        placeholder="Nome"
                        id="name"
                        value={formik.values.name}
                        className={styles.textFields}
                        onChange={formik.handleChange}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
                    /> 
                    <TextField
                        placeholder="Salário"
                        id="salary"
                        value={formik.values.salary}
                        type="number"
                        className={styles.textFields}
                        onChange={formik.handleChange}
                        error={formik.touched.salary && Boolean(formik.errors.salary)}
                        helperText={formik.touched.salary && formik.errors.salary}
                    /> 

                    <Typography variant="body2" className={styles.centralText}>Não se preocupe ao preencher o salário, ele ficará visível no sistema somente com a senha mestre</Typography>

                {
                    formik.values.employeePosition === "Entregador" || formik.values.employeePosition === "Atendente" ? 
                        <div className={styles.signIn}>
                            <Typography variant="body2" className={styles.centralText}>Acesso ao aplicativo</Typography>
                            <TextField
                                className={styles.textFields}
                                placeholder="Email"
                                id="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                            />
                            <TextField
                                className={styles.textFields}
                                value={formik.values.password}
                                id="password"
                                placeholder="Senha para acessar o app"
                                onChange={formik.handleChange}
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


  