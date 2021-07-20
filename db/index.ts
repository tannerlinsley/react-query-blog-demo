import fs from 'fs-extra';
import path from 'path';

const storeLocation = path.resolve(process.cwd(), 'store.json');

async function set(updater) {
  const file = await fs.readJSON(storeLocation);
  const newFile = updater(file);
  await fs.writeJSON(storeLocation, newFile, { spaces: 2 });
}

function get() {
  return fs.readJSON(storeLocation);
}

const dbGetterAndSetter = {
  set,
  get,
};

export default dbGetterAndSetter;
