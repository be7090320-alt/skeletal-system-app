// ============================================
// PÁGINAS ADICIONALES - PARTES DEL ESQUELETO
// ============================================

// PÁGINA: ESQUELETO AXIAL Y APENDICULAR
function createAxialAppenticularPage() {
    return `
        <div class="page">
            <div class="page-content">
                <h2>🔀 Esqueleto Axial vs Apendicular</h2>
                <p style="text-align: center; color: #666; margin-bottom: 2rem;">
                    El esqueleto se divide en dos partes principales según su ubicación y función.
                </p>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-bottom: 2rem;">
                    <div class="card" style="border-left: 5px solid #3498db;">
                        <div class="card-title" style="color: #3498db;">⚙️ ESQUELETO AXIAL</div>
                        <div class="card-text">
                            <strong>Ubicación:</strong> Centro del cuerpo<br><br>
                            <strong>Componentes:</strong>
                            <ul style="margin-left: 1rem; margin-top: 0.5rem;">
                                <li>💀 Cráneo (8 huesos)</li>
                                <li>🦴 Columna Vertebral (33 vértebras)</li>
                                <li>🫁 Caja Torácica (12 pares de costillas + esternón)</li>
                            </ul>
                            <strong style="display: block; margin-top: 1rem;">Total: ~80 huesos</strong>
                        </div>
                    </div>

                    <div class="card" style="border-left: 5px solid #e74c3c;">
                        <div class="card-title" style="color: #e74c3c;">🔗 ESQUELETO APENDICULAR</div>
                        <div class="card-text">
                            <strong>Ubicación:</strong> Apéndices del cuerpo<br><br>
                            <strong>Componentes:</strong>
                            <ul style="margin-left: 1rem; margin-top: 0.5rem;">
                                <li>💪 Miembros Superiores (2)</li>
                                <li>🦵 Miembros Inferiores (2)</li>
                                <li>🦴 Cintura Escapular</li>
                                <li>🦴 Cintura Pélvica</li>
                            </ul>
                            <strong style="display: block; margin-top: 1rem;">Total: ~126 huesos</strong>
                        </div>
                    </div>
                </div>

                <div class="skeleton-container" style="margin: 2rem auto;">
                    <div id="axial-skeleton"></div>
                </div>

                <div class="region-selector" style="justify-content: center;">
                    <button class="region-btn active" onclick="highlightRegionInPage('Esqueleto Axial')">Ver Axial</button>
                    <button class="region-btn" onclick="highlightRegionInPage('Esqueleto Apendicular')">Ver Apendicular</button>
                    <button class="region-btn" onclick="highlightRegionInPage('Todos')">Ver Todos</button>
                </div>

                <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 3rem;">
                    <button class="btn btn-outline" onclick="app.goToPage('functions')">← Atrás</button>
                    <button class="btn btn-primary" onclick="app.goToPage('boneStructure')">Estructura del Hueso →</button>
                </div>
            </div>
        </div>
    `;
}

