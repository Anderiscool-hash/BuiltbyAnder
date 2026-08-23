const fs = require('node:fs');
const path = require('node:path');

const title = process.argv[2];
const details = process.argv.slice(3);

if (!title || details.length === 0) {
  console.error('Usage: npm run log-update -- "Update title" "Change one" "Change two"');
  process.exit(1);
}

const file = path.resolve(__dirname, '..', '..', 'updates.json');
const log = JSON.parse(fs.readFileSync(file, 'utf8'));
const previous = log.updates[0]?.version || '0.0.0';
const parts = previous.split('.').map(Number);
parts[2] += 1;

log.updates.unshift({
  date: new Date().toISOString().slice(0, 10),
  version: parts.join('.'),
  title,
  changes: details,
});

fs.writeFileSync(file, `${JSON.stringify(log, null, 2)}\n`);
console.log(`Added ${parts.join('.')} to updates.json`);
