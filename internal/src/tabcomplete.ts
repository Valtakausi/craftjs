import { CommandSender } from 'org.bukkit.command';

export function tabComplete(
  sender: CommandSender,
  label: string,
  args: string[],
) {
  const [currentArg] = args.slice(-1);
  const parts = currentArg.split('.');
  const obj = parts
    .slice(0, -1)
    .reduce((obj, cur) => (obj ?? {})[cur], global as any);

  const properties = [];
  for (const key in obj) {
    properties.push(key);
  }

  return properties.map((p) => `${parts.slice(0, -1).concat(p).join('.')}`);
}