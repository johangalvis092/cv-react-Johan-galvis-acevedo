const tecnologias = ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB", "Tailwind", "Git", "Figma", "Express"];

function StackTecnologias() {
  return (
    <section>
      <h3>Stack Tecnológico</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {tecnologias.map((tech, index) => {
          let color;
          if (tech === "React") color = "#61DBFB";
          else if (tech === "JavaScript") color = "#F7DF1E";
          else if (tech === "Node.js") color = "#3C873A";
          else if (tech === "MongoDB") color = "#4DB33D";
          else if (tech === "Tailwind") color = "#38BDF8";
          else if (tech === "HTML") color = "#E34C26";
          else if (tech === "CSS") color = "#264DE4";
          else if (tech === "Git") color = "#F1502F";
          else if (tech === "Figma") color = "#A259FF";
          else color = "#999";

          return (
            <span
              key={index}
              style={{
                backgroundColor: color,
                padding: "5px 10px",
                borderRadius: "8px",
                color: "white",
                fontWeight: "bold"
              }}
            >
              {tech}
            </span>
          );
        })}
      </div>
    </section>
  );
}

export default StackTecnologias;
