import knex from 'knex';
import knewfile from '../knexfile';

const knexConfig = knex(knewfile);

const GET_DOCTORS = 'SELECT * FROM doctors';

class Doctors {
  static async getAllDoctors() {
    let results = await knexConfig.raw(GET_DOCTORS);
    return results;
  }
}

export default Doctors;
