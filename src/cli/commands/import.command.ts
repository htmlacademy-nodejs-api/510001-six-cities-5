import {Command} from './command.interface.js';
import {TSVFileReader} from '@/libs/file-reader/index.js';

export class ImportCommand implements Command {
  public getName(): string {
    return '--import';
  }

  public execute(...parameters: string[]): void {
    const [filename] = parameters;
    if (!filename) {
      return;
    }

    const fileReader = new TSVFileReader(filename.trim());

    try {
      fileReader.read();
    } catch (err) {

      if (!(err instanceof Error)) {
        throw err;
      }

      console.error(`Can't import data from file: ${filename}`);
      console.error(`Details: ${err.message}`);
    }
  }
}
