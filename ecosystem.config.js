module.exports = {
  apps: [
    {
      name: 'dataapi',
      script: './dist-server/app.js',
      env: {
        NODE_ENV: 'production',
      },
      instances: 4,
      exec_mode: 'cluster',
      max_restarts: 50,
      max_memory_restart: '1024M',
    },
  ],
};
