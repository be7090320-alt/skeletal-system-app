// ============================================
// COMPONENTE SKELETON - Esqueleto Interactivo
// ============================================

class SkeletonComponent {
    constructor(containerId, options = {}) {
        this.container = document.getElementById(containerId);
        this.options = {
            interactive: true,
            animated: true,
            showLabels: false,
            highlightRegion: null,
            ...options
        };
        this.selectedBone = null;
        this.onBoneSelect = options.onBoneSelect || (() => {});
        this.bones = getAllBones();
        this.render();
    }

    render() {
        this.container.innerHTML = this.createSkeletonSVG();
        if (this.options.interactive) {
            this.attachEventListeners();
        }
    }

    createSkeletonSVG() {
        return `
            <svg class="skeleton-svg" viewBox="0 0 200 500" xmlns="http://www.w3.org/2000/svg">
                <!-- CRÁNEO -->
                <g id="skull-group">
                    <circle id="frontal" class="bone" cx="100" cy="40" r="20" fill="#8e44ad" data-bone="frontal"/>
                    <ellipse id="parietal-l" class="bone" cx="75" cy="65" rx="15" ry="20" fill="#8e44ad" data-bone="parietal"/>
                    <ellipse id="parietal-r" class="bone" cx="125" cy="65" rx="15" ry="20" fill="#8e44ad" data-bone="parietal"/>
                    <ellipse id="temporal-l" class="bone" cx="55" cy="70" rx="12" ry="18" fill="#8e44ad" data-bone="temporal"/>
                    <ellipse id="temporal-r" class="bone" cx="145" cy="70" rx="12" ry="18" fill="#8e44ad" data-bone="temporal"/>
                    <ellipse id="occipital" class="bone" cx="100" cy="90" rx="18" ry="12" fill="#8e44ad" data-bone="occipital"/>
                    <rect id="maxilar" class="bone" x="80" y="95" width="40" height="15" rx="3" fill="#8e44ad" data-bone="maxilar"/>
                    <path id="mandibula" class="bone" d="M 85 110 Q 100 115 115 110" stroke="#8e44ad" stroke-width="3" fill="none" data-bone="mandibula"/>
                </g>

                <!-- COLUMNA VERTEBRAL -->
                <g id="spine-group">
                    <circle class="bone" cx="100" cy="125" r="5" fill="#3498db" data-bone="cervical"/>
                    <circle class="bone" cx="100" cy="135" r="5" fill="#3498db" data-bone="cervical"/>
                    <circle class="bone" cx="100" cy="145" r="5" fill="#3498db" data-bone="cervical"/>
                    <circle class="bone" cx="100" cy="160" r="6" fill="#3498db" data-bone="toraxica"/>
                    <circle class="bone" cx="100" cy="175" r="6" fill="#3498db" data-bone="toraxica"/>
                    <circle class="bone" cx="100" cy="190" r="6" fill="#3498db" data-bone="toraxica"/>
                    <circle class="bone" cx="100" cy="210" r="7" fill="#3498db" data-bone="lumbar"/>
                    <circle class="bone" cx="100" cy="225" r="7" fill="#3498db" data-bone="lumbar"/>
                    <path id="sacro" class="bone" d="M 95 240 L 105 240 L 103 260 L 97 260 Z" fill="#3498db" data-bone="sacro"/>
                    <path id="coccix" class="bone" d="M 99 260 L 101 260 L 100 275 Z" fill="#3498db" data-bone="coccix"/>
                </g>

                <!-- CAJA TORÁCICA -->
                <g id="thorax-group">
                    <rect id="esternon" class="bone" x="95" y="160" width="10" height="50" rx="2" fill="#2ecc71" data-bone="esternon"/>
                    <path class="bone" d="M 95 165 Q 75 160 60 170" stroke="#2ecc71" stroke-width="3" fill="none" data-bone="costilla"/>
                    <path class="bone" d="M 95 165 Q 125 160 140 170" stroke="#2ecc71" stroke-width="3" fill="none" data-bone="costilla"/>
                    <path class="bone" d="M 95 180 Q 65 180 50 190" stroke="#2ecc71" stroke-width="3" fill="none" data-bone="costilla"/>
                    <path class="bone" d="M 95 180 Q 135 180 150 190" stroke="#2ecc71" stroke-width="3" fill="none" data-bone="costilla"/>
                    <path class="bone" d="M 95 195 Q 55 200 40 210" stroke="#2ecc71" stroke-width="2.5" fill="none" data-bone="costilla"/>
                    <path class="bone" d="M 95 195 Q 145 200 160 210" stroke="#2ecc71" stroke-width="2.5" fill="none" data-bone="costilla"/>
                </g>

                <!-- MIEMBRO SUPERIOR IZQUIERDO -->
                <g id="left-upper-limb">
                    <circle id="clavicula-l" class="bone" cx="75" cy="145" r="8" fill="#f39c12" data-bone="clavicula"/>
                    <ellipse id="escapula-l" class="bone" cx="65" cy="170" rx="10" ry="15" fill="#f39c12" data-bone="escapula"/>
                    <line class="bone" x1="65" y1="185" x2="65" y2="230" stroke="#f39c12" stroke-width="4" data-bone="humero"/>
                    <line class="bone" x1="65" y1="230" x2="60" y2="270" stroke="#f39c12" stroke-width="3" data-bone="radio"/>
                    <line class="bone" x1="65" y1="230" x2="70" y2="270" stroke="#f39c12" stroke-width="3" data-bone="cubito"/>
                    <g class="bone" data-bone="carpos">
                        <rect x="57" y="270" width="16" height="8" fill="#f39c12"/>
                    </g>
                    <line class="bone" x1="60" y1="278" x2="50" y2="300" stroke="#f39c12" stroke-width="2" data-bone="metacarpos"/>
                    <line class="bone" x1="65" y1="278" x2="65" y2="300" stroke="#f39c12" stroke-width="2" data-bone="metacarpos"/>
                    <line class="bone" x1="70" y1="278" x2="80" y2="300" stroke="#f39c12" stroke-width="2" data-bone="metacarpos"/>
                </g>

                <!-- MIEMBRO SUPERIOR DERECHO -->
                <g id="right-upper-limb">
                    <circle id="clavicula-r" class="bone" cx="125" cy="145" r="8" fill="#f39c12" data-bone="clavicula"/>
                    <ellipse id="escapula-r" class="bone" cx="135" cy="170" rx="10" ry="15" fill="#f39c12" data-bone="escapula"/>
                    <line class="bone" x1="135" y1="185" x2="135" y2="230" stroke="#f39c12" stroke-width="4" data-bone="humero"/>
                    <line class="bone" x1="135" y1="230" x2="140" y2="270" stroke="#f39c12" stroke-width="3" data-bone="radio"/>
                    <line class="bone" x1="135" y1="230" x2="130" y2="270" stroke="#f39c12" stroke-width="3" data-bone="cubito"/>
                    <g class="bone" data-bone="carpos">
                        <rect x="127" y="270" width="16" height="8" fill="#f39c12"/>
                    </g>
                    <line class="bone" x1="140" y1="278" x2="150" y2="300" stroke="#f39c12" stroke-width="2" data-bone="metacarpos"/>
                    <line class="bone" x1="135" y1="278" x2="135" y2="300" stroke="#f39c12" stroke-width="2" data-bone="metacarpos"/>
                    <line class="bone" x1="130" y1="278" x2="120" y2="300" stroke="#f39c12" stroke-width="2" data-bone="metacarpos"/>
                </g>

                <!-- PELVIS -->
                <g id="pelvis-group">
                    <ellipse id="hueso-coxal-l" class="bone" cx="75" cy="265" rx="15" ry="20" fill="#e67e22" data-bone="hueso-coxal"/>
                    <ellipse id="hueso-coxal-r" class="bone" cx="125" cy="265" rx="15" ry="20" fill="#e67e22" data-bone="hueso-coxal"/>
                    <path d="M 85 280 Q 100 285 115 280" stroke="#e67e22" stroke-width="2" fill="none"/>
                </g>

                <!-- MIEMBRO INFERIOR IZQUIERDO -->
                <g id="left-lower-limb">
                    <line class="bone" x1="80" y1="290" x2="80" y2="360" stroke="#e74c3c" stroke-width="5" data-bone="femur"/>
                    <circle id="rotula-l" class="bone" cx="80" cy="365" r="4" fill="#e74c3c" data-bone="rotula"/>
                    <line class="bone" x1="80" y1="370" x2="78" y2="430" stroke="#e74c3c" stroke-width="4" data-bone="tibia"/>
                    <line class="bone" x1="80" y1="370" x2="82" y2="430" stroke="#e74c3c" stroke-width="3" data-bone="fibula"/>
                    <rect class="bone" x="76" y="430" width="8" height="10" fill="#e74c3c" data-bone="tarsos"/>
                    <line class="bone" x1="75" y1="440" x2="70" y2="460" stroke="#e74c3c" stroke-width="2" data-bone="metatarsos"/>
                    <line class="bone" x1="80" y1="440" x2="80" y2="460" stroke="#e74c3c" stroke-width="2" data-bone="metatarsos"/>
                </g>

                <!-- MIEMBRO INFERIOR DERECHO -->
                <g id="right-lower-limb">
                    <line class="bone" x1="120" y1="290" x2="120" y2="360" stroke="#e74c3c" stroke-width="5" data-bone="femur"/>
                    <circle id="rotula-r" class="bone" cx="120" cy="365" r="4" fill="#e74c3c" data-bone="rotula"/>
                    <line class="bone" x1="120" y1="370" x2="118" y2="430" stroke="#e74c3c" stroke-width="4" data-bone="tibia"/>
                    <line class="bone" x1="120" y1="370" x2="122" y2="430" stroke="#e74c3c" stroke-width="3" data-bone="fibula"/>
                    <rect class="bone" x="116" y="430" width="8" height="10" fill="#e74c3c" data-bone="tarsos"/>
                    <line class="bone" x1="115" y1="440" x2="110" y2="460" stroke="#e74c3c" stroke-width="2" data-bone="metatarsos"/>
                    <line class="bone" x1="120" y1="440" x2="120" y2="460" stroke="#e74c3c" stroke-width="2" data-bone="metatarsos"/>
                </g>
            </svg>
        `;
    }

