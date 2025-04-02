// This file is the starter of data for the app.
// Variable are used in seed/route.ts to insert first data in database

const users = [
    {
        idU: '',
        idLog: '',
        name: 'Paris2024',
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
        picto:'',
        title:'3x3 Basketball',
        description: '',
        date: '',
        location: '',
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
        picto:'',
        title:'Archery',
        description: '',
        date: '',
        location: '',
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
        title:'Artistic Swimming',
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
        title:'Athletics',
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
        title:'Beach Volleyball',
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
        title:'Boxing',
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
