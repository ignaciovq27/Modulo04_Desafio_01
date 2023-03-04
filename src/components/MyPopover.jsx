import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

const popover = (
    <Popover id="popover-basic">
        <Popover.Header as="h3">Galería de imágenes con React</Popover.Header>
        <Popover.Body>
            Desafío creado para Unidad <strong>React I</strong> de Desafio Latam (◕‿◕☆)
        </Popover.Body>
    </Popover>
);

const MyPopover = () => (
    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
        <Button variant="primary">¡LEEME!</Button>
    </OverlayTrigger>
);

export default MyPopover;