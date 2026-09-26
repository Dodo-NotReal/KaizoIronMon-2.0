import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(process.cwd());
const target = path.resolve(root, 'dist');
if (target === root || path.dirname(target) !== root || path.basename(target) !== 'dist') {
	throw new Error(`Refusing to remove unexpected build path: ${target}`);
}
fs.rmSync(target, { recursive: true, force: true });
