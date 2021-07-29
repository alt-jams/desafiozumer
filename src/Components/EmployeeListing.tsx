import { useEffect, useState } from 'react';
import { api } from '../services/api';
import '../styles/employeeListing.scss';
import { EmployeeSection } from './EmployeeSection';

type Employee = {
    id: number;
    nome: string;
    cargo: string;
    online: boolean;
}

export function EmployeeListing() {
    const [employees, setEmployees] = useState <Employee[]>([]);

    function setOnlineStatus(id: number) {
        //update funcionário -> isonline = !isOnline;
    }

    useEffect(() => {
        api.get<Employee[]>('funcionarios').then(response => setEmployees(response.data));
    }, []);

    return (
        <main>
            { employees.map(employee => {
                return (
                    <EmployeeSection 
                        key={ employee.id }
                        id={employee.id}
                        name={employee.nome}
                        cargo={employee.cargo}
                        isOnline={employee.online}
                        setOnlineStatus={setOnlineStatus}
                    />
                );
            })}        
        </main>
    );
}