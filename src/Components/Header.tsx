
import '../styles/header.scss';

export function Header() {
    return (
        <>
            <header>
                <span>O verdadeiro poder está na sua equipe</span>
                <strong>
                    Gerencie seus funcionários, especialmente os atendentes
                </strong>
            </header>
            <button className="new-employee">
                NOVO FUNCIONÁRIO
            </button>
            
        </>
    );
}