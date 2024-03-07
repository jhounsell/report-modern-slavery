//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here


//know-where-router

router.all('/know-where-router', function (req, res, next) {
    if ((req.session.data['know-where'] == 'yes')) {
      return res.redirect('/UK-question');
      next();
    } else {
      return (res.redirect('/Q1-end-page'))
    }});

//UK-question-router

router.all('/UK-question-router', function (req, res, next) {
    if ((req.session.data['uk-question'] === 'no')) {
      return res.redirect('/outside-UK');
      next();
    } else {
      return (res.redirect('/inside-UK'))
    }});