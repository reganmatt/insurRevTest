// custom-commander.d.ts

declare module "commander" {
  interface ICommand {
    version: () => string;
    file: string | undefined;
  }
}
