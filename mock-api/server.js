const jsonServer = require('json-server');
const express = require('express');
const path = require('path');

const app = express();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Serve gambar statis
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/compressed_images', express.static(path.join(__dirname, 'compressed_images')));

// Middleware umum
app.use(middlewares);

// Middleware untuk intercept respons dan modifikasi imageUrl
app.use('/api', (req, res, next) => {
  // Cek apakah param _compressed=true
  const shouldRewrite = req.query._compressed === 'true';

  if (!shouldRewrite) return router(req, res, next);

  // Tangkap respons .send dan ubah imageUrl jika perlu
  const originalSend = res.send;
  res.send = function (body) {
    try {
      let data = JSON.parse(body);

      const rewriteUrl = (obj) => {
        if (Array.isArray(obj)) {
          obj.forEach(rewriteUrl);
        } else if (typeof obj === 'object' && obj !== null) {
          for (const key in obj) {
            if (key === 'imageUrl' && typeof obj[key] === 'string') {
              const base = path.basename(obj[key], path.extname(obj[key]));
              obj[key] = `http://localhost:3001/compressed_images/${base}.webp`;
            } else {
              rewriteUrl(obj[key]);
            }
          }
        }
      };

      rewriteUrl(data);
      return originalSend.call(this, JSON.stringify(data));
    } catch (err) {
      console.error('✖ Gagal parse dan rewrite imageUrl:', err);
      return originalSend.call(this, body);
    }
  };

  router(req, res, next);
});

// Jalankan server di port 3001
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`🚀 Mock API running at http://localhost:${PORT}`);
});
