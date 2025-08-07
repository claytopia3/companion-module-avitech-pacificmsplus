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
			default: 'model1',
			choices: [
				{ id: 'model1', label: 'MS-1' },
				{ id: 'model2', label: 'MS-4' },
			],
			width: 2,
		},
		{
			type: 'textinput',
			id: 'host',
			label: 'Target IP',
			width: 4,
			regex: Regex.IP,
		},
		{
			type: 'number',
			id: 'port',
			label: 'Target Port',
			width: 2,
			min: 1,
			max: 65535,
			default: 80,
		},
	]
}
