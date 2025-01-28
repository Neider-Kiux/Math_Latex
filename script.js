const styles_latex = `
  mover > mo {
    width: 100%;
    background-color: black;
  }

`;

[...document.getElementsByTagName('la-tex')].forEach((Element) => {
  if (Element.shadowRoot) {
    // Verificar si tiene un shadowRoot
    console.log(Element);
    const style = document.createElement('style');
    style.textContent = styles_latex; // Agregar los estilos
    Element.shadowRoot.appendChild(style); // Inyectar el estilo
  }
});

MathJax = {
  tex: {
    inlineMath: [
      ['$', '$'],
      ['\\(', '\\)'],
    ],
  },
  chtml: {
    scale: 0.8, // Ajusta globalmente el tamaño
  },
};
