// ============================================
// PÁGINA 3: FUNCIONES DEL SISTEMA ESQUELÉTICO
// ============================================

function createFunctionsPage() {
    return `
        <div class="page">
            <div class="page-content">
                <h2>🙋 Funciones del Sistema Esquelético</h2>
                <p style="text-align: center; color: #666; margin-bottom: 2rem;">
                    El sistema esquelético cumple múltiples funciones esenciales para la vida.
                </p>

                <div class="card-grid">
                    <div class="card" onclick="toggleCardDetail(this)" style="cursor: pointer; position: relative;">
                        <div class="card-icon">🛡️</div>
                        <div class="card-title">Protección</div>
                        <div class="card-text">
                            Protege los órganos vitales del cuerpo como el cerebro, corazón, pulmones e hígado.
                        </div>
                        <div class="card-detail" style="display: none; margin-top: 1rem; padding-top: 1rem; border-top: 1px solid #eee;">
                            <strong>Ejemplos:</strong>
                            <ul style="margin-left: 1rem;">
                                <li>Cráneo protege el cerebro</li>
                                <li>Caja torácica protege corazón y pulmones</li>
                                <li>Columna protege la médula espinal</li>
                                <li>Pelvis protege órganos reproductores</li>
                            </ul>
                        </div>
                    </div>

                    <div class="card" onclick="toggleCardDetail(this)" style="cursor: pointer;">
                        <div class="card-icon">🧍</div>
                        <div class="card-title">Soporte y Sostén</div>
                        <div class="card-text">
                            Proporciona la estructura rígida que sostiene el peso del cuerpo y mantiene su forma.
                        </div>
                        <div class="card-detail" style="display: none; margin-top: 1rem; padding-top: 1rem; border-top: 1px solid #eee;">
                            <strong>Papel Principal:</strong> El fémur (muslo) es el hueso más fuerte del cuerpo y soporta la mayor parte del peso durante la posición de pie y la locomoción.
                        </div>
                    </div>

                    <div class="card" onclick="toggleCardDetail(this)" style="cursor: pointer;">
                        <div class="card-icon">🏃</div>
                        <div class="card-title">Movimiento</div>
                        <div class="card-text">
                            Trabaja con músculos y tendones para facilitar el movimiento del cuerpo y sus partes.
                        </div>
                        <div class="card-detail" style="display: none; margin-top: 1rem; padding-top: 1rem; border-top: 1px solid #eee;">
                            <strong>Mecanismo:</strong> Los músculos se insertan en los huesos mediante tendones. La contracción muscular tira de los huesos, generando movimiento alrededor de las articulaciones.
                        </div>
                    </div>

                    <div class="card" onclick="toggleCardDetail(this)" style="cursor: pointer;">
                        <div class="card-icon">🩸</div>
                        <div class="card-title">Hematopoyesis</div>
                        <div class="card-text">
                            La médula ósea produce células sanguíneas: glóbulos rojos, blancos y plaquetas.
                        </div>
                        <div class="card-detail" style="display: none; margin-top: 1rem; padding-top: 1rem; border-top: 1px solid #eee;">
                            <strong>Ubicación:</strong> La médula ósea roja (en huesos planos y epífisis) produce aproximadamente 200-300 mil millones de células sanguíneas diariamente.
                        </div>
                    </div>

                    <div class="card" onclick="toggleCardDetail(this)" style="cursor: pointer;">
                        <div class="card-icon">🧂</div>
                        <div class="card-title">Almacenamiento Mineral</div>
                        <div class="card-text">
                            Almacena minerales vitales como calcio y fósforo necesarios para el metabolismo.
                        </div>
                        <div class="card-detail" style="display: none; margin-top: 1rem; padding-top: 1rem; border-top: 1px solid #eee;">
                            <strong>Importancia:</strong> El calcio es esencial para la contracción muscular, transmisión nerviosa y coagulación sanguínea.
                        </div>
                    </div>

                    <div class="card" onclick="toggleCardDetail(this)" style="cursor: pointer;">
                        <div class="card-icon">⚙️</div>
                        <div class="card-title">Función Metabólica</div>
                        <div class="card-text">
                            Participa en procesos metabólicos y mantiene el equilibrio de pH del cuerpo.
                        </div>
                        <div class="card-detail" style="display: none; margin-top: 1rem; padding-top: 1rem; border-top: 1px solid #eee;">
                            <strong>Regulación:</strong> El hueso actúa como reseña de calcio y fósforo, regulando su concentración en la sangre.
                        </div>
                    </div>
                </div>

                <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 3rem;">
                    <button class="btn btn-outline" onclick="app.goToPage('introduction')">← Atrás</button>
                    <button class="btn btn-primary" onclick="app.goToPage('axialAppendicular')">Esqueleto Axial y Apendicular →</button>
                </div>
            </div>
        </div>
    `;
}

function toggleCardDetail(element) {
    const detail = element.querySelector('.card-detail');
    if (detail) {
        detail.style.display = detail.style.display === 'none' ? 'block' : 'none';
    }
}
