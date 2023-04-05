import users from "./fake.api/user.api";
// import * as users from "./fake.api/user.api";
import professions from "./fake.api/professions.api";

// это глоб объект через который идут все данные с фейк Апи
const API = {
    users,
    professions
};

// API.users.fetchAll().then((data) => console.log(data)); [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
export default API;
