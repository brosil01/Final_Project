/**
 * Password routes
 * Handles protected routes that require authentication
 */
const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const User = require('../models/Password');
const { isAuthenticated } = require('../middlewares/auth');

// Controller imports
const passwordController = require('../controllers/passwordController');

// All routes in this file require authentication
router.use(isAuthenticated);

// Password form validation rules
const passwordValidation = [
  body('email')
    .trim()
    .isEmail()
    .withMessage('Please enter a valid email address')
    .normalizeEmail(),
  body('password')
    .isLength({ min: 12 })
    .withMessage('Password must be at least 12 characters long')
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/)
    .withMessage('Password must include at least one uppercase letter, one lowercase letter, and one number'),
//  body('url')
//    .matches(/^[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/)
//    .withMessage('Must enter a valid URL')
];

// GET /passwords/list - User password page
router.get('/list', isAuthenticated, passwordController.getPasswords);

//Post /passwords/list   - Create New Password
router.post('/list',isAuthenticated, passwordValidation, passwordController.postPassword)
// POST /passwords/update - Update an existing password entry
router.post('/update', isAuthenticated, passwordController.updatePassword);
// Deleting the exisitng passwork entry
router.post('/delete', isAuthenticated, passwordController.deletePassword);

// POST /passwords/list - Update user settings
//router.post('/list', passwordController.updatePassword);

module.exports = router;