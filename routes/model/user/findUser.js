const User = require('../../../schema/User');

module.exports = async (user) => {
    const userData = await User.find(user);
    return userData;
} 
