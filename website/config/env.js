const ENV = {
  apiUrl:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:8080/api'
      : 'https://helpmeout-4ejz.onrender.com',
};

export default ENV;
