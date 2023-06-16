declare namespace NodeJS {
  export interface ProcessEnv {
    NEXT_PUBLIC_NEXT_ENV: 'development' | 'staging' | 'production'
  }
}
