#!/usr/bin/env node
import 'module-alias/register.js'; // 👈 add this one
import {CLIApplication, HelpCommand, ImportCommand, VersionCommand} from '@/cli/index.js';

function bootstrap() {
  const cliApplication = new CLIApplication();
  cliApplication.registerCommands([
    new HelpCommand(),
    new VersionCommand(),
    new ImportCommand(),
  ]);

  cliApplication.processCommand(process.argv);
}

bootstrap();
