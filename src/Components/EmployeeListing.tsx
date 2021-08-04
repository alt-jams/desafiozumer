import { useEffect } from 'react';
import { EmployeeSection } from './EmployeeSection';

import { useAppDispatch, useAppSelector } from '../Redux/hooks';
import { getEmployees } from '../Redux/employeeSlice';
import { Box, makeStyles } from '@material-ui/core';

export function EmployeeListing() {
    const styles = useStyles();
    const dispatch = useAppDispatch();
    const { employees } = useAppSelector(state => state.employeeSlice);

    useEffect(() => { 
        dispatch(getEmployees());
    }, [dispatch]);

    return (
        <Box className={styles.main}>
            { employees.map(employee => {
                return (
                    <EmployeeSection 
                        key={employee.idFuncionario}
                        id={employee.idFuncionario}
                        name={employee.nome}
                        position={employee.cargo}
                        isOnline={employee.online}
                    />
                );
            })}        
        </Box>
    );
}

const useStyles = makeStyles(() => ({ 
    main: {
        marginTop: 80,
    }
}))