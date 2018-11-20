import Doctors from '../model/doctor';

export async function getAllUsers() {
  return await Doctors.getAllDoctors();
}
