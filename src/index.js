const { port, env } = require('./config/env');
const app = require('./config/express');

app.listen(port, () => console.log(`server started on port ${port} (${env})`));
