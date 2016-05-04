import app from './';

after(function(done) {
  console.log('CLOSE APPLICATION')
  app.angularFullstack.on('close', () => done());
  app.angularFullstack.close();
});
