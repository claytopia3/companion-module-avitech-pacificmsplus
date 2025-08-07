import { Regex, type SomeCompanionConfigField } from '@companion-module/base'

export interface ModuleConfig {
	model: string
	host: string
	port: number
}

export function GetConfigFields(): SomeCompanionConfigField[] {
	return [
		{
			type: 'dropdown',
			id: 'model',
			label: 'Device Model',
			default: 'modelA',
			choices: [
				{ id: 'modelA', label: 'Model A' },
				{ id: 'modelB', label: 'Model B' },
			],
			width: 2,
		},
		{
			type: 'textinput',
			id: 'host',
			label: 'Target IP',
			width: 8,
			regex: Regex.IP,
		},
		{
			type: 'number',
			id: 'port',
			label: 'Target Port',
			width: 4,
			min: 1,
			max: 65535,
			default: 80,
		},
	]
}
