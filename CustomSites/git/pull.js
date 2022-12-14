import { promisify } from 'util';
import { exec } from 'child_process';
const execSync = promisify(exec);

console.log('Git auto pull is running');

export default {
  run: async res => {
    let data;

    try { data = await execSync('git pull', { maxBuffer: 1024 * 600 }); }
    catch (err) { return console.error(`GIT PULL\nExec error: ${err}`); }

    console.log(
      'GIT PULL\n',
      `out: ${data.stdout?.trim() || 'none'}\n`,
      `err: ${data.stderr?.trim() || 'none'}\n`
    );

    return res?.sendStatus?.(200);
  }
};