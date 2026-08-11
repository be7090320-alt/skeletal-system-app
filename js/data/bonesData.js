// ============================================
// DATOS ANATÓMICOS - SISTEMA ESQUELÉTICO
// ============================================

const bonesData = {
    // CRÁNEO (8 huesos principales)
    skull: [
        {
            id: 'frontal',
            name: 'Hueso Frontal',
            region: 'Cráneo',
            type: 'Plano',
            location: 'Frente y bóveda craneal',
            function: 'Forma la frente, protege el lóbulo frontal del cerebro.',
            curiosity: 'Es el único hueso del cráneo que se osifica en dos mitades.',
            color: '#8e44ad',
            emoji: '⚪'
        },
        {
            id: 'parietal',
            name: 'Huesos Parietales',
            region: 'Cráneo',
            type: 'Plano',
            location: 'Parte superior y lateral del cráneo',
            function: 'Forman la bóveda craneal, protegen el cerebro.',
            curiosity: 'Son dos huesos (izquierdo y derecho).',
            color: '#8e44ad',
            emoji: '⚪'
        },
        {
            id: 'temporal',
            name: 'Huesos Temporales',
            region: 'Cráneo',
            type: 'Irregular',
            location: 'Lado inferior del cráneo',
            function: 'Protegen los oídos internos, contienen órganos del equilibrio.',
            curiosity: 'Contiene estructuras para la audición y el equilibrio.',
            color: '#8e44ad',
            emoji: '⚪'
        },
        {
            id: 'occipital',
            name: 'Hueso Occipital',
            region: 'Cráneo',
            type: 'Plano',
            location: 'Base y parte posterior del cráneo',
            function: 'Protege el cerebelo, contiene el foramen magno.',
            curiosity: 'El foramen magno es el agujero por donde pasa la médula espinal.',
            color: '#8e44ad',
            emoji: '⚪'
        },
        {
            id: 'esfenoides',
            name: 'Hueso Esfenoides',
            region: 'Cráneo',
            type: 'Irregular',
            location: 'Base media del cráneo',
            function: 'Forma la base craneal, aloja la glándula pituitaria.',
            curiosity: 'Es uno de los huesos más complejos del cuerpo.',
            color: '#8e44ad',
            emoji: '⚪'
        },
        {
            id: 'etmoides',
            name: 'Hueso Etmoides',
            region: 'Cráneo',
            type: 'Irregular',
            location: 'Entre los ojos, parte superior de la nariz',
            function: 'Soporta el bulbo olfatorio, forma parte de la nariz.',
            curiosity: 'Es muy frágil y contiene muchas pequeñas cavidades.',
            color: '#8e44ad',
            emoji: '⚪'
        },
        {
            id: 'maxilar',
            name: 'Huesos Maxilares',
            region: 'Cráneo',
            type: 'Irregular',
            location: 'Parte superior de la cara',
            function: 'Forman el paladar, alojan los dientes superiores.',
            curiosity: 'Son dos huesos fusionados que forman la mandíbula superior.',
            color: '#8e44ad',
            emoji: '⚪'
        },
        {
            id: 'mandibula',
            name: 'Mandíbula',
            region: 'Cráneo',
            type: 'Irregular',
            location: 'Parte inferior de la cara',
            function: 'Soporta los dientes inferiores, permite la masticación.',
            curiosity: 'Es el único hueso móvil del cráneo adulto.',
            color: '#8e44ad',
            emoji: '⚪'
        }
    ],

    // COLUMNA VERTEBRAL (33 vértebras en total)
    spine: [
        {
            id: 'cervical',
            name: 'Vértebras Cervicales',
            region: 'Columna',
            type: 'Irregular',
            location: 'Cuello (C1-C7)',
            function: 'Soportan la cabeza, permiten movimientos del cuello.',
            curiosity: 'Son 7 vértebras. La C1 se llama atlas y sostiene el cráneo.',
            color: '#3498db',
            emoji: '🔵'
        },
        {
            id: 'toraxica',
            name: 'Vértebras Torácicas',
            region: 'Columna',
            type: 'Irregular',
            location: 'Tórax (T1-T12)',
            function: 'Articuladas con las costillas, protegen órganos torácicos.',
            curiosity: 'Son 12 vértebras. Forman la caja torácica con las costillas.',
            color: '#3498db',
            emoji: '🔵'
        },
        {
            id: 'lumbar',
            name: 'Vértebras Lumbares',
            region: 'Columna',
            type: 'Irregular',
            location: 'Región lumbar (L1-L5)',
            function: 'Soportan gran parte del peso corporal.',
            curiosity: 'Son 5 vértebras grandes y robustas. Las más resistentes de la columna.',
            color: '#3498db',
            emoji: '🔵'
        },
        {
            id: 'sacro',
            name: 'Sacro',
            region: 'Columna',
            type: 'Irregular',
            location: 'Base de la columna',
            function: 'Forma la base de la columna, se articula con la pelvis.',
            curiosity: 'Es una fusión de 5 vértebras en el adulto.',
            color: '#3498db',
            emoji: '🔵'
        },
        {
            id: 'coccix',
            name: 'Cóccix',
            region: 'Columna',
            type: 'Irregular',
            location: 'Extremo distal de la columna',
            function: 'Vestigial, punto de inserción muscular.',
            curiosity: 'Es el vestigio de una cola antigua. Fusión de 3-4 vértebras.',
            color: '#3498db',
            emoji: '🔵'
        }
    ],

    // CAJA TORÁCICA
    thorax: [
        {
            id: 'esternon',
            name: 'Esternón',
            region: 'Tórax',
            type: 'Plano',
            location: 'Centro anterior del tórax',
            function: 'Protege el corazón y los pulmones, se articula con costillas.',
            curiosity: 'Es un hueso plano muy importante para la protección cardiopulmonar.',
            color: '#2ecc71',
            emoji: '🟢'
        },
        {
            id: 'costilla',
            name: 'Costillas',
            region: 'Tórax',
            type: 'Largo',
            location: 'Alrededor del tórax (12 pares)',
            function: 'Protegen órganos, participan en la respiración.',
            curiosity: 'Son 12 pares. Las 7 primeras son verdaderas, las 3 falsas y 2 flotantes.',
            color: '#2ecc71',
            emoji: '🟢'
        }
    ],

    // EXTREMIDAD SUPERIOR
    upperLimb: [
        {
            id: 'clavicula',
            name: 'Clavícula',
            region: 'Miembro Superior',
            type: 'Largo',
            location: 'Área entre el esternón y el hombro',
            function: 'Ancla el brazo al tronco, transmite fuerzas.',
            curiosity: 'Es el único hueso que articula el miembro superior con el tronco.',
            color: '#f39c12',
            emoji: '🟡'
        },
        {
            id: 'escapula',
            name: 'Escápula',
            region: 'Miembro Superior',
            type: 'Plano',
            location: 'Parte posterior del hombro',
            function: 'Articula el brazo con el tronco, punto de inserción muscular.',
            curiosity: 'También conocida como omóplato. Es muy móvil.',
            color: '#f39c12',
            emoji: '🟡'
        },
        {
            id: 'humero',
            name: 'Húmero',
            region: 'Miembro Superior',
            type: 'Largo',
            location: 'Brazo',
            function: 'Articula el hombro con el codo, permite movimientos del brazo.',
            curiosity: 'Es el único hueso del brazo. Muy resistente.',
            color: '#f39c12',
            emoji: '🟡'
        },
        {
            id: 'radio',
            name: 'Radio',
            region: 'Miembro Superior',
            type: 'Largo',
            location: 'Antebrazo (lado lateral)',
            function: 'Articula el codo y la muñeca, permite la pronación y supinación.',
            curiosity: 'Es el hueso más lateral del antebrazo. Gira sobre el cúbito.',
            color: '#f39c12',
            emoji: '🟡'
        },
        {
            id: 'cubito',
            name: 'Cúbito (Ulna)',
            region: 'Miembro Superior',
            type: 'Largo',
            location: 'Antebrazo (lado medial)',
            function: 'Articula el codo y la muñeca, forma la bisagra del codo.',
            curiosity: 'Es más largo que el radio. Tiene la apófisis olecraneana.',
            color: '#f39c12',
            emoji: '🟡'
        },
        {
            id: 'carpos',
            name: 'Carpos (Huesos del Carpo)',
            region: 'Miembro Superior',
            type: 'Corto',
            location: 'Muñeca',
            function: 'Articulan el antebrazo con la mano, permiten movimientos complejos.',
            curiosity: 'Son 8 huesos pequeños dispuestos en dos filas.',
            color: '#f39c12',
            emoji: '🟡'
        },
        {
            id: 'metacarpos',
            name: 'Metacarpos',
            region: 'Miembro Superior',
            type: 'Largo',
            location: 'Palma de la mano',
            function: 'Forman el esqueleto de la palma, permiten movimientos.',
            curiosity: 'Son 5 huesos largos pequeños numerados del 1 al 5.',
            color: '#f39c12',
            emoji: '🟡'
        },
        {
            id: 'falanges',
            name: 'Falanges',
            region: 'Miembro Superior',
            type: 'Largo',
            location: 'Dedos de la mano',
            function: 'Forman el esqueleto de los dedos, permiten el movimiento fino.',
            curiosity: 'Son 14 falanges en cada mano: 3 en cada dedo, 2 en el pulgar.',
            color: '#f39c12',
            emoji: '🟡'
        }
    ],

    // PELVIS
    pelvis: [
        {
            id: 'hueso-coxal',
            name: 'Hueso Coxal',
            region: 'Pelvis',
            type: 'Plano',
            location: 'Cada lado de la pelvis',
            function: 'Forma la pelvis, soporta órganos, articula las extremidades inferiores.',
            curiosity: 'Fusión de tres huesos: ilion, isquion y pubis.',
            color: '#e67e22',
            emoji: '🟠'
        },
        {
            id: 'ilion',
            name: 'Ilion',
            region: 'Pelvis',
            type: 'Plano',
            location: 'Parte superior de la pelvis',
            function: 'Soporta los órganos abdominales, punto de inserción muscular.',
            curiosity: 'Es la parte más superior y ancha del hueso coxal.',
            color: '#e67e22',
            emoji: '🟠'
        },
        {
            id: 'isquion',
            name: 'Isquion',
            region: 'Pelvis',
            type: 'Plano',
            location: 'Parte posteroinferior de la pelvis',
            function: 'Soporta el peso cuando estamos sentados.',
            curiosity: 'Es donde nos "sentamos". Muy resistente.',
            color: '#e67e22',
            emoji: '🟠'
        },
        {
            id: 'pubis',
            name: 'Pubis',
            region: 'Pelvis',
            type: 'Plano',
            location: 'Parte anterior inferior de la pelvis',
            function: 'Forma la symphysis pubis, protege órganos.',
            curiosity: 'Se une con el del lado opuesto formando la sínfisis púbica.',
            color: '#e67e22',
            emoji: '🟠'
        }
    ],

    // EXTREMIDAD INFERIOR
    lowerLimb: [
        {
            id: 'femur',
            name: 'Fémur',
            region: 'Miembro Inferior',
            type: 'Largo',
            location: 'Muslo',
            function: 'Soporta gran parte del peso, articula cadera y rodilla.',
            curiosity: '¡Es el hueso más largo y resistente del cuerpo humano!',
            color: '#e74c3c',
            emoji: '🔴'
        },
        {
            id: 'rotula',
            name: 'Rótula (Patela)',
            region: 'Miembro Inferior',
            type: 'Sesamoideo',
            location: 'Rodilla',
            function: 'Protege la articulación de la rodilla, mejora la biomecánica.',
            curiosity: 'Es un hueso sesamoideo incrustado en el tendón del cuádriceps.',
            color: '#e74c3c',
            emoji: '🔴'
        },
        {
            id: 'tibia',
            name: 'Tibia',
            region: 'Miembro Inferior',
            type: 'Largo',
            location: 'Pierna (lado medial)',
            function: 'Soporta gran peso, articula rodilla y tobillo.',
            curiosity: 'También conocida como espinilla. Es el segundo hueso más largo.',
            color: '#e74c3c',
            emoji: '🔴'
        },
        {
            id: 'fibula',
            name: 'Fíbula (Peroné)',
            region: 'Miembro Inferior',
            type: 'Largo',
            location: 'Pierna (lado lateral)',
            function: 'Articula rodilla y tobillo, punto de inserción muscular.',
            curiosity: 'Es más delgada que la tibia. Proporciona estabilidad.',
            color: '#e74c3c',
            emoji: '🔴'
        },
        {
            id: 'tarsos',
            name: 'Tarsos (Huesos del Tarso)',
            region: 'Miembro Inferior',
            type: 'Corto',
            location: 'Talón y tobillo',
            function: 'Forman la estructura del tobillo y pie.',
            curiosity: 'Son 7 huesos. El mayor es el calcáneo (talón).',
            color: '#e74c3c',
            emoji: '🔴'
        },
        {
            id: 'metatarsos',
            name: 'Metatarsos',
            region: 'Miembro Inferior',
            type: 'Largo',
            location: 'Planta del pie',
            function: 'Forman el esqueleto del pie, distribuyen el peso.',
            curiosity: 'Son 5 huesos numerados del 1 al 5 (medial a lateral).',
            color: '#e74c3c',
            emoji: '🔴'
        },
        {
            id: 'falanges-pie',
            name: 'Falanges del Pie',
            region: 'Miembro Inferior',
            type: 'Largo',
            location: 'Dedos del pie',
            function: 'Forman el esqueleto de los dedos, permiten movimiento.',
            curiosity: 'Son 14 en cada pie. 3 en cada dedo, 2 en el dedo gordo.',
            color: '#e74c3c',
            emoji: '🔴'
        }
    ]
};

// Función auxiliar para obtener todos los huesos
function getAllBones() {
    const allBones = [];
    Object.values(bonesData).forEach(category => {
        allBones.push(...category);
    });
    return allBones;
}

// Función para obtener un hueso por ID
function getBoneById(id) {
    const allBones = getAllBones();
    return allBones.find(bone => bone.id === id);
}

// Función para obtener huesos por región
function getBonesByRegion(region) {
    const allBones = getAllBones();
    return allBones.filter(bone => bone.region === region);
}
