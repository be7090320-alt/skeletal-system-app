// ============================================
// COMPONENTE BONE CARD - Tarjeta de Información
// ============================================

class BoneCardComponent {
    constructor(bone, containerId) {
        this.bone = bone;
        this.container = document.getElementById(containerId);
        this.render();
    }

    render() {
        const html = `
            <div class="bone-card animate-slide-up">
                <div class="bone-card-title">${this.bone.emoji} ${this.bone.name}</div>
                
                <div class="bone-card-label">Ubicación</div>
                <div class="bone-card-text">${this.bone.location}</div>
                
                <div class="bone-card-label">Tipo</div>
                <div class="bone-card-text">${this.bone.type}</div>
                
                <div class="bone-card-label">Función</div>
                <div class="bone-card-text">${this.bone.function}</div>
                
                <div class="bone-card-label">Dato Interesante</div>
                <div class="bone-card-text" style="font-style: italic; color: var(--color-secondary);">${this.bone.curiosity}</div>
            </div>
        `;
        this.container.innerHTML = html;
    }

    update(bone) {
        this.bone = bone;
        this.render();
    }

    clear() {
        this.container.innerHTML = '';
    }
}
