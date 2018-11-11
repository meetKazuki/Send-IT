import app from './src/app';

const port = process.env.PORT || 3000;

// launch app and listen to specified port
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
