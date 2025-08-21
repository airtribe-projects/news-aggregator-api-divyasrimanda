// GET /users/preferences
export const getPreferences = (req, res) => {
  const { preferences } = req.user;
  res.status(200).json({ preferences });
};

// PUT /users/preferences
export const updatePreferences = async (req, res) => {
  const { preferences } = req.body;

  if (!preferences || !Array.isArray(preferences)) {
    return res.status(400).json({ message: 'Preferences must be an array' });
  }

  req.user.preferences = preferences;
  await req.user.save();

  res.status(200).json({ message: 'Preferences updated', preferences: req.user.preferences });
};
