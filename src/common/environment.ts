export enum Environment {
  DEVELOPMENT = 'development',
  PRODUCTION = 'production'
}

export function detectEnvironment(env: string | undefined): Environment {
  if (env === Environment.PRODUCTION) return Environment.PRODUCTION
  else return Environment.DEVELOPMENT
}

export const environment = detectEnvironment(process.env.NODE_ENV)
