import PropTypes from 'prop-types';
import { Component } from 'react';
import Estadisticas from './styledComponents/statistics'; // Importamos el componente estilizado Estadisticas
import StatList from './styledComponents/statList'; // Importamos el componente estilizado StatList
import UploadStat from './styledComponents/uploadStat'; // Importamos el componente estilizado UploadStat

export default class Statistics extends Component {
  render() {
    // Extraemos las props 'title' y 'stats' del objeto props usando destructuring
    const { title, stats } = this.props;
    return (
      // Renderizamos el componente estilizado Estadisticas
      <Estadisticas className="statistics">
        {/* Si existe el título, renderizamos un elemento h2 con la clase 'title' */}
        {title && <h2 className="title">{title}</h2>}
        {/* Renderizamos el componente estilizado StatList */}
        <StatList className="stat-list">
          {/* Mapeamos cada objeto 'item' en el array 'stats' y renderizamos un elemento de lista para cada uno */}
          {stats.map((item, index) => (
            // Renderizamos el componente estilizado UploadStat
            <UploadStat
              key={item.id} // Asignamos un key único a cada elemento de la lista
              className="item" // Asignamos la clase 'item' al elemento de lista
              backgroundColor={this.generateRandomColor()} // Pasamos el color de fondo aleatorio como una prop llamada 'backgroundColor'
            >
              {/* Renderizamos el label y el porcentaje de cada elemento */}
              <span className="label">{item.label}</span>
              <span className="percentage">{item.percentage}%</span>
            </UploadStat>
          ))}
        </StatList>
      </Estadisticas>
    );
  }

  // Método para generar un color de fondo aleatorio en formato hexadecimal
  generateRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
}

// Definimos las propTypes para el componente Statistics
Statistics.propTypes = {
  title: PropTypes.string, // Prop 'title' debe ser un string (opcional)
  stats: PropTypes.arrayOf(
    // Prop 'stats' debe ser un array de objetos con una estructura específica
    PropTypes.shape({
      id: PropTypes.string.isRequired, // Cada objeto debe tener una propiedad 'id' que sea un string (obligatorio)
      label: PropTypes.string.isRequired, // Cada objeto debe tener una propiedad 'label' que sea un string (obligatorio)
      percentage: PropTypes.number.isRequired, // Cada objeto debe tener una propiedad 'percentage' que sea un número (obligatorio)
    })
  ).isRequired, // La prop 'stats' es obligatoria
};
