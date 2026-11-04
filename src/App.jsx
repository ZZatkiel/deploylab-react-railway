import { useState } from 'react';
import { environmentLabel, normalizeEnvironment } from './lib/environment.js';

const environment = normalizeEnvironment(import.meta.env.VITE_APP_ENV);

export default function App() {
  const [clicks, setClicks] = useState(0);

  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">LABORATORIO DE DESPLIEGUE</p>
        <h1>DeployLab <span>React</span></h1>
        <p className="subtitle">
          Practicá el recorrido completo de una aplicación: Git, GitHub, Pull Requests,
          Staging y Production en Railway.
        </p>
        <div className="status-bar">
          <span className={`environment environment--${environment}`}>
            <span className="dot" aria-hidden="true" />
            {environmentLabel(environment)}
          </span>
          <span className="version">Versión 1.0.0</span>
        </div>
      </section>

      <section className="panel" aria-label="Proyecto React">
        <div className="panel-heading">
          <h2>Probá un cambio</h2>
          <p>Hacé una modificación en <code>src/App.jsx</code>, subila a tu rama y comprobá el despliegue.</p>
        </div>
        <div className="counter">
          <div>
            <span className="small-label">Clics de esta sesión</span>
            <strong aria-live="polite">{clicks}</strong>
          </div>
          <div className="actions">
            <button onClick={() => setClicks((previous) => previous + 1)}>Sumar clic</button>
            <button className="secondary" onClick={() => setClicks(0)}>Reiniciar</button>
          </div>
        </div>
      </section>

      <section className="steps" aria-label="Flujo de trabajo">
        <article><span>01</span><h3>Feature</h3><p>Programás la mejora en una rama independiente.</p></article>
        <article><span>02</span><h3>Staging</h3><p>Abrís un PR, fusionás y probás en Railway.</p></article>
        <article><span>03</span><h3>Production</h3><p>Aprobás la versión y la publicás desde main.</p></article>
      </section>
      <footer>Una SPA de React sin API ni base de datos · Creada para practicar despliegues</footer>
    </main>
  );
}
