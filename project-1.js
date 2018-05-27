// Problem: We need a simple way to look at a user's badge count and JavaScript points
// Solution: Use Node.js to connect to Treehouse's API to get profile information to print out

// Require https module
const https = require('https');
const username = 'chalkers';

// Function to print message to console
function printMessage(username, badgeCount, points) {
  const message = `${username} had ${badgeCount} total badge(s) and ${points} points in JavaScript`;
  console.log(message);
}


// Connect to the API URL (https://teamtreehouse.com/username.json)
const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
  let body = '';
  response.on('data', data => {
    // Read the data
    body += data.toString();
  });
  response.on('end', () => {
    // Parse the data
    const profile = JSON.parse(body);
    printMessage(username, profile.badges.length, profile.points.JavaScript);
    // Print the data
    // console.log(profile.points.total);
  });
})
