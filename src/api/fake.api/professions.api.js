export const professions = {
    doctor: { _id: "67rdca3eeb7f6fgeed471818", name: "Доктор" },
    waiter: { _id: "67rdca3eeb7f6fgeed471820", name: "Официант" },
    physics: { _id: "67rdca3eeb7f6fgeed471814", name: "Физик" },
    engineer: { _id: "67rdca3eeb7f6fgeed471822", name: "Инженер" },
    actor: { _id: "67rdca3eeb7f6fgeed471824", name: "Актер" },
    cook: { _id: "67rdca3eeb7f6fgeed471829", name: "Повар" }
};

export const professionsArr = [
    { _id: "67rdca3eeb7f6fgeed471818", name: "Доктор" },
    { _id: "67rdca3eeb7f6fgeed471820", name: "Официант" },
    { _id: "67rdca3eeb7f6fgeed471814", name: "Физик" },
    { _id: "67rdca3eeb7f6fgeed471822", name: "Инженер" },
    { _id: "67rdca3eeb7f6fgeed471824", name: "Актер" },
    { _id: "67rdca3eeb7f6fgeed471829", name: "Повар" }
];

// // cинх метод
// const fetchAll = () => {
//   return professions;
// };

// АСИНХР метод
const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(() => {
            resolve(professionsArr);
        }, 2000);
    });

// сделал export default  функции чтобы чере АПИ доступ был только к этой функ, а не напрямую к переменной professions
export default { fetchAll };
