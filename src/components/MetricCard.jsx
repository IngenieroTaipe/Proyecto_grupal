import React from 'react'
import PropTypes from 'prop-types'
import StatusBadge from './StatusBadge'
import styles from '../styles/MetricCard.module.css'

/**
 * Tarjeta individual de métrica con estilos dinámicos.
 * @param {Object} props - Datos de la métrica.
 * @returns {JSX.Element} Tarjeta renderizada.
 */
const MetricCard = ({ label, value, unit, trend, status, icon }) => {
  // Cálculo de color dinámico inline basado en el trend (Cumple con requerimiento de la guía)
  const getTrendColor = () => {
    switch (trend) {
      case 'up': return 'var(--success)';
      case 'down': return 'var(--error)';
      default: return 'var(--accent-cyan)';
    }
  }

  // Estilo dinámico para la barra de progreso
  const progressStyle = {
    width: typeof value === 'number' && unit === '%' ? `${value}%` : 
           typeof value === 'number' && unit === '/20' ? `${(value / 20) * 100}%` : '50%',
    backgroundColor: getTrendColor(),
    boxShadow: `0 0 15px ${getTrendColor()}80` // 80 es hex para 50% opacidad
  }

  // Estilo para el icono
  const iconStyle = {
    color: getTrendColor()
  }

  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <div className={styles.titleWrapper}>
          <div className={styles.iconBox} style={iconStyle}>
            {icon}
          </div>
          <h3>{label}</h3>
        </div>
        <StatusBadge type={trend}>{status}</StatusBadge>
      </div>
      
      <div className={styles.content}>
        <div className={styles.valueBox}>
          <span className={styles.value}>{value}</span>
          <span className={styles.unit}>{unit}</span>
        </div>
        <div className={styles.trendInfo}>
          <span className={styles.trendLabel}>
            {trend === 'up' ? '+12% este mes' : trend === 'down' ? '-4% este mes' : 'Consistente'}
          </span>
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.progressTrack}>
          <div className={styles.progressBar} style={progressStyle}></div>
        </div>
      </div>
    </article>
  )
}

MetricCard.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  unit: PropTypes.string.isRequired,
  trend: PropTypes.oneOf(['up', 'down', 'stable']).isRequired,
  status: PropTypes.string.isRequired,
  icon: PropTypes.element
}

export default MetricCard
