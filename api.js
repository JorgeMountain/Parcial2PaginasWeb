// api.js

// import axios from 'axios';

const API_ENDPOINT = 'http://ec2-3-138-183-128.us-east-2.compute.amazonaws.com:4010';
export default class Api {
  static async getUsers() {
    try {
      const response = await axios.get(`${API_ENDPOINT}/users`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(`Falló la petición GET: ${error}`);
      throw error;
    }
  }

  static async createUser(userData) {
    try {
      const response = await axios.post(`${API_ENDPOINT}/users`, userData);
      return response.data;
    } catch (error) {
      console.error(`Falló la petición POST: ${error}`);
      throw error;
    }
  }

  static async updateUser(userId, userData) {
    try {
      const response = await axios.put(`${API_ENDPOINT}/users/${userId}`, userData);
      return response.data;
    } catch (error) {
      console.error(`Falló la petición PUT: ${error}`);
      throw error;
    }
  }


}