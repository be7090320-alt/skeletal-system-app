// ============================================
// PÁGINA 1: PORTADA - COVER PAGE
// ============================================

function createCoverPage() {
    return `
        <div class="page" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
            <div class="page-content" style="text-align: center;">
                <div style="animation: slideInDown 0.8s ease-out;">
                    <h1 style="color: white; font-size: 4rem; margin-bottom: 1rem; text-shadow: 0 4px 20px rgba(0,0,0,0.3);">
                        🐴 SISTEMA ESQUELÉTICO HUMANO
                    </h1>
                    <p style="color: rgba(255,255,255,0.95); font-size: 1.5rem; margin-bottom: 3rem; font-weight: 500;">
                        "La estructura que sostiene, protege y permite el movimiento de nuestro cuerpo."
                    </p>
                </div>

                <div class="skeleton-container" style="max-width: 500px; animation: zoomIn 1s ease-out 0.3s both;">
                    <svg class="skeleton-svg" viewBox="0 0 200 500" xmlns="http://www.w3.org/2000/svg">
                        <!-- CRÁNEO -->
                        <circle cx="100" cy="40" r="20" fill="#8e44ad" class="animate-glow" style="animation-delay: 0s;"/>
                        <ellipse cx="75" cy="65" rx="15" ry="20" fill="#8e44ad" class="animate-glow" style="animation-delay: 0.2s;"/>
                        <ellipse cx="125" cy="65" rx="15" ry="20" fill="#8e44ad" class="animate-glow" style="animation-delay: 0.2s;"/>
                        <ellipse cx="55" cy="70" rx="12" ry="18" fill="#8e44ad" class="animate-glow" style="animation-delay: 0.3s;"/>
                        <ellipse cx="145" cy="70" rx="12" ry="18" fill="#8e44ad" class="animate-glow" style="animation-delay: 0.3s;"/>
                        <ellipse cx="100" cy="90" rx="18" ry="12" fill="#8e44ad" class="animate-glow" style="animation-delay: 0.4s;"/>
                        
                        <!-- COLUMNA -->
                        <circle cx="100" cy="125" r="5" fill="#3498db" class="animate-glow" style="animation-delay: 0.5s;"/>
                        <circle cx="100" cy="135" r="5" fill="#3498db" class="animate-glow" style="animation-delay: 0.55s;"/>
                        <circle cx="100" cy="145" r="5" fill="#3498db" class="animate-glow" style="animation-delay: 0.6s;"/>
                        <circle cx="100" cy="160" r="6" fill="#3498db" class="animate-glow" style="animation-delay: 0.65s;"/>
                        <circle cx="100" cy="175" r="6" fill="#3498db" class="animate-glow" style="animation-delay: 0.7s;"/>
                        <circle cx="100" cy="190" r="6" fill="#3498db" class="animate-glow" style="animation-delay: 0.75s;"/>
                        <circle cx="100" cy="210" r="7" fill="#3498db" class="animate-glow" style="animation-delay: 0.8s;"/>
                        <circle cx="100" cy="225" r="7" fill="#3498db" class="animate-glow" style="animation-delay: 0.85s;"/>
                        <path d="M 95 240 L 105 240 L 103 260 L 97 260 Z" fill="#3498db" class="animate-glow" style="animation-delay: 0.9s;"/>
                        <path d="M 99 260 L 101 260 L 100 275 Z" fill="#3498db" class="animate-glow" style="animation-delay: 0.95s;"/>
                        
                        <!-- COSTILLAS Y TÓRAX -->
                        <rect x="95" y="160" width="10" height="50" rx="2" fill="#2ecc71" class="animate-glow" style="animation-delay: 0.65s;"/>
                        <path d="M 95 165 Q 75 160 60 170" stroke="#2ecc71" stroke-width="3" fill="none" class="animate-glow" style="animation-delay: 0.68s;"/>
                        <path d="M 95 165 Q 125 160 140 170" stroke="#2ecc71" stroke-width="3" fill="none" class="animate-glow" style="animation-delay: 0.68s;"/>
                        <path d="M 95 180 Q 65 180 50 190" stroke="#2ecc71" stroke-width="3" fill="none" class="animate-glow" style="animation-delay: 0.73s;"/>
                        <path d="M 95 180 Q 135 180 150 190" stroke="#2ecc71" stroke-width="3" fill="none" class="animate-glow" style="animation-delay: 0.73s;"/>
                        
                        <!-- MIEMBROS SUPERIORES -->
                        <line x1="65" y1="185" x2="65" y2="230" stroke="#f39c12" stroke-width="4" class="animate-glow" style="animation-delay: 1s;"/>
                        <line x1="135" y1="185" x2="135" y2="230" stroke="#f39c12" stroke-width="4" class="animate-glow" style="animation-delay: 1s;"/>
                        
                        <!-- PELVIS -->
                        <ellipse cx="75" cy="265" rx="15" ry="20" fill="#e67e22" class="animate-glow" style="animation-delay: 1.1s;"/>
                        <ellipse cx="125" cy="265" rx="15" ry="20" fill="#e67e22" class="animate-glow" style="animation-delay: 1.1s;"/>
                        
                        <!-- MIEMBROS INFERIORES -->
                        <line x1="80" y1="290" x2="80" y2="360" stroke="#e74c3c" stroke-width="5" class="animate-glow" style="animation-delay: 1.2s;"/>
                        <line x1="120" y1="290" x2="120" y2="360" stroke="#e74c3c" stroke-width="5" class="animate-glow" style="animation-delay: 1.2s;"/>
                        <line x1="80" y1="370" x2="78" y2="430" stroke="#e74c3c" stroke-width="4" class="animate-glow" style="animation-delay: 1.3s;"/>
                        <line x1="120" y1="370" x2="118" y2="430" stroke="#e74c3c" stroke-width="4" class="animate-glow" style="animation-delay: 1.3s;"/>
                    </svg>
                </div>

                <button class="btn btn-primary btn-large" onclick="app.goToPage('introduction')" style="margin-top: 3rem; animation: slideInUp 0.8s ease-out 1.5s both;">
                    🐴 COMENZAR EXPLORACIÓN
                </button>
            </div>
        </div>
    `;
}
