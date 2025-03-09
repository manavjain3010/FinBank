const jwt = require("jsonwebtoken");

const generateAdminsToken = (id, email, role) => {
  return jwt.sign({ id, email, role }, 'https://jwt.io/#debugger-io?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik1hbmF2IGphaW4iLCJpYXQiOjE1MTYyMzkwMjJ9.03VL-tBGzg-xpkOMvqCOVdph88p5Se1qeLVnD2U-Xbw');
};

module.exports = {
  generateAdminsToken,
};
