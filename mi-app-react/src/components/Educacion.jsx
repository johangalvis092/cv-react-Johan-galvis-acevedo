const educacion = [
  { institucion: "SENA", curso: "Análisis y Desarrollo de Software", año: 2024 },
  { institucion: "Platzi", curso: "Curso de React", año: 2023 },
  { institucion: "Coursera", curso: "Desarrollo Web", año: 2022 },
  { institucion: "Udemy", curso: "JavaScript Moderno", año: 2022 },
  { institucion: "Google Activate", curso: "Marketing Digital", año: 2021 }
];

function Educacion() {
  return (
    <section>
      <h3>Formación Académica</h3>
      <ul>
        {educacion.map((item, index) => (
          <li key={index}>
            <strong>{item.institucion}</strong> – {item.curso} ({item.año})
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Educacion;
