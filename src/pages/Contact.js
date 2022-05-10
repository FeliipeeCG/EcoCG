import { useState } from "react";
import Container from "@mui/material/Container";

const ContactPage = () => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Envio de nombre: ", value);
  };

  const handleChange = (e) => {
    console.log(e);
    setValue(e.target.value);
  };

  const resetForm = () => {
    setValue("");
    console.log("limpiar formulario");
  };

  return (
    <Container className="container-general help">
      <h2>Preguntas Frecuentes</h2>
      <div className="faq-section">
        <section>
          <h3>Consultas de stock</h3>
          <h4>¿Reponen rapido la mercancia?</h4>
          <p>
            Afortunadamente tenemos proveedores capacitados para poder renovar
            nuestro stock en menos de dos semanas
          </p>
          <h3>¿Que medios de pago utilizan?</h3>
          <p>
            Aceptamos desde transferencias por CBU, pago en efectivo hastaa
            monedas de oro
          </p>
        </section>
        <section>
          <h3>Envío y seguimiento</h3>
          <h4>¿Puede recibir el paquete otra persona?</h4>
          <p>
            Claro que si, lo unico que pedimos es que estes atento a un llamado
            que realizaremos cuando estemos por dejar tu paquete, asi confirmas
            la identidad de la persona que va a recibir tu figura
          </p>
          <h4>Cuanto tarda la entrega?</h4>
          <p>
            Depende mucho de tu ubicacion pero por lo general tarda de 7 a 10
            dias
          </p>
        </section>
        <section></section>
      </div>
    </Container>
  );
};

export default ContactPage;
