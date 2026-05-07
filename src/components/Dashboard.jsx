import React from 'react'
import PropTypes from 'prop-types'
import MetricCard from './MetricCard'
import styles from '../styles/Dashboard.module.css'

/**
 * Contenedor del panel que organiza las tarjetas de métricas.
 * @param {Object} props - Propiedades del componente.
 * @param {Array} props.metrics - Lista de objetos de métricas.
 * @param {React.ReactNode} props.children - Contenido adicional a renderizar.
 * @returns {JSX.Element} El layout del dashboard.
 */
const Dashboard = ({ metrics, children }) => {
  return (
    <section className={styles.dashboard}>
      <div className={styles.grid}>
        {metrics.map((metric, index) => (
          <div 
            key={metric.id} 
            className={styles.cardWrapper}
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <MetricCard
              label={metric.label}
              value={metric.value}
              unit={metric.unit}
              trend={metric.trend}
              status={metric.status}
              icon={metric.icon}
            />
          </div>
        ))}
      </div>
      <footer className={styles.footer}>
        {children}
      </footer>
    </section>
  )
}

Dashboard.propTypes = {
  metrics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      unit: PropTypes.string.isRequired,
      trend: PropTypes.oneOf(['up', 'down', 'stable']).isRequired,
      status: PropTypes.string.isRequired,
      icon: PropTypes.element
    })
  ).isRequired,
  children: PropTypes.node
}

export default Dashboard
