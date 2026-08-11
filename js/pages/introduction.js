// ============================================
// PÁGINA 2: INTRODUCCIÓN
// ============================================

function createIntroductionPage() {
    return `
        <div class="page">
            <div class="page-content">
                <h2>🧠 ¿Qué es el Sistema Esquelético?</h2>
                
                <div class="educational-grid">
                    <div class="card">
                        <div class="card-icon">💀</div>
                        <div class="card-title">Definición</div>
                        <div class="card-text">
                            El sistema esquelético es el conjunto estructurado de huesos, cartílagos, ligamentos y articulaciones que forman el esqueleto humano. Proporciona estructura, protección y facilita el movimiento del cuerpo.
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-icon">🔢</div>
                        <div class="card-title">Componentes</div>
                        <div class="card-text">
                            <strong>Huesos:</strong> Estructuras óseas calcificadas<br>
                            <strong>Cartílagos:</strong> Tejido más flexible<br>
                            <strong>Articulaciones:</strong> Conexiones entre huesos<br>
                            <strong>Ligamentos:</strong> Tejido conectivo
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-icon">🔢</div>
                        <div class="card-title">206 Huesos</div>
                        <div class="card-text">
                            El adulto promedio tiene aproximadamente 206 huesos en su cuerpo. Los bebés nacen con más huesos (~270), muchos de los cuales son de cartílago que se osifican durante el crecimiento.
                        </div>
                    </div>
                </div>

                <div class="skeleton-container" style="margin: 3rem auto;">
                    <div id="intro-skeleton"></div>
                </div>

                <div class="fact-box">
                    Los huesos son tejidos vivos que se remodela constantemente. Cada 7-10 años, aproximadamente el 100% de tu esqueleto se renueva.
                </div>

                <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 2rem;">
                    <button class="btn btn-outline" onclick="app.goToPage('cover')">← Atrás</button>
                    <button class="btn btn-primary" onclick="app.goToPage('functions')">Funciones →</button>
                </div>
            </div>
        </div>
    `;
}

// Inicializar esqueleto interactivo en la página
function initIntroductionInteractivity() {
    const skeleton = new SkeletonComponent('intro-skeleton', {
        interactive: true,
        animated: true,
        onBoneSelect: (bone) => {
            console.log('Hueso seleccionado:', bone.name);
        }
    });
}
