import React from 'react'
import { Users, GraduationCap, Activity, Briefcase } from 'lucide-react'
import Dashboard from './components/Dashboard'
import './index.css'

/**
 * Componente principal que orquestra la aplicación.
 * @returns {JSX.Element} El contenedor principal de la aplicación.
 */
const App = () => {
  const metricsData = [
    { 
      id: 1, 
      label: 'Asistencia General', 
      value: 87, 
      unit: '%', 
      trend: 'up', 
      status: 'Excelente',
      icon: <Users size={20} strokeWidth={2.5} />
    },
    { 
      id: 2, 
      label: 'Promedio Académico', 
      value: 16.5, 
      unit: '/20', 
      trend: 'up', 
      status: 'Destacado',
      icon: <GraduationCap size={20} strokeWidth={2.5} />
    },
    { 
      id: 3, 
      label: 'Tasa de Retención', 
      value: 94, 
      unit: '%', 
      trend: 'stable', 
      status: 'Saludable',
      icon: <Activity size={20} strokeWidth={2.5} />
    },
    { 
      id: 4, 
      label: 'Proyectos Entregados', 
      value: 78, 
      unit: '%', 
      trend: 'down', 
      status: 'En progreso',
      icon: <Briefcase size={20} strokeWidth={2.5} />
    }
  ]

  return (
    <main className="app-container">
      <header className="header-container">
        <span className="header-badge">Sistema de Control v2.0</span>
        <h1>Panel de Métricas Académicas</h1>
        <p className="subtitle">Visualización analítica en tiempo real para la Facultad de Ingeniería de Sistemas - 2026 - I</p>
      </header>

      {/* Renderizar Dashboard pasando metricsData y children */}
      <Dashboard metrics={metricsData}>
        <div className="dashboard-footer">
          <div className="footer-content">
            <span className="pulse-dot"></span>
            <p>Sincronización en vivo • Última actualización: {new Date().toLocaleTimeString()}</p>
          </div>
          <span className="csr-badge">Renderizado 100% Client-Side</span>
        </div>
      </Dashboard>
    </main>
  )
}

export default App
