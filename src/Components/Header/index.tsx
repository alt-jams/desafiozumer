import { setIsModalOpen } from '../../Redux/modalSlice';
import { useAppDispatch } from '../../Redux/hooks';
import { Typography, Box, Button} from '@material-ui/core';
import { useStyles } from './styles';

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

