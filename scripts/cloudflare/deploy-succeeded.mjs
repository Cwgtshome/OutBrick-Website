// Run only after the exact production build passes live acceptance.
import { handler } from '../../netlify/functions/deploy-succeeded.mjs';
await handler({ body: JSON.stringify({ payload: { context: 'production' } }) });
