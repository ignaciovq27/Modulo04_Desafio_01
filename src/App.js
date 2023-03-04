import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

//components
import Header from './components/Header';
import MyCard from './components/MyCard';
import Footer from './components/Footer';
import Stack from 'react-bootstrap/Stack';

function App() {
  return (
    <div className="App">
      <Header text="Galería de Imágenes con React"/>
      <hr />
      <Stack gap={3} className="Container">
        <MyCard
          src="https://images.pexels.com/photos/110812/pexels-photo-110812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="Dos Pájaros"
          description="Aves desconocidas posadas en una rama."
          border="primary"
          color="primary"
        />
        <MyCard
          src="https://images.pexels.com/photos/349758/hummingbird-bird-birds-349758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="Picaflor turqueza"
          description="Pequeño picaflor en vuelo."
          border="warning"
          color="warning"
        />
        <MyCard
          src="https://images.pexels.com/photos/2317904/pexels-photo-2317904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="Loro espléndido"
          description="Esta ave posee plumas doradas y colores vívidos."
          border="info"
          color="info"
        />
      </Stack>
      <h4>· FIN DE GALERÍA ·</h4>
      <hr />
      <Footer />
    </div>
  );
}

export default App;
