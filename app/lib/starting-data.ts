// This file is the starter of data for the app.
// Variable are used in seed/route.ts to insert first data in database

const users = [
    {
        idU: '',
        idLog: '',
        name: 'Admin_Paris2024',
        surname: 'Olympics',
        email: 'orga-paris2024@olympics.fr',
        password: 'JOParis2024_Admin',
        nationality: 'France',
        admin: true
    },
];

const events = [
    {
        id:'',
        picto:'3x3BasketBall',
        title:'3x3 Basketball',
        description: 'Meeting of three players against three players on a midground with one basket. Match of ten minutes playing or 21 pts for a team to win.',
        date: '',
        location: 'Place de la Concorde',
        adressNum: '',
        adressRoad: '',
        city: 'Paris',
        zipCode: '75000',
        stocks: '2000',
        sells: '',
        price: ''
    },
    {
        id:'',
        picto:'archery',
        title:'Archery',
        description: 'Competition of archery where coutries are represent by team of one shot players. They must shoot in a target.',
        date: '',
        location: 'Les Invalides',
        adressNum: '',
        adressRoad: '',
        city: 'Nanterre',
        zipCode: '92000',
        stocks: '2500',
        sells: '',
        price: ''
    },
    {
        id:'',
        picto:'',
        title:'Artistic Gymnastics',
        description: 'Performance of gymnasts where spectacular and artistics choregrahies meet physical gym\'s movements.',
        date: '',
        location: 'Arena Bercy',
        adressNum: '',
        adressRoad: '',
        city: '',
        zipCode: '',
        stocks: '',
        sells: '',
        price: ''
    },
    {
        id:'',
        title:'Artistic Swimming',
        description: '',
        date: '',
        location: 'Paris La Défence Arena',
        adressNum: '',
        adressRoad: '',
        city: '',
        zipCode: '92000',
        stocks: '',
        sells: '',
        price: ''
    },
    {
        id: '',
        picto: '',
        title: 'Athletics',
        description: '',
        date: '',
        location: 'Stade de France',
        adressNum: '',
        adressRoad: '',
        city: 'Boulogne-Billancourt',
        zipCode: '93000',
        stocks: '',
        sells: '',
        price: ''
    },
    {
        id:'',
        picto:'',
        title:'Badminton',
        description: '',
        date: '',
        location: '',
        adressNum: '',
        adressRoad: '',
        city: '',
        zipCode: '',
        stocks: '',
        sells: '',
        price: ''
    },
    {
        id:'',
        picto:'',
        title:'Basketball',
        description: '',
        date: '',
        location: 'Arena Bercy',
        adressNum: '',
        adressRoad: '',
        city: 'Paris',
        zipCode: '72000',
        stocks: '',
        sells: '',
        price: ''
    },
    {
        id:'',
        picto:'',
        title:'Beach Volleyball',
        description: '',
        date: '',
        location: 'Stade Tour Eiffel',
        adressNum: '',
        adressRoad: '',
        city: 'Paris',
        zipCode: '72000',
        stocks: '',
        sells: '',
        price: ''
    },
    {
        id:'',
        picto:'',
        title:'Boxing',
        description: '',
        date: '',
        location: 'Stade Roland Garros',
        adressNum: '',
        adressRoad: '',
        city: 'Paris',
        zipCode: '72000',
        stocks: '',
        sells: '',
        price: ''
    },
];

const offers = [
    {
        id: '',
        name: 'Solo',
        description: 'Vous souhaitez réserver des e-tickets pour UNE seule personne à l\'occasion de vos événements sportfif favoris ? Voici l\'offre Solo pour profitez des Jeux Olympiques Paris 2024 en toute tranquilité.',
        ticketsQty: 1,
        promo: 0,
    },
    {
        id: '',
        name: 'Duo',
        description: 'Avec un.e ami.e, un.e collègue, en couple ou avec un.e membre de votre famille, choississez l\'offre Duo pour regrouper vos e-tickets et vos paiement en une seule fois.',
        ticketsQty: 2,
        promo: 0,
    },
    {
        id: '',
        name: 'Family',
        description: 'Le sport ça se vie en famille ! Choisissez l\'offre Family pour regrouper vos places et vos achats en un seul e-ticket par événement sportif. Assister aux Jeux Olympiques Paris 2024 l\'esprit tranquille.',
        ticketsQty: 4,
        promo: 0,
    },
];

export { users, events, offers };
