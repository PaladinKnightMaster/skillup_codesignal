import { createClient } from 'redis';

const client = createClient();

client.on('error', console.error);
await client.connect();

async function updateBalance(userId, increment) {
  while (true) {
    try {
      await client.watch(`balance:${userId}`);
      const balance = parseInt(await client.get(`balance:${userId}`), 10) || 0;

      const pipeline = client.multi();
      pipeline.set(`balance:${userId}`, balance + increment);

      const result = await pipeline.exec();
      if (result) break;
    } catch (err) {
      if (err.message === 'EXECABORT Transaction discarded because of previous errors.') {
        console.log('Retrying transaction:', err.message);
        continue;
      } else {
        throw err;
      }
    }
  }
}

await client.set('balance:1', 100);
await updateBalance(1, 50);

const updatedBalance = await client.get('balance:1');
console.log(`Updated balance for user 1: ${updatedBalance}`);

await client.disconnect();