const router = require('express').Router();
let DC = require('../models/dc.model');

router.route('/').get((req, res) => {
  DC.find()
    .then(dcMovies => res.json(dcMovies))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const movieTitle = req.body.movieTitle;
  const director = req.body.director;
  const releaseDate = Date.parse(req.body.releaseDate);
  const boxOffice = req.body.boxOffice;
  const rottenTomatoes = req.body.rottenTomatoes;

  const newDcMovie = new DC({
    movieTitle,
    director,
    releaseDate,
    boxOffice,
    rottenTomatoes,
  });

  newDcMovie.save()
    .then(() => res.json('DC Movie added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  DC.findById(req.params.id)
    .then(dcMovie => res.json(dcMovie))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  DC.findByIdAndDelete(req.params.id)
    .then(() => res.json('DC Movie deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  DC.findById(req.params.id)
    .then(dcMovie => {
      dcMovie.movieTitle = req.body.movieTitle;
      dcMovie.director = req.body.director;
      dcMovie.releaseDate = Date.parse(req.body.releaseDate);
      dcMovie.boxOffice = req.body.boxOffice;
      dcMovie.rottenTomatoes = req.body.rottenTomatoes;
      

      dcMovie.save()
        .then(() => res.json('DC Movie updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;