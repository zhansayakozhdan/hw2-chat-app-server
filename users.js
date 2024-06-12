const users = [];

/**
 * Adds a user to the chat room.
 * @param {Object} param0 - An object containing user id, name, and room.
 * @returns {Object} - Contains the user object or an error message.
 */
export const addUser = ({ id, name, room }) => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  const existingUser = users.find((user) => user.room === room && user.name === name);

  if (!name || !room) return { error: 'Username and room are required.' };
  if (existingUser) return { error: 'Username is taken.' };

  const user = { id, name, room };
  users.push(user);

  return { user };
};

/**
 * Removes a user from the chat room.
 * @param {string} id - The user id.
 * @returns {Object|undefined} - The removed user object or undefined if user not found.
 */
export const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) return users.splice(index, 1)[0];
  return undefined;
};

/**
 * Gets a user by id.
 * @param {string} id - The user id.
 * @returns {Object|undefined} - The user object or undefined if user not found.
 */
export const getUser = (id) => users.find((user) => user.id === id);

/**
 * Gets all users in a room.
 * @param {string} room - The room name.
 * @returns {Array} - An array of user objects in the room.
 */
export const getUsersInRoom = (room) => users.filter((user) => user.room === room);

export default { addUser, removeUser, getUser, getUsersInRoom };
