import dotenv from 'dotenv';
import path from 'path';

import setUpApp from 'src/app';

dotenv.config({ path: path.join(__dirname, '..', '.env') });

const port = process.env.PORT;
const app = setUpApp();

app.listen(port, () => {
  console.log(`⚡️ Server is running at http://localhost:${port}`);
});
