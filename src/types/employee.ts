export interface Employee {
    idFuncionario: number;
    nome: string;
    cargo: string;
    online: boolean;
}

export interface EmployeeForm {
    name: string;
    employeePosition: string;
    online: boolean;
    email?: string;
    password?: string;
    salary: number;
}


export interface EmployeeState {
    employees: Array<Employee>;
}

export interface ModalState {
    isModalOpen: boolean;
}

export interface EmployeeSectionProps {
    id: number;
    name: string;
    position: string;
    isOnline: boolean;
}