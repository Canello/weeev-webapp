export const makeParticipantsCount = (participantsCount) =>{
    switch (participantsCount) {
        case 0:
            return 'Ninguém, por enquanto...';
        case 1:
            return `${participantsCount} também quer`;
        default:
            return `${participantsCount} também querem`; 
    }
}