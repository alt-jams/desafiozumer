import '../styles/header.scss';
import { setIsModalOpen } from '../Redux/modalSlice';
import { useAppDispatch } from '../Redux/hooks';

export function Header() {
    const dispatch = useAppDispatch();

    return (
        <>
            <header>
                <span>O verdadeiro poder está na sua equipe</span>
                <strong>
                    Gerencie seus funcionários, especialmente os atendentes
                </strong>
            </header>
            <button className="new-employee" onClick={() => dispatch(setIsModalOpen(true))}>
                NOVO FUNCIONÁRIO
            </button>
        </>
    );
}