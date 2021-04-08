if (process.env.NODE_ENV === "production") {
  module.exports = axios.create({
    baseURL: "https://fierce-beyond-06942.herokuapp.com/",
    timeout: 1000,
  });
} else {
  module.exports = axios.create({
    baseURL: "localhost:5000/",
    timeout: 1000,
  });
}
