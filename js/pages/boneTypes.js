// ============================================
// PÁGINA: TIPOS DE HUESOS
// ============================================

function createBoneTypesPage() {
    return `
        <div class="page">
            <div class="page-content">
                <h2>📚 Tipos de Huesos</h2>
                <p style="text-align: center; color: #666; margin-bottom: 2rem;">
                    Los huesos se clasifican según su forma y función.
                </p>

                <div class="card-grid">
                    <div class="card" style="border-top: 4px solid #e74c3c;">
                        <div class="card-icon">📏</div>
                        <div class="card-title">Huesos Largos</div>
                        <div class="card-text">
                            <strong>Características:</strong> Forma cilíndrica con dos extremos ensanchados y un cuerpo más estrecho.<br><br>
                            <strong>Función:</strong> Soportan peso y facilitan movimientos amplios.<br><br>
                            <strong>Ejemplos:</strong>
                            <ul style="margin-left: 1rem;">
                                <li>🦵 Fémur (Muslo)</li>
                                <li>💪 Húmero (Brazo)</li>
                                <li>🦴 Radio y Cúbito (Antebrazo)</li>
                            </ul>
                        </div>
                    </div>

                    <div class="card" style="border-top: 4px solid #3498db;">
                        <div class="card-icon">📦</div>
                        <div class="card-title">Huesos Cortos</div>
                        <div class="card-text">
                            <strong>Características:</strong> Forma aproximadamente cúbica, son casi tan anchos como largos.<br><br>
                            <strong>Función:</strong> Estabilidad y flexibilidad limitada.<br><br>
                            <strong>Ejemplos:</strong>
                            <ul style="margin-left: 1rem;">
                                <li>🦴 Carpos (Muñeca)</li>
                                <li>🦴 Tarsos (Pie)</li>
                                <li>🦴 Vértebras cervicales</li>
                            </ul>
                        </div>
                    </div>

                    <div class="card" style="border-top: 4px solid #2ecc71;">
                        <div class="card-icon">⬜</div>
                        <div class="card-title">Huesos Planos</div>
                        <div class="card-text">
                            <strong>Características:</strong> Forma aplanada, extensión considerable en dos dimensiones.<br><br>
                            <strong>Función:</strong> Protección y punto de inserción muscular.<br><br>
                            <strong>Ejemplos:</strong>
                            <ul style="margin-left: 1rem;">
                                <li>💀 Huesos del cráneo</li>
                                <li>🫁 Costillas y esternón</li>
                                <li>🦴 Escápula</li>
                            </ul>
                        </div>
                    </div>

                    <div class="card" style="border-top: 4px solid #9b59b6;">
                        <div class="card-icon">🔀</div>
                        <div class="card-title">Huesos Irregulares</div>
                        <div class="card-text">
                            <strong>Características:</strong> Forma compleja que no entra en otras categorías.<br><br>
                            <strong>Función:</strong> Múltiples funciones específicas según ubicación.<br><br>
                            <strong>Ejemplos:</strong>
                            <ul style="margin-left: 1rem;">
                                <li>🦴 Vértebras</li>
                                <li>🦴 Mandíbula</li>
                                <li>🦴 Hueso Coxal</li>
                            </ul>
                        </div>
                    </div>

                    <div class="card" style="border-top: 4px solid #f39c12;">
                        <div class="card-icon">⭕</div>
                        <div class="card-title">Huesos Sesamoideos</div>
                        <div class="card-text">
                            <strong>Características:</strong> Pequeños y redondeados, incrustados en tendones o ligamentos.<br><br>
                            <strong>Función:</strong> Protección articular y mejora biomecánica.<br><br>
                            <strong>Ejemplos:</strong>
                            <ul style="margin-left: 1rem;">
                                <li>🦴 Rótula (Rodilla)</li>
                                <li>🦴 Sesamoideos del pie</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 3rem;">
                    <button class="btn btn-outline" onclick="app.goToPage('boneStructure')">← Atrás</button>
                    <button class="btn btn-primary" onclick="app.goToPage('skull')">Cráneo →</button>
                </div>
            </div>
        </div>
    `;
}
