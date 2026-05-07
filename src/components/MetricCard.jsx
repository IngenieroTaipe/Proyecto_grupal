import React from 'react'
import PropTypes from 'prop-types'
import StatusBadge from './StatusBadge'
import styles from '../styles/MetricCard.module.css'

/**
 * Tarjeta individual de métrica con estilos dinámicos.
 * @param {Object} props - Datos de la métrica.
 * @returns {JSX.Element} Tarjeta renderizada.
 */
const MetricCard = ({ label, value, unit, trend, status }) => {
  // Cálculo de color dinámico inline basado en el trend
  const getTrendColor = () => {
    switch (trend) {
      case 'up': return 'var(--success)';
      case 'down': return 'var(--error)';
      default: return 'var(--accent-color)';
    }
  }

  const indicatorStyle = {
    backgroundColor: getTrendColor(),
    boxShadow: `0 0 10px ${getTrendColor()}`
  }

  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <h3>{label}</h3>
        <StatusBadge type={trend}>{status}</StatusBadge>
      </div>
      
      <div className={styles.valueBox}>
        <span className={styles.value}>{value}</span>
        <span className={styles.unit}>{unit}</span>
      </div>

      <div className={styles.footer}>
        <div className={styles.indicator} style={indicatorStyle}></div>
        <span className={styles.trendLabel}>
          {trend === 'up' ? '↗ Incremento' : trend === 'down' ? '↘ Descenso' : '→ Estable'}
        </span>
      </div>
    </article>
  )
}

MetricCard.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  unit: PropTypes.string.isRequired,
  trend: PropTypes.oneOf(['up', 'down', 'stable']).isRequired,
  status: PropTypes.string.isRequired
}

export default MetricCard
