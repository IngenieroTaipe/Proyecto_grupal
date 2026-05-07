import React from 'react'
import Dashboard from './components/Dashboard'
import './index.css'

/**
 * Componente principal que orquestra la aplicación.
 * @returns {JSX.Element} El contenedor principal de la aplicación.
 */
const App = () => {
  const metricsData = [
    { id: 1, label: 'Asistencia General', value: 87, unit: '%', trend: 'up', status: 'Excelente' },
    { id: 2, label: 'Promedio Académico', value: 16.5, unit: '/20', trend: 'up', status: 'Destacado' },
    { id: 3, label: 'Tasa de Retención', value: 94, unit: '%', trend: 'stable', status: 'Saludable' },
    { id: 4, label: 'Proyectos Entregados', value: 78, unit: '%', trend: 'down', status: 'En progreso' }
  ]

  return (
    <main className="app-container">
      <header>
        <h1>Panel de Métricas Académicas UNCP</h1>
        <p className="subtitle">Facultad de Ingeniería de Sistemas - 2024-I</p>
      </header>

      {/* Renderizar Dashboard pasando metricsData y children */}
      <Dashboard metrics={metricsData}>
        <div className="dashboard-footer">
          <p>Última actualización: {new Date().toLocaleTimeString()}</p>
          <span>Datos procesados en tiempo real via CSR</span>
        </div>
      </Dashboard>
    </main>
  )
}

export default App
