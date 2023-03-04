import Alert from 'react-bootstrap/Alert';
import MyPopover from './MyPopover';

function Footer() {
    return (
        <>
            <Alert variant="primary">
                Desarrollado por Ignacio V.
                Encuentra más información aquí <MyPopover />
            </Alert>
        </>
    );
}

export default Footer;