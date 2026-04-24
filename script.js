// Mapeamento de exercícios para imagens (GIFs)
const exerciseImages = {
    'agachamento (com barra ou na smith)': {
        image: 'exercises/Barbell-Squat.gif',
        description: 'Exercício fundamental para desenvolvimento de pernas e glúteos. Mantenha as costas retas e desça até 90 graus.'
    },

    'leg curl sentada': {
        image: 'exercises/Seated-Leg-Curl.gif',
        description: 'Exercício para posterior de coxa. Foque na contração no topo do movimento.'
    },

    'extensora': {
        image: 'exercises/Leg-Extension.gif',
        description: 'Isolamento do quadríceps. Controle o movimento na descida e contraia no topo.'
    },

    'leg curl deitado': {
        image: 'exercises/Lying-Leg-Curl.gif',
        description: 'Exercício para posterior de coxa. Foque na contração no topo do movimento.'
    },

    'stiff com halteres': {
        image: 'exercises/Dumbbell-Romanian-Deadlift.gif',
        description: 'Trabalha posterior de coxa e glúteos. Mantenha as costas retas e pernas levemente flexionadas.'
    },

    'elevação pélvica unilateral': {
        image: 'exercises/Single-Leg-Dumbbell-Hip-Thrust.gif',
        description: 'Excelente para glúteos. Contraia fortemente no topo e controle a descida.'
    },

    'peso morto': {
        image: 'exercises/Barbell-Deadlift.gif',
        description: 'Exercício completo para posterior. Mantenha a barra próxima ao corpo durante todo movimento.'
    },

    'panturrilha na smith': {
        image: 'exercises/Smith-Calf-Raise.gif',
        description: 'Desenvolvimento das panturrilhas. Amplitude completa e pausa no topo.'
    },

    'pulldown': {
        image: 'exercises/Lat-Pulldown.gif',
        description: 'Trabalha dorsais. Puxe até a linha do peito mantendo o peito elevado.'
    },

    'supino com halter': {
        image: 'exercises/Dumbbell-Bench-Press.gif',
        description: 'Desenvolvimento de peitoral. Mantenha os cotovelos em um ângulo de 45 graus e controle a descida.'
    },

    'remada iso-lateral': {
        image: 'exercises/Iso-Lateral-Row.gif',
        description: 'Remada sentada para dorsais. Puxe com controle e evite balanços.'
    },

    'puxada alta no cabo': {
        image: 'exercises/Face-Pull.gif',
        description: 'Exercício para deltoides posteriores e saúde dos ombros. Puxe em direção à testa.'
    },

    'crucifixo sentado': {
        image: 'exercises/Seated-Chest-Fly.gif',
        description: 'Isolamento do peitoral. Mantenha uma leve flexão nos cotovelos e controle o movimento.'
    },

    'face pull': {
        image: 'exercises/Face-Pull.gif',
        description: 'Exercício para deltoides posteriores e saúde dos ombros. Puxe em direção à testa.'
    },

    'abertura invertida na máquina': {
        image: 'exercises/Reverse-Fly-Machine.gif',
        description: 'Trabalha deltoides posteriores. Mantenha o peito apoiado e controle o movimento.'
    },

    'búlgaro na smith': {
        image: 'exercises/Smith-Bulgarian.gif',
        description: 'Exercício para pernas e glúteos. Mantenha o quadril elevado e controle a descida.'
    },

    'elevação pélvica (máquina)': {
        image: 'exercises/Hip-Thrust-Machine.gif',
        description: 'Desenvolvimento de glúteos. Contraia fortemente no topo e controle a descida.'
    },

    'agachamento sumo com halter': {
        image: 'exercises/Sumo-Squat-Dumbbell.gif',
        description: 'Variante do agachamento que foca mais nos glúteos e adutores. Mantenha os pés mais afastados e controle o movimento.'
    },

    'glúteo kickbacks': {
        image: 'exercises/Cable-Donkey-Kickback.gif',
        description: 'Exercício para glúteos. Mantenha o core firme e controle o movimento.'
    },

    'prancha': {
        image: 'exercises/Plank.gif',
        description: 'Exercício para o core. Mantenha o corpo em linha reta e controle a respiração.'
    },

    'abdominal na polia': {
        image: 'exercises/Cable-Crunch.gif',
        description: 'Exercício para o abdômen. Puxe com controle e evite usar os braços para ajudar.'
    },

    'elevação de pernas deitada': {
        image: 'exercises/Lying-Leg-Raise.gif',
        description: 'Exercício para o abdômen inferior. Mantenha as pernas estendidas e controle a descida.'
    },

    'press ombro sentada com halter': {
        image: 'exercises/Seated-Dumbbell-Shoulder-Press.gif',
        description: 'Desenvolvimento de ombros. Mantenha os cotovelos ligeiramente à frente do corpo e controle o movimento.'
    },

    'elevação lateral com halter': {
        image: 'exercises/Dumbbell-Lateral-Raise.gif',
        description: 'Exercício para deltoides laterais. Mantenha uma leve flexão nos cotovelos e controle o movimento.'
    },

    'bicep curl na polia': {
        image: 'exercises/Cable-Curl.gif',
        description: 'Exercício para bíceps. Mantenha os cotovelos fixos e controle o movimento.'
    },

    'bicep concentrado': {
        image: 'exercises/Concentration-Curl.gif',
        description: 'Exercício para isolamento do bíceps. Sente-se e apoie o braço na perna, controlando o movimento.'
    },

    'extensão de tríceps overhead na polia': {
        image: 'exercises/Overhead-Cable-Triceps-Extension.gif',
        description: 'Exercício para tríceps. Mantenha os cotovelos próximos à cabeça e controle o movimento.'
    },

    'extensão de tríceps na polia': {
        image: 'exercises/Cable-Triceps-Pushdown.gif',
        description: 'Exercício para tríceps. Mantenha os cotovelos fixos e controle o movimento.'
    },


    'belt squat': {
        image: 'exercises/Belt-Squat.gif',
        description: 'Exercício para pernas e glúteos sem sobrecarregar a coluna. Mantenha o core firme e controle o movimento.'
    },

    'leg press unilateral': {
        image: 'exercises/Single-Leg-Press.gif',
        description: 'Exercício para pernas e glúteos. Mantenha o pé firme na plataforma e controle o movimento.'
    },

    'panturrilha na leg press': {
        image: 'exercises/Leg-Press-Calf-Raise.gif',
        description: 'Desenvolvimento das panturrilhas. Mantenha a amplitude completa e controle o movimento.'
    },

    'stiff unilateral com halter': {
        image: 'exercises/Dumbbell-Single-Leg-Romanian-Deadlift',
        description: 'Exercício para posterior de coxa e glúteos. Mantenha as costas retas e controle o movimento.'
    },

    'abdutora': {
        image: 'exercises/Hip-Abduction.gif',
        description: 'Exercício para abdutores. Mantenha o movimento controlado e evite usar o impulso.'
    },

    'adutora': {
        image: 'exercises/Hip-Adduction.gif',
        description: 'Exercício para adutores. Mantenha o movimento controlado e evite usar o impulso.'
    }

};

