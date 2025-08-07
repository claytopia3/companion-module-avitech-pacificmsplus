import { ModuleInstance } from './main.js'
import * as http from 'http'

export function httpSend(self: ModuleInstance, host: string, port: number, url: string): void {
	const options = {
		hostname: host,
		port: port || 80,
		path: url,
		method: 'GET',
	}

	const req = http.request(options, (res) => {
		let data = ''
		res.on('data', (chunk) => {
			data += chunk
		})
		res.on('end', () => {
			self.log('info', `HTTP Response: ${data}`)
		})
	})

	req.on('error', (err) => {
		self.log('error', `HTTP Request failed: ${err.message}`)
	})

	req.end()
}

export function UpdateActions(self: ModuleInstance): void {
	const omit_char_str =
		'Cannot contain spaces or any of the following characters: ' +
		'< > ! @ # & $ % ^ & * " ' +
		"' " +
		'` / ' +
		'\\ ' +
		', . : ; ? ='

	self.setActionDefinitions({
		get_info_action: {
			options: [
				{
					id: 'get_info_str',
					type: 'static-text',
					label: '',
					value: '',
				},
			],
			name: 'Get Device Info',
			callback: async function () {
				const ip = self.config.host
				const port = self.config.port
				const url = '/cgi-bin/command.cgi?cmd=Info&param=[{"func":"get","type":"device"}]'
				httpSend(self, ip, port, url)
			},
		},

		set_ip_action: {
			options: [
				{
					id: 'set_ip_str',
					type: 'textinput',
					label: 'IP Address',
					default: self.config.host,
				},
			],
			name: 'Set IP Address',
			callback: async function (event) {
				const ip = self.config.host
				const port = self.config.port
				const url =
					'/cgi-bin/command.cgi?cmd=Info&param=[{"func":"set","type":"ip","value":"' + event.options.set_ip_str + '"}]'
				httpSend(self, ip, port, url)
			},
		},

		set_machinename_action: {
			options: [
				{
					id: 'set_machinename_str',
					type: 'textinput',
					label: 'Machine Name',
					tooltip: omit_char_str,
				},
			],
			name: 'Set Machine Name',
			callback: async function (event) {
				const ip = self.config.host
				const port = self.config.port
				const url =
					'/cgi-bin/command.cgi?cmd=Info&param=[{"func":"set","type":"name","value":"' +
					event.options.set_machinename_str +
					'"}]'
				httpSend(self, ip, port, url)
			},
		},

		set_route_action: {
			name: 'Set Route',
			options: [
				{
					id: 'input_str',
					type: 'textinput',
					label: 'Input',
					default: '1',
				},
				{
					id: 'output_str',
					type: 'textinput',
					label: 'Output(s)',
					tooltip: 'Multiple outputs separated by commas (example: 1,2,3,4)',
					default: '1',
				},
			],
			callback: async function (event) {
				const ip = self.config.host
				const port = self.config.port
				const url =
					'/cgi-bin/command.cgi?cmd=Route&param=[{"func":"set","route":[{"input":' +
					event.options.input_str +
					',"output":[' +
					event.options.output_str +
					']}]}]'
				httpSend(self, ip, port, url)
			},
		},

		set_salvo_action: {
			name: 'Set Salvo',
			options: [
				{
					id: 'set_salvo_str',
					type: 'textinput',
					label: 'Salvo Name',
				},
			],

			callback: async function (event) {
				const ip = self.config.host
				const port = self.config.port
				const url = '/cgi-bin/command.cgi?cmd=Salvo&param=[{"func":"take","name":"' + event.options.salvo_str + '"}]'
				httpSend(self, ip, port, url)
			},
		},

		set_label_action: {
			name: 'Set Label',
			options: [
				{
					type: 'dropdown',
					id: 'port_dropdown',
					label: 'Port',
					default: '1',
					choices: [
						{ id: '1', label: '1' },
						{ id: '2', label: '2' },
						{ id: '3', label: '3' },
						{ id: '4', label: '4' },
						{ id: '5', label: '5' },
						{ id: '6', label: '6' },
						{ id: '7', label: '7' },
						{ id: '8', label: '8' },
						{ id: '9', label: '9' },
						{ id: '10', label: '10' },
						{ id: '11', label: '11' },
						{ id: '12', label: '12' },
						{ id: '13', label: '13' },
						{ id: '14', label: '14' },
						{ id: '15', label: '15' },
						{ id: '16', label: '16' },
						{ id: '17', label: '17' },
						{ id: '18', label: '18' },
						{ id: '19', label: '19' },
						{ id: '20', label: '20' },
						{ id: '21', label: '21' },
						{ id: '22', label: '22' },
						{ id: '23', label: '23' },
						{ id: '24', label: '24' },
						{ id: '25', label: '25' },
						{ id: '26', label: '26' },
						{ id: '27', label: '27' },
						{ id: '28', label: '28' },
					],
				},
				{
					id: 'port_str',
					type: 'textinput',
					label: 'Label',
					default: 'Port_1',
					tooltip: omit_char_str,
				},
			],

			callback: async function (event) {
				const ip = self.config.host
				const port = self.config.port
				const url =
					'/cgi-bin/command.cgi?cmd=Info&param=[{"func":"set","type":"genlabel","sib_label":[{"port":' +
					event.options.port_dropdown +
					',"label":"' +
					event.options.port_str +
					'"}]}]'
				httpSend(self, ip, port, url)
			},
		},
	})
}
