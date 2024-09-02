const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line


router.post('/cookie-router', (req, res) => {
  // var return = res.locals.prevURL;
  res.redirect(res.locals.prevURL);
})


router.post('/cookie-page-router', (req, res) => {
  // var return = res.locals.prevURL;
  req.session.data['success'] = "true";
  req.session.data['cookies']['hidden'] = 'yes'; //need to manually add to hide the cookie banner
  res.redirect(res.locals.prevURL);
})



router.all('/apply/cookies', (req, res, next) => {
  console.log('apply');
  if (req.session.data['success'] == "true" ){
  req.session.data['success'] = ''; //sets cookie page to switch off after success
  }
  next();
})

router.post('/apply/1-router', (req, res) =>{
  if (req.session.data['fullName'] && req.session.data['email'] && req.session.data['date-of-birth-day'] && req.session.data['date-of-birth-month'] && req.session.data['date-of-birth-year'] ){
    req.session.data['errors'] = '';
    res.redirect('1a');
  }
 else {
   req.session.data['errors'] = "true";
   res.redirect('1');
 }
})

router.post('/apply/1a-router', (req, res) =>{
  if (req.session.data['country'] ){
    req.session.data['errors'] = '';
    res.redirect('2');
  }
 else {
   req.session.data['errors'] = "true";
   res.redirect('1a');
 }
})

router.post('/apply/2-router', (req, res) =>{
  if (req.session.data['types'] ){
    req.session.data['errors'] = '';
    res.redirect('3');
  }
 else {
   req.session.data['errors'] = "true";
   res.redirect('2');
 }
})

router.post('/apply/3-router', (req, res) =>{
  if (req.session.data['moreDetail'] ){
    req.session.data['errors'] = '';
    res.redirect('4');
  }
 else {
   req.session.data['errors'] = "true";
   res.redirect('3');
 }
})

router.post('/apply/4-router', (req, res) =>{
  if (req.session.data['upload'] ){

    req.session.data['errors'] = '';
      if (req.session.data['upload'] == "Yes" ){
    res.redirect('5');
  } else {
    res.redirect('check-your-answers');
  }
  }
 else {
   req.session.data['errors'] = "true";
   res.redirect('4');
 }
})

router.post('/apply/5-router', (req, res) =>{
  if (req.session.data['fileUpload1'] ){
    req.session.data['errors'] = '';

    res.redirect('check-your-answers');
  }
 else {
   req.session.data['errors'] = "true";
   res.redirect('5');
 }
})


router.post('/account/tasks/upload-router', (req, res) =>{
  if (req.session.data['fileUpload2'] ){
    req.session.data['errors'] = '';
    req.session.data['upload-success'] = "true";
    return res.redirect('index');
  }
 else {
   req.session.data['errors'] = "true";
   return res.redirect('upload')
 }
})

router.all('/account/tasks/index', (req, res, next) =>{

  if (req.session.data['fileUpload2'] && (req.session.data['upload-success'] == 'true') ) {
    console.log('true');
  } else {
    console.log('false');
  }
  req.session.data['upload-success'] = ''; //always wipe after next session

next();

})





module.exports = router
