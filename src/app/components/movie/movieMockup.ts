import { IActor, IDirector, IGenre, IMovie } from './models'

let m1: IMovie = {
    title: 'Titanic',
    photoUrl: 'https://m.media-amazon.com/images/I/81gQE8MIsHL._AC_UF894,1000_QL80_.jpg',
    year: new Date(1998, 4, 3),
    rating: 7.2,
    price: 18,
    duration: 170,
    director: { firstName: "James", lastName: "Cameron" },
    actors: [
        { firstName: "Leonardo", lastName: "Di Caprio" },
        { firstName: "Kate", lastName: "Winslet" }

    ],
    genres: [{ kind: "Drama" }, { kind: "Romance" }]
}

let m2: IMovie = {
    title: 'Avatar',
    photoUrl: 'https://m.media-amazon.com/images/I/91N1lG+LBIS._AC_UF894,1000_QL80_.jpg',
    year: new Date(2009, 6, 5),
    rating: 8.5,
    price: 25,
    duration: 240,
    director: { firstName: "James", lastName: "Cameron" },
    actors: [
        { firstName: "Sam", lastName: "Worhtington" },
        { firstName: "Zoe", lastName: "Saldana" }

    ],
    genres: [{ kind: "Action" }, { kind: "Adventure" }, { kind: "Fantasy" }]
}

export let movies: IMovie[] = [m1, m2];





















