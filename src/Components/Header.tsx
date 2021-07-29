import '../styles/header.scss';

type HeaderProps = {
    openNewEmployeeModal: () => void;
}

export function Header({ openNewEmployeeModal } : HeaderProps) {
    return (
        <>
            <header>
                <span>O verdadeiro poder está na sua equipe</span>
                <strong>
                    Gerencie seus funcionários, especialmente os atendentes
                </strong>
            </header>
            <button className="new-employee" onClick={openNewEmployeeModal}>
                NOVO FUNCIONÁRIO
            </button>
            
        </>
    );
}