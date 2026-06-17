const https = require('https');
const fs = require('fs');

https.get('https://dawaai.pk/medicine/panadol-500mg-150.html', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    fs.writeFileSync('dawaai.html', data);
    console.log('Saved to dawaai.html');
  });
}).on('error', (err) => {
  console.log('Error: ' + err.message);
});
