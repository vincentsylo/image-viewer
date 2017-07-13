export default {
  save(key, data) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
      return true;
    } catch (e) {
      return false;
    }
  },

  load(key) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(localStorage.getItem(key)) : null;
    } catch (e) {
      return null;
    }
  },

  remove(key) {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (e) {
      return false;
    }
  },
};
