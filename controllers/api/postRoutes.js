const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      userId: req.session.userId,
    });
    res.status(200).json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    // delete post with specific id
    const postData = await Post.destroy({
      where: {
        id: req.params.id
      },
    });
    // error handling if user enters an invalid post id to delete
    if (!postData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }
    res.status(200).json(postData);
    // error handling
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {
  try {
    // updating the post with specific id
    const [affectedRows] = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    // if updated text is greater than 0
    if (affectedRows > 0) {
      res.status(200).end();
      // otherwise if it's blank, not a valid update
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
