import React from "react";

function Footer() {
  return (
    <div className="container">
      <footer class="pt-4 my-md-5 pt-md-5 border-top">
        <div class="row">
          <div class="col-12 col-md">
            <img
              class="mb-2"
              src="/docs/4.5/assets/brand/bootstrap-solid.svg"
              alt=""
              width="24"
              height="24"
            />
            <small class="d-block mb-3 text-muted">© 2017-2020</small>
          </div>
          <div class="col-6 col-md">
            <h5>Acerca de</h5>
            <ul class="list-unstyled text-small">
              <li>
                <a class="text-muted" href="/">
                  -Programadores
                </a>
              </li>
              <li>
                <a class="text-muted" href="/">
                  -Temas
                </a>
              </li>
              <li>
                <a class="text-muted" href="/">
                  -Informacion
                </a>
              </li>
              <li>
                <a class="text-muted" href="/">
                  -
                </a>
              </li>
            </ul>
          </div>
          <div class="col-6 col-md">
            <h5>Descripcion</h5>
            <ul class="list-unstyled text-small">
              <li>
                <a class="text-muted" href="/">
                ADLTP(Aprende de la tabla periodica),
                es una pagina web diseñada a enseñar los temas de la 
                materia quimica a aquellos estudiantes que se les dificulte
                algun tema, mediante ejercicios, con clases con diferentes
                docentes, todo para la comodidad del estudiante.
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
