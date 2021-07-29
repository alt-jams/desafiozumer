import { useEffect, useState } from 'react';
import { api } from '../services/api';
import '../styles/employeeListing.scss';

export function EmployeeListing() {

    type Employee = {
        id: number;
        name: string;
        cargo: string;
        isOnline: Boolean;
    }

    const [employees, setEmployees] = useState <Employee[]>([]);

    function setOnlineStatus(id: number) {
        //update funcionário -> online = true;
    }

    useEffect(() => {
        api.get('funcionarios').then(response => setEmployees(response.data));
    }, []);

    return (
        <>
            <main>
                <section>
                    <div className="user-data">
                        <div className="user-img"></div>
                        <div>
                            <span>Maurício João</span>
                            <p>Atendente</p>
                        </div>
                    </div>

                    <div className="is-online">
                        <p>Online</p>
                        <label className="toggle">
                            
                            <input type="checkbox" className='online'/>
                            <span className="slider"></span>
                        </label>
                    </div>  
                </section>

                { employees.map(employee => {
                    return (
                        <section key={employee.id}>
                            <div className="user-data">
                                <div className="user-img"></div>
                                <div>
                                    <span>Maurício João</span>
                                    <p>Atendente</p>
                                </div>
                            </div>

                            <div className="is-online">
                                <p>{employee.isOnline ? 'Online' : 'Offline' }</p>
                                <label className="toggle">
                                    
                                    <input type="checkbox" className={employee.isOnline ? 'online' : ''} onClick={() => setOnlineStatus(employee.id)}/>
                                    <span className="slider"></span>
                                </label>
                            </div>  
                        </section>
                    );
                })}        
            </main>
        </>
    );
}