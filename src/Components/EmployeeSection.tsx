import '../styles/employeeSection.scss';

type EmployeeSectionProps = {
    id: number;
    name: string;
    cargo: string;
    isOnline: boolean;
    setOnlineStatus: (id: number) => void;
}

export function EmployeeSection({ id, name, cargo, isOnline, setOnlineStatus } : EmployeeSectionProps) {
    return (
        <section key={id}>
            <div className="user-data">
                <div className="user-img"></div>
                <div>
                    <span>{name}
                        <div className = { isOnline ? "is-online-dot" : "isnt-online-dot"}></div>
                    </span>
                    <p>{cargo}</p>
                </div>
                
            </div>

            <div className="is-online">
                <p>{isOnline ? 'Online' : 'Offline' }</p>
                <label className="toggle">
                    
                    <input type="checkbox" className={isOnline ? 'online' : ''} onClick={() => setOnlineStatus(id)}/>
                    <span className="slider"></span>
                </label>
            </div>  
        </section>
    );
}