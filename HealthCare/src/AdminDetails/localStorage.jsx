const admin = [
  {
    id: 1,
    firstName: "Gaurav",
    email: "2203031050198@paruluniversity.ac.in",
    password: "198",
  },
  {
    id: 2,
    firstName: "Anuj Khandelwal",
    email: "2203031050288@paruluniversity.ac.in",
    password: "288",
  },
  {
    id: 3,
    firstName: "Aaditya Jangir",
    email: "2203031050004@paruluniversity.ac.in",
    password: "004",
  },
  {
    id: 4,
    firstName: "Swati Bais",
    email: "2203031050686@paruluniversity.ac.in",
    password: "686",
  },
  {
    id: 5,
    firstName: "Admin",
    email: "admin@gmail.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  return JSON.parse(localStorage.getItem("admin")) || [];
};
