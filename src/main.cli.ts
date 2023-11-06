#!/usr/bin/env node
import 'module-alias/register.js'; // 👈 add this one
import {CLIApplication, HelpCommand, ImportCommand, VersionCommand} from '@/cli/index.js';
import {GenerateCommand} from '@/cli/commands/generate.command';

function bootstrap() {
  const cliApplication = new CLIApplication();
  cliApplication.registerCommands([
    new HelpCommand(),
    new VersionCommand(),
    new ImportCommand(),
    new GenerateCommand()
  ]);

  cliApplication.processCommand(process.argv);
}

bootstrap();
