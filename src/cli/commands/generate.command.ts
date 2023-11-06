import {Command} from './command.interface.js';
import {TSVOfferGenerator} from '@/libs/offer-generator/index.js';
import {TSVFileWriter} from '@/libs/file-writer/index.js';
import {getErrorMessage} from '@/helpers/common';

export class GenerateCommand implements Command {
  private async write(filepath: string, offerCount: number) {
    const tsvOfferGenerator = new TSVOfferGenerator();
    const tsvFileWriter = new TSVFileWriter(filepath);

    for (let i = 0; i < offerCount; i++) {
      await tsvFileWriter.write(tsvOfferGenerator.generate());
    }
  }

  public getName(): string {
    return '--generate';
  }

  public async execute(...parameters: string[]): Promise<void> {
    const [count, filepath] = parameters;
    const offerCount = Number.parseInt(count, 10);

    try {
      await this.write(filepath, offerCount);
      console.info(`File ${filepath} was created!`);
    } catch (error: unknown) {
      console.error('Can\'t generate data');
      console.error(getErrorMessage(error));
    }
  }
}
