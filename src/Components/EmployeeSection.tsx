import DeleteIcon from '@material-ui/icons/Delete';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import { useAppDispatch } from '../Redux/hooks';
import { setOnlineStatus, deleteEmployee } from '../Redux/employeeSlice';
import { EmployeeSectionProps } from '../types/employee';
import { Box, makeStyles, Typography, Switch, withStyles, createStyles} from '@material-ui/core';

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
                    <DeleteIcon onClick={() => dispatch(deleteEmployee(id))} 
                                style={{ color: '#929292', cursor: 'pointer' }}
                    /> 
            </Box>  
        </Box>
    );
}

const useStyles = makeStyles(() => ({ 
    userContainer: {
        margin: 15,
        padding: 10,
        background:'#FFF',
        borderRadius: 5,
        display: 'flex',
    },
    userData: {
        display:'flex',
        alignItems: 'center',
        width: '40%',
    },
    userImg: {
        padding: 30,
        maxWidth: 30,
        background: '#b6b6b6',
        borderRadius: 160,
        marginRight: 16,
    },
    userInfo: {
        marginLeft: 8,
    },
    userName: {
        marginBottom: 6,
        display: 'flex',
        color: '#3e3e3e',
        alignItems: 'center',
        gap: 8,
    },
    isOnline: {
        marginLeft: '65%',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
    }
}));

const AntSwitch = withStyles(() =>
  createStyles({
    root: {
      width: 47,
      height: 25,
      padding: 0,
      display: 'flex',
    },
    switchBase: {
      padding: 3,
      paddingBottom: 2,
      color: '#FFF',
      '&$checked': {
        transform: 'translateX(21px)',
        color: '#FFF',
        '& + $track': {
          opacity: 1,
          backgroundColor: '#22ec15',
          borderColor: '#22ec15',
        },
      },
    },
    thumb: {
      width: 20,
      height: 20,
    },
    track: {
      border: `1px solid #fb2a3c`,
      borderRadius: 40,
      opacity: 1,
      backgroundColor: '#fb2a3c',
    },
    checked: {},
  }),
)(Switch);