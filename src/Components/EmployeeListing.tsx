import { useEffect } from 'react';
import { EmployeeSection } from './EmployeeSection';

import '../styles/employeeListing.scss';
import { useAppDispatch, useAppSelector } from '../Redux/hooks';
import { getEmployees } from '../Redux/employeeSlice';

export function EmployeeListing() {
    const dispatch = useAppDispatch();
    const { employees } = useAppSelector(state => state.employeeSlice);

    useEffect(() => { 
        dispatch(getEmployees());
    }, [dispatch]);

    return (
        <main>
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
        </main>
    );
}