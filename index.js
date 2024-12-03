import app from "./src/app.js"
import {PORT as port} from "./src/config/env.config.js"

const PORT = port || 3000

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`))