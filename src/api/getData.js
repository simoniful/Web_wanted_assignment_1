import axios from 'axios';
import { API, LIMIT } from '../utils/config';

export const getData = async (page) => {
  try {
    const res = await axios.get(`${API}`, {
      params: {
        _page: page,
        _limit: LIMIT,
      },
    });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
