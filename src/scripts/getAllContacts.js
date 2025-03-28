import { readContacts } from '../utils/readContacts.js';

//export const getAllContacts = async () => { };

const getAllContacts = () => readContacts();

console.log(await getAllContacts());
