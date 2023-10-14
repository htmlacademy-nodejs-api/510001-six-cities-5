import {Command} from './command.interface.js';
import chalk from 'chalk';


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
            --import ${chalk.blue('<path>')}:             ${chalk.cyan(`# импортирует данные из файла ${chalk.blue('<path>')} с раширением .tsv`)}
    `);
  }
}
