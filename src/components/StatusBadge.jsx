import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles/StatusBadge.module.css'

/**
 * Badge de estado para indicar el nivel o tendencia.
 * @param {Object} props - Props del badge.
 * @returns {JSX.Element} Badge estilizado.
 */
const StatusBadge = ({ type, children }) => {
  const badgeClass = `${styles.badge} ${styles[type] || ''}`
  
  return (
    <span className={badgeClass}>
      {children}
    </span>
  )
}

StatusBadge.propTypes = {
  type: PropTypes.oneOf(['up', 'down', 'stable']).isRequired,
  children: PropTypes.node.isRequired
}

export default StatusBadge
