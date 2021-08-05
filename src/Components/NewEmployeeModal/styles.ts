import { createStyles, Switch, makeStyles } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

export const useStyles = makeStyles(() => ({ 
    reactModalOverlay: {
        background: 'rgba(0,0,0,0.1)',  
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    reactModalContent: {
        width:'30%',
        height: '100%',
        maxWidth: 576,
        background: '#f4f4f4',
        padding: 25,
        position: 'fixed',
        top: 0,
        right: 0,
    },
    top: {
        display: 'flex',
        gap: 10,
        marginBottom: 20,
    },
    close: {
        cursor: 'pointer',
    },
    submitButton: {
      width: '100%',
      padding: 8,
      marginTop: 18,
    },
    textFields: {
        background: '#e7e7e7',
        width: '100%',
        padding: 8,
        marginTop: 18,
        borderRadius: 5,
    },
    select: {
        background: '#e7e7e7',
        width: '100%',
        padding: 8,
        marginTop: 18,
        borderRadius: 5,
    },
    centralText: {
        marginTop: 5,
        textAlign: 'center',
    },
    onlineStatus: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        marginTop: 18,
    },
    signIn: {
        marginTop: 25,
    }, 
    error: {
      color: '#FF0000',
      marginBottom: 8,
      opacity: 1,
      fontSize: 13,
    }
}));

export const AntSwitch = withStyles(() =>
  createStyles({
    root: {
      width: 47,
      height: 23,
      padding: 0,
      display: 'flex',
    },
    switchBase: {
      padding: 3,
      color: '#FFF',
      '&$checked': {
        transform: 'translateX(22px)',
        color: '#FFF',
        '& + $track': {
          opacity: 1,
          backgroundColor: '#22ec15',
          borderColor: '#22ec15',
        },
      },
    },
    thumb: {
      width: 18,
      height: 18,
    },
    track: {
      border: `1px solid #fb2a3c`,
      borderRadius: 60,
      opacity: 1,
      backgroundColor: '#fb2a3c',
    },
    checked: {},
  }),
)(Switch);