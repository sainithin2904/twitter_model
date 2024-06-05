exports.postTweet = async (req, res) => {
  try {
    const { text } = req.body;
    const tweet = new Tweet({ userId: req.user._id, text });
    await tweet.save();
    res.status(201).json({ message: 'Tweet posted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
