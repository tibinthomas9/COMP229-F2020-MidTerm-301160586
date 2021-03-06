let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to our Book Model
let Book = require('../models/book');

let bookController = require('../controllers/book');



/* GET Route for the Book List page - READ Operation */
router.get('/', bookController.displayBookList);

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', bookController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', bookController.processAddPage);

/* GET Route for displaying the Edit page - UPDATE Operation */
router.get('/edit/:id', bookController.displayEditPage);

/* 
* POST Route for processing the Edit page - UPDATE Operation 
*/
router.post('/edit/:id', bookController.processEditPage);

/*  
*  GET to perform  Deletion - DELETE Operation 
*/
router.get('/delete/:id', bookController.performDelete);

// router.get('/delete/:id', async (req, res) => {
//     try {
//         const contact = await Book.findByIdAndDelete(req.params.id);

//         if (!contact) {
//             res.status(404).send();
//         }
//         res.redirect('/book-list');
//     } catch (e) {
//         res.status(500).send();
//     }


// })

// router.post('/delete/:id', async (req, res) => {
//     try {
//         const contact = await Book.findByIdAndDelete(req.params.id);

//         if (!contact) {
//             res.status(404).send();
//         }
//         res.redirect('/book-list');
//     } catch (e) {
//         res.status(500).send();
//     }
// })

// router.post('/edit/:id', async (req, res) => {
//     console.log(req.params.id);
//     console.log(req.body);
//     const book = await Book.findByIdAndUpdate(req.params.id, { name: req.body.name, author: req.body.author, published: req.body.published, description: req.body.description, price: req.body.price }, { new: true });
//     console.log(book);
//     res.redirect('/book-list');


// })

// router.get('/edit/:id', async (req, res) => {


//     const book = await Book.findById(req.params.id);

//     res.render('book/edit', {
//         book: book,
//         title: "Edit"
//     })
// })


module.exports = router;