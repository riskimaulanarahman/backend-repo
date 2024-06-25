import { db } from '../config/firebaseConfig';

export interface UserData {
  name: string;
  email: string;
  age: number;
  hobby: string;
}

const USERS_COLLECTION = 'users';

// Mengambil data pengguna
export const fetchUserData = async (userId: string) => {
  try {
    const userRef = db.collection(USERS_COLLECTION).doc(userId);
    const doc = await userRef.get();
    if (doc.exists) {
      return doc.data();
    } else {
      throw new Error('User not found');
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw new Error('Error fetching user data');
  }
};

export const updateUserData = async (userId: string, data: UserData) => {
  try {
    const userRef = db.collection(USERS_COLLECTION).doc(userId);
    await userRef.set(data, { merge: true }); // Gunakan merge: true untuk mengupdate data tanpa menghapus field yang ada
    return { success: true, message: 'User data updated successfully' };
  } catch (error) {
    console.error('Error updating user data:', error);
    throw new Error('Error updating user data');
  }
};