const experiencias = [
  { cargo: "Frontend Developer", empresa: "TechCorp", año: 2024, descripcion: "Diseño e implementación de interfaces en React." },
  { cargo: "Backend Intern", empresa: "NodeBase", año: 2023, descripcion: "Desarrollo de APIs REST en Node.js." },
  { cargo: "Diseñador UI", empresa: "UXLab", año: 2023, descripcion: "Prototipado de interfaces responsivas." },
  { cargo: "Soporte TI", empresa: "SistemasYa", año: 2022, descripcion: "Mantenimiento de equipos y redes." },
  { cargo: "Freelance Web", empresa: "Cliente A", año: 2022, descripcion: "Landing page en HTML, CSS y JS." },
  { cargo: "Freelance React", empresa: "Cliente B", año: 2022, descripcion: "Sitio con rutas dinámicas y hooks." },
  { cargo: "Técnico en Sistemas", empresa: "SENA", año: 2021, descripcion: "Instalación de software y soporte básico." },
  { cargo: "Practicante Dev", empresa: "StartUp Dev", año: 2021, descripcion: "Ayuda en desarrollo de módulos." },
  { cargo: "Ayudante diseño", empresa: "DiseñaYa", año: 2020, descripcion: "Apoyo en diseños web básicos." },
  { cargo: "Voluntario IT", empresa: "Fundación TIC", año: 2019, descripcion: "Capacitación en tecnología a jóvenes." }
];

function Experiencia() {
  return (
    <section>
      <h3>Experiencia Laboral y Proyectos</h3>
      <ul>
        {experiencias.map((exp, index) => (
          <li key={index}>
            <strong>{exp.cargo}</strong> - {exp.empresa} ({exp.año})<br />
            {exp.descripcion}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Experiencia;