// PÁGINA: ESTRUCTURA DEL HUESO
function createBoneStructurePage() {
    return `
        <div class="page">
            <div class="page-content">
                <h2>🔬 Estructura de un Hueso Largo</h2>
                <p style="text-align: center; color: #666; margin-bottom: 2rem;">
                    Conoce las diferentes capas y componentes que forman un hueso largo típico.
                </p>

                <div class="card" style="margin-bottom: 2rem;">
                    <div style="text-align: center; font-size: 4rem; margin-bottom: 1rem;">🦴</div>
                    <p style="text-align: center; font-size: 1.2rem; color: #3498db;">
                        <strong>Ejemplo: Fémur (Muslo)</strong>
                    </p>
                </div>

                <div class="educational-grid">
                    <div class="educational-item" onclick="expandBoneDetail(this)" style="cursor: pointer;">
                        <div class="card-title" style="color: #e74c3c;">Periostio</div>
                        <div class="card-text">Membrana fibrosa externa que reviste el hueso.</div>
                        <div class="card-detail" style="display: none; margin-top: 1rem; padding-top: 1rem; border-top: 1px solid #eee;">
                            <strong>Función:</strong> Proteción, nutrición del hueso, inserción muscular y vascular.
                        </div>
                    </div>

                    <div class="educational-item" onclick="expandBoneDetail(this)" style="cursor: pointer;">
                        <div class="card-title" style="color: #e74c3c;">Hueso Compacto</div>
                        <div class="card-text">Capa densa y dura que forma la mayor parte de la diáfisis.</div>
                        <div class="card-detail" style="display: none; margin-top: 1rem; padding-top: 1rem; border-top: 1px solid #eee;">
                            <strong>Composición:</strong> Sistema Haversiano con conductos microscópicos (sistema óseo).
                        </div>
                    </div>

                    <div class="educational-item" onclick="expandBoneDetail(this)" style="cursor: pointer;">
                        <div class="card-title" style="color: #3498db;">Hueso Esponjoso</div>
                        <div class="card-text">Estructura porosa y ligera en las epífisis.</div>
                        <div class="card-detail" style="display: none; margin-top: 1rem; padding-top: 1rem; border-top: 1px solid #eee;">
                            <strong>Función:</strong> Reduce peso, aumenta superficie articular, contiene médula ósea roja.
                        </div>
                    </div>

                    <div class="educational-item" onclick="expandBoneDetail(this)" style="cursor: pointer;">
                        <div class="card-title" style="color: #27ae60;">Médula Ósea</div>
                        <div class="card-text">Tejido blando dentro del hueso que produce células sanguíneas.</div>
                        <div class="card-detail" style="display: none; margin-top: 1rem; padding-top: 1rem; border-top: 1px solid #eee;">
                            <strong>Tipos:</strong> Médula Roja (hematopoyesis) y Médula Amarilla (adipocitos).
                        </div>
                    </div>

                    <div class="educational-item" onclick="expandBoneDetail(this)" style="cursor: pointer;">
                        <div class="card-title" style="color: #9b59b6;">Cavidad Medular</div>
                        <div class="card-text">Espacio hueco dentro de la diáfisis que contiene médula ósea amarilla.</div>
                        <div class="card-detail" style="display: none; margin-top: 1rem; padding-top: 1rem; border-top: 1px solid #eee;">
                            <strong>Función:</strong> Almacenamiento de grasas y reducción de peso óseo.
                        </div>
                    </div>

                    <div class="educational-item" onclick="expandBoneDetail(this)" style="cursor: pointer;">
                        <div class="card-title" style="color: #f39c12;">Endostio</div>
                        <div class="card-text">Membrana fina que reviste la cavidad medular.</div>
                        <div class="card-detail" style="display: none; margin-top: 1rem; padding-top: 1rem; border-top: 1px solid #eee;">
                            <strong>Función:</strong> Remodelación ósea y fijación de médula ósea.
                        </div>
                    </div>
                </div>

                <div class="fact-box" style="margin-top: 2rem;">
                    El hueso no es una estructura inerte: contiene células vivas (osteocitos, osteoblastos, osteoclastos) que constantemente lo remodela.
                </div>

                <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 3rem;">
                    <button class="btn btn-outline" onclick="app.goToPage('axialAppendicular')">← Atrás</button>
                    <button class="btn btn-primary" onclick="app.goToPage('boneTypes')">Tipos de Huesos →</button>
                </div>
            </div>
        </div>
    `;
}

function expandBoneDetail(element) {
    const detail = element.querySelector('.card-detail');
    if (detail) {
        detail.style.display = detail.style.display === 'none' ? 'block' : 'none';
    }
}

function highlightRegionInPage(region) {
    // Esta función será implementada por el app.js principal
    console.log('Resaltando región:', region);
}
