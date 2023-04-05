// import { professions } from "./professions.api"; // был объект с объектами
import { professionsArr as professions } from "./professions.api"; // стал массив с объектами

const qualities = {
    tedious: {
        _id: "67rdca3eeb7f6fgeed471198",
        name: "Нудила",
        color: "primary"
    },
    strange: {
        _id: "67rdca3eeb7f6fgeed471100",
        name: "Странный",
        color: "secondary"
    },
    buller: {
        _id: "67rdca3eeb7f6fgeed4711012",
        name: "Троль",
        color: "success"
    },
    alcoholic: {
        _id: "67rdca3eeb7f6fgeed471101",
        name: "Алкоголик",
        color: "danger"
    },
    handsome: {
        _id: "67rdca3eeb7f6fgeed471102",
        name: "Красавчик",
        color: "info"
    },
    uncertain: {
        _id: "67rdca3eeb7f6fgeed471103",
        name: "Неуверенный",
        color: "dark"
    }
};

const users = [
    // было для объекта profession: professions.doctor,
    {
        _id: "67rdca3eeb7f6fgeed471815",
        name: "Джон Дориан",
        profession: professions[0],
        qualities: [qualities.tedious, qualities.uncertain, qualities.strange],
        completedMeetings: 36,
        rate: 2.5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471816",
        name: "Кокс",
        profession: professions[0],
        qualities: [qualities.buller, qualities.handsome, qualities.alcoholic],
        completedMeetings: 15,
        rate: 2.5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471817",
        name: "Боб Келсо",
        profession: professions[0],
        qualities: [qualities.buller],
        completedMeetings: 247,
        rate: 3.5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471818",
        name: "Рэйчел Грин",
        profession: professions[1],
        qualities: [qualities.uncertain],
        completedMeetings: 148,
        rate: 3.5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471819",
        name: "Шелдон Купер",
        profession: professions[2],
        qualities: [qualities.strange, qualities.tedious],
        completedMeetings: 37,
        rate: 4.6,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471820",
        name: "Леонард Хофстедтер",
        profession: professions[2],
        qualities: [qualities.strange, qualities.uncertain],
        completedMeetings: 147,
        rate: 3.5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471821",
        name: "Говард Воловиц",
        profession: professions[3],
        qualities: [qualities.strange, qualities.tedious],
        completedMeetings: 72,
        rate: 3.5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471822",
        name: "Никола Тесла",
        profession: professions[3],
        qualities: [qualities.handsome],
        completedMeetings: 72,
        rate: 5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471823",
        name: "Моника Геллер",
        profession: professions[4],
        qualities: [qualities.strange, qualities.uncertain],
        completedMeetings: 17,
        rate: 4.5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471824",
        name: "Рататуй",
        profession: professions[4],
        qualities: [qualities.handsome, qualities.buller],
        completedMeetings: 17,
        rate: 4.5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed47181f",
        name: "Джоуи Триббиани",
        profession: professions[5],
        qualities: [qualities.uncertain, qualities.strange],
        completedMeetings: 434,
        rate: 3.5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed47181r",
        name: "Брэд Питт",
        profession: professions[5],
        qualities: [qualities.handsome],
        completedMeetings: 434,
        rate: 5,
        bookmark: false
    }
];

// стал асинхр запрос
const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(users);
        }, 2000);
    });

export default {
    fetchAll
};

// был синхронный запрос
// export function fetchAll() {
//     return users;
// }
