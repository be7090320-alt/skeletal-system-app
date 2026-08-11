// ============================================
// PÁGINAS PLACEHOLDER - Estructura Básica
// ============================================

// Página: Cráneo
function createSkullPage() {
    return `
        <div class="page">
            <div class="page-content">
                <h2>💀 Cráneo</h2>
                <p style="text-align: center; color: #666; margin-bottom: 2rem;">
                    El cráneo protege el encéfalo y contiene órganos de los sentidos.
                </p>
                <div class="card" style="text-align: center; padding: 3rem;">
                    <div style="font-size: 5rem; margin-bottom: 1rem;">💀</div>
                    <p>El cráneo se divide en Neurocráneo (protección cerebral) y Viscerocráneo (estructura facial).</p>
                    <p style="margin-top: 1rem; color: #3498db; font-weight: bold;">Total: 22 huesos</p>
                </div>
                <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 3rem;">
                    <button class="btn btn-outline" onclick="app.goToPage('boneTypes')">← Atrás</button>
                    <button class="btn btn-primary" onclick="app.goToPage('spine')">Columna Vertebral →</button>
                </div>
            </div>
        </div>
    `;
}

// Página: Columna Vertebral
function createSpinePage() {
    return `
        <div class="page">
            <div class="page-content">
                <h2>🦴 Columna Vertebral</h2>
                <p style="text-align: center; color: #666; margin-bottom: 2rem;">
                    La columna vertebral protege la médula espinal y proporciona soporte estructural.
                </p>
                <div class="educational-grid">
                    <div class="card"><strong>Cervical (C1-C7)</strong><br>Cuello - 7 vértebras</div>
                    <div class="card"><strong>Torácica (T1-T12)</strong><br>Tórax - 12 vértebras</div>
                    <div class="card"><strong>Lumbar (L1-L5)</strong><br>Región baja - 5 vértebras</div>
                    <div class="card"><strong>Sacro</strong><br>Base - 5 vértebras fusionadas</div>
                    <div class="card"><strong>Coccígea</strong><br>Tailbone - 3-4 vértebras</div>
                </div>
                <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 3rem;">
                    <button class="btn btn-outline" onclick="app.goToPage('skull')">← Atrás</button>
                    <button class="btn btn-primary" onclick="app.goToPage('thorax')">Caja Torácica →</button>
                </div>
            </div>
        </div>
    `;
}

// Página: Caja Torácica
function createThoraxPage() {
    return `
        <div class="page">
            <div class="page-content">
                <h2>🫁 Caja Torácica</h2>
                <p style="text-align: center; color: #666; margin-bottom: 2rem;">
                    Protege el corazón, pulmones e hígado. Participa en la respiración.
                </p>
                <div class="educational-grid">
                    <div class="card" style="border-left: 5px solid #2ecc71;">
                        <strong>Esternón</strong>
                        <p style="margin-top: 0.5rem;">Hueso plano central que se articula con las costillas.</p>
                    </div>
                    <div class="card" style="border-left: 5px solid #2ecc71;">
                        <strong>Costillas (12 pares)</strong>
                        <p style="margin-top: 0.5rem;">7 verdaderas, 3 falsas, 2 flotantes.</p>
                    </div>
                    <div class="card" style="border-left: 5px solid #3498db;">
                        <strong>Vértebras Torácicas</strong>
                        <p style="margin-top: 0.5rem;">Se articulan con las costillas.</p>
                    </div>
                </div>
                <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 3rem;">
                    <button class="btn btn-outline" onclick="app.goToPage('spine')">← Atrás</button>
                    <button class="btn btn-primary" onclick="app.goToPage('upperLimb')">Miembro Superior →</button>
                </div>
            </div>
        </div>
    `;
}

// Página: Miembro Superior
function createUpperLimbPage() {
    return `
        <div class="page">
            <div class="page-content">
                <h2>💪 Miembro Superior</h2>
                <p style="text-align: center; color: #666; margin-bottom: 2rem;">
                    El brazo es capaz de movimientos muy variados gracias a su estructura articulada.
                </p>
                <div class="educational-grid">
                    <div class="card"><strong>Cintura Escapular</strong><br>Clavícula + Escápula</div>
                    <div class="card"><strong>Brazo</strong><br>Húmero</div>
                    <div class="card"><strong>Antebrazo</strong><br>Radio + Cúbito</div>
                    <div class="card"><strong>Muñeca</strong><br>8 huesos del carpo</div>
                    <div class="card"><strong>Mano</strong><br>5 metacarpos + 14 falanges</div>
                </div>
                <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 3rem;">
                    <button class="btn btn-outline" onclick="app.goToPage('thorax')">← Atrás</button>
                    <button class="btn btn-primary" onclick="app.goToPage('upperLimbMovements')">Movimientos →</button>
                </div>
            </div>
        </div>
    `;
}
