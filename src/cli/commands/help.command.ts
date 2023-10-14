import {Command} from './command.interface.js';
import {Chalk} from 'chalk';

const chalk = new Chalk();

export class HelpCommand implements Command {
  public getName(): string {
    return '--help';
  }

  public async execute(..._parameters: string[]): Promise<void> {
    console.info(`
        ${chalk.bold('Программа для подготовки данных для REST API сервера.')}
        ${chalk.red('Пример:')}
            cli.js --<command> [--arguments]
        ${chalk.red('Команды:')}
            --version:                   ${chalk.cyan('# выводит номер версии приложения')}
            --help:                      ${chalk.cyan('# печатает текст помощи')}
            --import <path>:             ${chalk.cyan('# импортирует данные из файла <path> с раширением .tsv')}
    `);
  }
}
