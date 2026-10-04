// Writes examples/*/.env from each example's .env.example, filling in values
// from the root .env (the local source of truth). Keys missing from the root
// keep the value already in the example's .env, or the .env.example default.
import {existsSync, readdirSync, readFileSync, writeFileSync} from 'node:fs'
import {join} from 'node:path'
import {parseEnv} from 'node:util'

const root = join(import.meta.dirname, '..')
const rootEnvPath = join(root, '.env')

if (!existsSync(rootEnvPath)) {
	console.error('Missing .env in repo root. Copy .env.example to .env and fill it in.')
	process.exit(1)
}

const read = (path) => (existsSync(path) ? parseEnv(readFileSync(path, 'utf8')) : {})

// Expand ${VAR} references so aliases can point at a single value
const rootEnv = read(rootEnvPath)
for (const [key, value] of Object.entries(rootEnv)) {
	rootEnv[key] = value.replace(/\$\{(\w+)\}/g, (_, name) => rootEnv[name] ?? '')
}

const examplesDir = join(root, 'examples')
for (const name of readdirSync(examplesDir)) {
	const templatePath = join(examplesDir, name, '.env.example')
	if (!existsSync(templatePath)) continue

	const envPath = join(examplesDir, name, '.env')
	const existing = read(envPath)
	const template = readFileSync(templatePath, 'utf8')

	const output = template.replace(/^([\w.-]+)=.*$/gm, (line, key) => {
		const value = rootEnv[key] ?? existing[key]
		return value === undefined ? line : `${key}=${value}`
	})

	writeFileSync(envPath, output)
	console.log(`Synced examples/${name}/.env`)
}
