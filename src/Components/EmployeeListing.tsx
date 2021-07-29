import { useEffect, useState } from 'react';
import { api } from '../services/api';
import { EmployeeSection } from './EmployeeSection';

import '../styles/employeeListing.scss';

type Employee = {
    id: number;
    nome: string;
    cargo: string;
    online: boolean;
}

export function EmployeeListing() {
    const [employees, setEmployees] = useState <Employee[]>([]);

    function setOnlineStatus(id: number, isOnline: boolean) {
        api.patch(`funcionarios/:${id}`, {
            online: !isOnline,
        },
        {
            headers: {
                "Authorization": "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLnp1bWVyLmFwcFwvYXBpXC9lc3RhYmVsZWNpbWVudG9cL2xvZ2luIiwiaWF0IjoxNjA3NjMwMjI4LCJleHAiOjE2MTAyMjIyMjgsIm5iZiI6MTYwNzYzMDIyOCwianRpIjoibjVoVmlSUjhDczlmTzhBOSIsInN1YiI6MiwicHJ2IjoiNmExMjg1NjkxMjkzNjRiNTg4NDlkNTRkMDE5ZWJmYTBmNTJhYjJlMCIsInVzZXJuYW1lIjoiY3J1c2NhdG9AeWFob28uY29tLmJyIn0.akREoGCtNBue3SK2tyTyvfpiTX5hd2EEtirGT43MpeiLls7VabYAwZg6b6d30zjaqlE2PFfza2retZDeJO6aKSoN8lp9Yzjrv6YNogMWjgp6b51ZJyX2JH7UG1kjjRhRYa7rAdn4GGL21BQVghN0x2OCecDjs9De3qXl4XrZBdA",
                "Content-Type": "application/json",  
            }
        })
    }

    useEffect(() => {
        api.get<Employee[]>('funcionarios').then(response => setEmployees(response.data));
    }, [employees]);

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