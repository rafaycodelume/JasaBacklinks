const jwt = require("jsonwebtoken");

const AUTH_ERROR =
  "Unauthorised access attempt blocked. Verify your ADMIN_PASSWORD.";

function adminAuth(req, res, next) {
  const authorization = req.get("Authorization") || "";
  const [scheme, token] = authorization.split(" ");
  const secret = process.env.ADMIN_JWT_SECRET || process.env.JWT_SECRET;

  if (scheme !== "Bearer" || !token || !secret) {
    return res.status(401).json({ error: AUTH_ERROR });
  }

  try {
    const payload = jwt.verify(token, secret);
    if (!payload || payload.role !== "admin") {
      return res.status(401).json({ error: AUTH_ERROR });
    }

    req.admin = payload;
    return next();
  } catch (_error) {
    return res.status(401).json({ error: AUTH_ERROR });
  }
}

function optionalAdminAuth(req, res, next) {
  const authorization = req.get("Authorization") || "";
  const [scheme, token] = authorization.split(" ");
  const secret = process.env.ADMIN_JWT_SECRET || process.env.JWT_SECRET;
  if (scheme === "Bearer" && token && secret) {
    try {
      const payload = jwt.verify(token, secret);
      if (payload?.role === "admin") req.admin = payload;
    } catch (_error) {
      // Public blog reads remain public when no valid admin session is supplied.
    }
  }
  return next();
}

adminAuth.optional = optionalAdminAuth;
module.exports = adminAuth;
