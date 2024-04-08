const allowedIP = '122.165.67.11';
const blockedIP = '49.207.179.138';
// var ip = require('ip');
// 192.168.29.96
// console.log(ip,'ip');
const IPMiddleware = (req, res, next) => {
  console.log(req.socket.localAddress ,'chekkkkkk'); // get the
  const clientIP = req.socket.localAddress;
  console.log(clientIP,'checkkk');

  if (clientIP === allowedIP) {
    // Allow access if the client's IP matches the allowed IP
    next();
  } else if (clientIP === blockedIP) {
    // Block access if the client's IP matches the blocked IP
    return res.status(403).json({ message: 'Access forbidden from this IP address', success: false });
  } else {
    // For any other IP addresses, you can choose to allow or block access
    // For simplicity, we'll block access for all other IP addresses here
    return res.status(403).json({ message: 'Access forbidden from this IP address', success: false });
  }
};

module.exports = IPMiddleware;
