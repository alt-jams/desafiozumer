import { useState } from 'react';
import '../styles/employeeListing.scss';

export function EmployeeListing() {
    const [isOnline, setIsOnline] = useState(false); 

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
                        <p>{isOnline ? 'Online' : 'Offline' }</p>
                        <label className="toggle">
                            
                            <input type="checkbox" className={isOnline ? 'online' : ''} onClick={() => setIsOnline(!isOnline)}/>
                            <span className="slider"></span>
                        </label>
                    </div>  
                </section>
                <section>
                <div className="user-data">
                    <div className="user-img"></div>
                    <div>
                        <span>Maurício João</span>
                        <p>Atendente</p>
                    </div>
                </div>

                <div className="is-online">
                    <p>{isOnline ? 'Online' : 'Offline' }</p>
                    <label className="toggle">
                        
                        <input type="checkbox" className={isOnline ? 'online' : ''} onClick={() => setIsOnline(!isOnline)}/>
                        <span className="slider"></span>
                    </label>
                </div>  
            </section>
        </main>
        </>
    );
}