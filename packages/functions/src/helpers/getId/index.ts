const getId = () => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";

  for (let i = 0; i < 20; i += 1) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return id;
};

export default getId;
