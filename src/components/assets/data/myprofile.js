/* eslint-disable import/no-anonymous-default-export */
import { v4 as uuidv4 } from 'uuid';
import profilePicture from '../pictures/avatar.png';

// Cet objet nous sert simuler la réponse que l'api nous enverrait après un login réussi
export default {
	id: uuidv4(),
	profilePicture: profilePicture,
	email: 'ilovecatwoman@gotham.com',
	password: 'parents',
	firstname: 'Bruce',
	name: 'Wayne',
	gender: 'Man',
	birthdate: {
		day: 30,
		month: 3,
		year: 1939,
	},
	job: 'Peacekeeper',
	description: "Freeze, t'es givré 🥶",
	address: 'Gotham City, New Jersey',
};
