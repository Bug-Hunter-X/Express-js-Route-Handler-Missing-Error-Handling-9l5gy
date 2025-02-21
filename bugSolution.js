const express = require('express');
const app = express();
app.get('/users/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    // Check if the user ID is valid. Replace this with your actual validation logic
    if (isNaN(userId) || userId <= 0) {
      return res.status(400).json({ error: 'Invalid user ID' });
    }
    // ... other code to fetch user data from database ...
    const user = await db.getUser(userId); // Example
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.send({ user });
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.listen(3000, () => console.log('Server listening on port 3000'));