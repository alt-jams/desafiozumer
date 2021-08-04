import { setIsModalOpen } from '../Redux/modalSlice';
import { useAppDispatch } from '../Redux/hooks';
import { makeStyles, Typography, Box, Button} from '@material-ui/core';

export function Header() {
    const dispatch = useAppDispatch();
    const styles = useStyles();

    return (
        <>
            <Box className={styles.header}>
                <Typography variant="body2" className={styles.text}>O verdadeiro poder está na sua equipe</Typography>
                <Typography variant="body1" className={styles.textBold}>
                    Gerencie seus funcionários, especialmente os atendentes
                </Typography>
            </Box>
            <Button className={styles.button}
                variant="contained" 
                color="primary" 
                disableElevation
                onClick={() => dispatch(setIsModalOpen(true))}
                >
                NOVO FUNCIONÁRIO
            </Button>  
        </>
    );
}

const useStyles = makeStyles(() => ({ 
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