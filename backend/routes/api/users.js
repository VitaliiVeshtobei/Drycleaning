const express = require('express');

const router = express.Router();

const {
  validationUser,
  validationUserSubscription,
  validationUserVerifyEmail,
} = require('../../middlewares/middlewareValidation');
const { auth } = require('../../middlewares/auth');
const { upload } = require('../../middlewares/upload');

const {
  signup,
  login,
  getCurrent,
  logout,
  updateSubscription,
  updateAvatar,
  verifyEmail,
  verify,
  getUsers,
  forgotPassword,
} = require('../../controllers/users');

router.post('/signup', signup);
router.post('/login', validationUser, login);
router.post('/current', auth, validationUser, getCurrent);
router.get('/logout', auth, logout);
router.get('/allUsers', getUsers);
router.get('/verify/:verificationToken', verifyEmail);
router.post('/verify', validationUserVerifyEmail, verify);
// router.patch('/:userID', validationUserSubscription, updateSubscription);
// router.patch('/avatars', auth, upload.single('avatar'), updateAvatar);
router.post('/forgot_password', forgotPassword);

module.exports = router;
