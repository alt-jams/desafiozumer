export type Employee = {
    idFuncionario: number;
    nome: string;
    cargo: string;
    online: boolean;
}

export type Employees = Array<Employee>;

export type EmployeeState = {
    employees: Array<Employee>;
}