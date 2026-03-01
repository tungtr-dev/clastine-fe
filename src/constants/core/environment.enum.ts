interface ViteTypeOptions {}

type ImportMetaEnvFallbackKey = 'strictImportMetaEnv' extends keyof ViteTypeOptions ? never : string

interface ImportMetaEnv extends Record<ImportMetaEnvFallbackKey, unknown> {
	BASE_URL: string;
	MODE: string;
	DEV: boolean;
	PROD: boolean;
	SSR: boolean;
}

interface ViteImportMeta extends ImportMeta {
	readonly env: ImportMetaEnv;
}

const env = (import.meta as ViteImportMeta).env;

export const Environment = {
	ServerURI: env.VITE_SERVER_URI
} as const;