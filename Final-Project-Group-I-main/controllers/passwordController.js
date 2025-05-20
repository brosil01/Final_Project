/**
 * Password Controller
 * Handles logic for password-related pages and actions
 */
const Password =require('../models/Password');
const User = require('../models/Password');

const { validationResult } = require('express-validator');
// controllers/passwordController.js

exports.deletePassword = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.body.id);
    res.redirect('/passwords/list');
  } catch (error) {
    console.error('Delete error:', error);
    res.status(500).send('Error deleting password');
  }
};

exports.updatePassword = async (req, res) => {
  const { id, url, email, password, note } = req.body;

  try {
    await Password.findByIdAndUpdate(id, {
      site: url,
      email,
      password,
      notes: note,
    });

    res.redirect('/passwords/list');
  } catch (error) {
    console.error('Update failed:', error);
    res.status(500).send('Failed to update password');
  }
};

/*
 * Displays passwords page
 */
exports.getPasswords = async (req, res) => {
    let list = await Password.find({ user: req.session.user.username });   
      
    //finds all passwords from the current user
        res.render('passwords/list', {
           title: 'Passwords',
           user: req.session.user,
           passwordList:list,
           
        
    });
}

exports.postPassword = async (req,res, next) =>{

      try {
        // Check for validation errors
        const errors = validationResult(req);
        /*if (!errors.isEmpty()) {
          return res.status(400).render('passwords/list', {
            title: 'Password',
            errors: errors.array(),
            formData: {
              email: req.body.email,
              password:req.body.password,
              url:req.body.url,
              note: req.body.note,
            }
          });
        }*/
    
        // Create new user
        const password = new Password({
          user: req.session.user.username,
          email: req.body.email,
          password: req.body.password,
          notes:req.body.note,
          site:req.body.url,
        });
    
        // Save user to database
        await password.save();
    
      
           
        
    
        
      } catch (error) {
        next(error);
      }

      let list = await Password.find({ user: req.session.user.username });   
      
      //finds all passwords from the current user
          res.render('passwords/list', {
             title: 'Passwords',
             user: req.session.user,
             passwordList:list,
            });
    };

