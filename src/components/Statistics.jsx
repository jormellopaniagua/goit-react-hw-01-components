import PropTypes from 'prop-types';
import './Statistics.css'; //  importar el archivo de estilos CSS para el componente Profile

import { Component } from 'react';

export default class Statistics extends Component {
  render() {
    // Extrae las props 'title' y 'stats' del objeto props usando destructuring
    const { title, stats } = this.props;
    return (
      <section className="statistics">
        {title && <h2 className="title">{title}</h2>}
        <ul className="stat-list">
          {/* Mapea cada objeto 'item' en el array 'stats' y renderiza un elemento de lista para cada uno */}
          {stats.map(item => (
            <li key={item.id} className="item">
              <span className="label">{item.label}</span>
              <span className="percentage">{item.percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
