// data.js (ES module)
import fs from 'fs';
import path from 'path';
// Read data from 'data.json'
// const data = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../data.json'), 'utf-8'));
// const users = data.users;

// export { users };

// userController.js (ES module)
export const createUser = (req, res,next) => {
  console.log(req.body);
  users.push(req.body);
  res.status(201).json(req.body);
  next();
};

export const getAllUsers = (req, res,next) => {
  res.json(users);
  next()
};

export const getUser = (req, res,next) => {
  const id = +req.params.id;
  const user = users.find((p) => p.id === id);
  res.json(user);
  next();
};

export const replaceUser = (req, res,next) => {
  const id = +req.params.id;
  const userIndex = users.findIndex((p) => p.id === id);
  users.splice(userIndex, 1, { ...req.body, id: id });
  res.status(201).json();
  next()
};

export const updateUser = (req, res,next) => {
  const id = +req.params.id;
  const userIndex = users.findIndex((p) => p.id === id);
  const user = users[userIndex];
  users.splice(userIndex, 1, { ...user, ...req.body });
  res.status(201).json();
  next();
};

export const deleteUser = (req, res,next) => {
  const id = +req.params.id;
  const userIndex = users.findIndex((p) => p.id === id);
  const user = users[userIndex];
  users.splice(userIndex, 1);
  res.status(201).json(user);
  next();
};