// Função para encontrar a chave do exercício
function findExerciseKey(exerciseName) {
    const name = exerciseName.toLowerCase();
    for (let key in exerciseImages) {
        if (name.includes(key)) {
            return key;
        }
    }
    return null;
}

// Função para abrir o modal
function openModal(exerciseName) {
    const modal = document.getElementById('exerciseModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalImage = document.getElementById('modalImage');
    const modalDescription = document.getElementById('modalDescription');
    
    const key = findExerciseKey(exerciseName);
    
    if (key && exerciseImages[key]) {
        modalTitle.textContent = exerciseName;
        modalImage.src = exerciseImages[key].image;
        modalDescription.textContent = exerciseImages[key].description;
        modal.classList.add('active');
    } else {
        modalTitle.textContent = exerciseName;
        modalImage.src = 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop';
        modalDescription.textContent = 'Imagem ilustrativa do exercício. Consulte seu treinador para execução correta.';
        modal.classList.add('active');
    }
}

// Função para fechar o modal
function closeModal() {
    const modal = document.getElementById('exerciseModal');
    modal.classList.remove('active');
}

// Fechar modal ao clicar fora dele
window.onclick = function(event) {
    const modal = document.getElementById('exerciseModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Adicionar evento de clique a todos os nomes de exercícios
document.addEventListener('DOMContentLoaded', function() {
    const exerciseNames = document.querySelectorAll('.exercise-name');
    exerciseNames.forEach(name => {
        name.addEventListener('click', function() {
            openModal(this.textContent);
        });
    });

});