    attachEventListeners() {
        const bones = this.container.querySelectorAll('.bone');
        bones.forEach(bone => {
            bone.addEventListener('mouseenter', (e) => this.onBoneHover(e));
            bone.addEventListener('mouseleave', (e) => this.onBoneLeave(e));
            bone.addEventListener('click', (e) => this.onBoneClick(e));
        });
    }

    onBoneHover(event) {
        event.target.style.filter = 'brightness(1.2)';
        event.target.style.stroke = 'white';
        event.target.style.strokeWidth = '1';
    }

    onBoneLeave(event) {
        if (this.selectedBone !== event.target.dataset.bone) {
            event.target.style.filter = 'brightness(1)';
            event.target.style.stroke = 'none';
        }
    }

    onBoneClick(event) {
        const boneName = event.target.dataset.bone;
        const bone = getBoneById(boneName);
        
        if (bone) {
            // Remover clase active de todos los huesos
            this.container.querySelectorAll('.bone').forEach(b => {
                b.classList.remove('active');
            });

            // Agregar clase active al hueso seleccionado
            event.target.classList.add('active');
            this.selectedBone = boneName;

            // Llamar callback con la información del hueso
            this.onBoneSelect(bone);
        }
    }

    highlightBone(boneId) {
        const elements = this.container.querySelectorAll(`[data-bone="${boneId}"]`);
        elements.forEach(el => {
            el.classList.add('active');
            el.style.filter = 'brightness(1.4) saturate(1.3)';
        });
    }

    removeBoneHighlight(boneId) {
        const elements = this.container.querySelectorAll(`[data-bone="${boneId}"]`);
        elements.forEach(el => {
            el.classList.remove('active');
            el.style.filter = 'brightness(1)';
        });
    }

    highlightRegion(region) {
        const bones = getAllBones();
        const regionBones = bones.filter(b => b.region === region).map(b => b.id);
        
        // Hacer el resto transparente
        this.container.querySelectorAll('.bone').forEach(el => {
            const boneId = el.dataset.bone;
            if (!regionBones.includes(boneId)) {
                el.style.opacity = '0.2';
            } else {
                el.style.opacity = '1';
                el.style.filter = 'brightness(1.2)';
            }
        });
    }

    resetHighlight() {
        this.container.querySelectorAll('.bone').forEach(el => {
            el.style.opacity = '1';
            el.style.filter = 'brightness(1)';
            el.classList.remove('active');
        });
    }

    animateBuildingSkeleton() {
        const bones = this.container.querySelectorAll('.bone');
        bones.forEach((bone, index) => {
            bone.style.animation = 'none';
            setTimeout(() => {
                bone.style.animation = `skeletonBuild 0.6s ease-out forwards`;
            }, index * 100);
        });
    }
}
