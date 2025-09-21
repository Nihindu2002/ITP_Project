import express from "express";
import {
  getProfile,
  assignRole,
  editUser,
  createStaff,
  getStaffUsers,
  deleteStaffUser,
  toggleStaffStatus,
} from "../Controllers/authcontroller.js";   // ✅ Use authController instead of userController

import { protect, authorizeRoles } from "../middleware/authMiddleware.js";

const router = express.Router();

// ---------- Profile ----------
router.get("/me", protect, getProfile);

// ---------- Role management ----------
router.post("/assign-role", protect, authorizeRoles("SUPER_ADMIN"), assignRole);
router.put("/:userId", protect, authorizeRoles("SUPER_ADMIN"), editUser);

// ---------- Staff management ----------
router.post("/staff", protect, authorizeRoles("SUPER_ADMIN"), createStaff);
router.get("/staff", protect, authorizeRoles("SUPER_ADMIN"), getStaffUsers);
router.delete("/staff/:id", protect, authorizeRoles("SUPER_ADMIN"), deleteStaffUser);
router.put("/staff/:id/toggle", protect, authorizeRoles("SUPER_ADMIN"), toggleStaffStatus);

export default router;