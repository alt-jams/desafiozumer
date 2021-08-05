import DeleteIcon from '@material-ui/icons/Delete';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import { useAppDispatch } from '../../Redux/hooks';
import { setOnlineStatus, removeEmployee } from '../../Redux/employeeSlice';
import { EmployeeSectionProps } from '../../types/employee';
import { Box, Typography} from '@material-ui/core';
import { useStyles, AntSwitch } from './styles';

export function EmployeeSection({ id, name, position, isOnline} : EmployeeSectionProps) {
    const dispatch = useAppDispatch();
    const styles = useStyles();

    return (
        <Box key={id} className={styles.userContainer}>
            <Box className={styles.userData}>
                <div className={styles.userImg}></div>
                { position === "Entregador" || position === "Atendente" ? <SmartphoneIcon style={{ color: '#929292' }}/> : ''}
                <div className={styles.userInfo}>
                    <Typography variant="h5" className={styles.userName}>{name}
                        <div className = { isOnline ? "is-online-dot" : "isnt-online-dot"}></div>
                    </Typography>
                    <Typography variant="body2">{position}</Typography>
                </div>
            </Box>

            <Box className={styles.isOnline}>
                <Typography variant="body1">{isOnline ? 'Online' : 'Offline' }</Typography>
                <AntSwitch checked={isOnline} onChange={() => dispatch(setOnlineStatus(id, isOnline))} />
                    <DeleteIcon onClick={() => dispatch(removeEmployee({id}))} 
                                style={{ color: '#929292', cursor: 'pointer' }}
                    /> 
            </Box>  
        </Box>
    );
}

