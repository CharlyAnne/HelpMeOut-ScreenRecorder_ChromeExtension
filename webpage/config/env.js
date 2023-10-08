const ENV = {
  apiUrl:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/api'
      : 'https://seashell-app-4jicj.ondigitalocean.app/api',
};

export default ENV;
