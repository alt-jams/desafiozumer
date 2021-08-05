import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({ 
    header: {
        background: '#06061e',
        display: 'flex',
        flexDirection: 'column',
        margin: 15,
        padding: 20,
        paddingBottom: 30,
        paddingTop: 30,
        borderRadius: 5,
        color: '#FFF',
    },
    text: {
        opacity: 1,
        marginBottom: 10,
    },
    textBold: {
        fontWeight: 500,
        opacity: 1,
    },
    button: {
        position: 'absolute',
        padding: 8,
        top: 130,
        right: 22,
    },
}))