import AsyncStorage from '@react-native-async-storage/async-storage';

export default class AStorage {
    static async getItem(key: string) {
        try {
            return await AsyncStorage.getItem(key)
        } catch (e) {
            throw new Error(JSON.stringify(e));
        }
    }
    static async setItem(key: string, value: string) {
        try {
            await AsyncStorage.setItem(key, value)
        } catch (e) {
            throw new Error(JSON.stringify(e));
        }
    }
    static async removeItem(key: string) {
        try {
            return await AsyncStorage.removeItem(key)
        } catch (e) {
            throw new Error(JSON.stringify(e));
        }
    }
}