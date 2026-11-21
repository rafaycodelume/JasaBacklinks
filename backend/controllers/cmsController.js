const jwt = require("jsonwebtoken");

const AUTH_ERROR =
  "Unauthorised access attempt blocked. Verify your ADMIN_PASSWORD.";

function login(req, res) {
  const configuredPassword = process.env.ADMIN_PASSWORD;
  if (!configuredPassword) {
    console.error("Admin login is not configured: ADMIN_PASSWORD is missing.");
    return res
      .status(500)
      .json({ error: "Admin login is not configured on server." });
  }

  const { password } = req.body || {};
  if (typeof password !== "string" || password !== configuredPassword) {
    return res.status(401).json({ error: AUTH_ERROR });
  }

  const secret = process.env.ADMIN_JWT_SECRET;
  if (!secret) {
    console.error("Admin login is not configured: ADMIN_JWT_SECRET is missing.");
    return res
      .status(500)
      .json({ error: "Admin login is not configured on server." });
  }

  try {
    const token = jwt.sign({ role: "admin" }, secret, { expiresIn: "7d" });
    return res.status(200).json({ success: true, token });
  } catch (error) {
    console.error("Could not create admin login token:", error);
    return res
      .status(500)
      .json({ error: "Admin login is not configured on server." });
  }
}

function me(req, res) {
  return res.json({ success: true, admin: true });
}

function logout(req, res) {
  return res.json({ success: true });
}

module.exports = { login, me, logout };
