import { FaTrashAlt} from 'react-icons/fa';
import { MdSmartphone } from 'react-icons/md';

import { useAppDispatch } from '../Redux/hooks';
import { setOnlineStatus, deleteEmployee } from '../Redux/employeeSlice';

import { EmployeeSectionProps } from '../types/employee';

import '../styles/employeeSection.scss';

export function EmployeeSection({ id, name, position, isOnline} : EmployeeSectionProps) {
    const dispatch = useAppDispatch();

    return (
        <section key={id}>
            <div className="user-data">
                <div className="user-img"></div>
                { position === "Entregador" || position === "Atendente" ? <MdSmartphone size={25} color="#929292"/> : ''}
                <div className="user-name">
                    <span>{name}
                        <div className = { isOnline ? "is-online-dot" : "isnt-online-dot"}></div>
                    </span>
                    <p>{position}</p>
                </div>
                
            </div>

            <div className="is-online">
                <p>{isOnline ? 'Online' : 'Offline' }</p>
                <label className="toggle">
                    
                    <input type="checkbox" className={isOnline ? 'online' : ''} onClick={() => dispatch(setOnlineStatus(id, isOnline))}/>
                    <span className="slider"></span>
                </label>
                <button onClick={() => dispatch(deleteEmployee(id))}>
                    <FaTrashAlt size={20} color="#929292"/> 
                </button>
            </div>  
        </section>
    );
}