self.addEventListener('install', (event) => {
  console.log('PWA Installed');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('PWA Activated');
});
