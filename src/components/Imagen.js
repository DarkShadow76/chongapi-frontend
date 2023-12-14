import Image from 'react-bootstrap/Image';

const Imagen = () => {
  return <Image src="data:image/jpeg;base64,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" fluid />;
}

export default Imagen