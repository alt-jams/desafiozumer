import { HiDotsVertical } from 'react-icons/hi';
import { MdSmartphone } from 'react-icons/md';

import '../styles/employeeSection.scss';

type EmployeeSectionProps = {
    id: number;
    name: string;
    position: string;
    isOnline: boolean;
    setOnlineStatus: (id: number, isOnline: boolean) => void;
}

export function EmployeeSection({ id, name, position, isOnline, setOnlineStatus } : EmployeeSectionProps) {
    return (
        <section key={id}>
            <div className="user-data">
                <div className="user-img"></div>
                {  position === "Entregador" || position === "Atendente" ? <MdSmartphone size={25} color="#929292"/> : ''}
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
                    
                    <input type="checkbox" className={isOnline ? 'online' : ''} onClick={() => setOnlineStatus(id, isOnline)}/>
                    <span className="slider"></span>
                </label>
                <HiDotsVertical size={20} color="#929292"/> 
            </div>  
        </section>
    );
}