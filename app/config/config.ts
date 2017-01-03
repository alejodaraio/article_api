interface Config {
  name: string;
  port: number;
  env: string;
  version: string;
}

let env: string = process.env.NODE_ENV || 'production';
let port: number = process.env.NODE_PORT || 3000;

export let settings: Config = {
  name: 'Api',
  version: '0.0.0',
  port: port,
  env: env
};