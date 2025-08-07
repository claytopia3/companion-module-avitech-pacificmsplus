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
	const labels_tooltip_str =
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
					tooltip: labels_tooltip_str,
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

		set_labels_action: {
			name: 'Set Labels',
			options: [
				{
					id: 'port1_str',
					type: 'textinput',
					label: 'Port 1',
					default: 'Port_1',
					tooltip: labels_tooltip_str,
				},
				{
					id: 'port2_str',
					type: 'textinput',
					label: 'Port 2',
					default: 'Port_2',
					tooltip: labels_tooltip_str,
				},
				{
					id: 'port3_str',
					type: 'textinput',
					label: 'Port 3',
					default: 'Port_3',
					tooltip: labels_tooltip_str,
				},
				{
					id: 'port4_str',
					type: 'textinput',
					label: 'Port 4',
					default: 'Port_4',
					tooltip: labels_tooltip_str,
				},
				{
					id: 'port5_str',
					type: 'textinput',
					label: 'Port 5',
					default: 'Port_5',
					tooltip: labels_tooltip_str,
				},
				{
					id: 'port6_str',
					type: 'textinput',
					label: 'Port 6',
					default: 'Port_6',
					tooltip: labels_tooltip_str,
				},
				{
					id: 'port7_str',
					type: 'textinput',
					label: 'Port 7',
					default: 'Port_7',
					tooltip: labels_tooltip_str,
				},
				{
					id: 'port8_str',
					type: 'textinput',
					label: 'Port 8',
					default: 'Port_8',
					tooltip: labels_tooltip_str,
				},
				{
					id: 'port9_str',
					type: 'textinput',
					label: 'Port 9',
					default: 'Port_9',
					tooltip: labels_tooltip_str,
				},
				{
					id: 'port10_str',
					type: 'textinput',
					label: 'Port 10',
					default: 'Port_10',
					tooltip: labels_tooltip_str,
				},
				{
					id: 'port11_str',
					type: 'textinput',
					label: 'Port 11',
					default: 'Port_11',
					tooltip: labels_tooltip_str,
				},
				{
					id: 'port12_str',
					type: 'textinput',
					label: 'Port 12',
					default: 'Port_12',
					tooltip: labels_tooltip_str,
				},
			],

			callback: async function (event) {
				const ip = self.config.host
				const port = self.config.port
				const url =
					'/cgi-bin/command.cgi?cmd=Info&param=[{"func":"set","type":"genlabel","sib_label":[{"port":1,"label":"' +
					event.options.port1_str +
					'"},{"port":2,"label":"' +
					event.options.port2_str +
					'"},{"port":3,"label":"' +
					event.options.port3_str +
					'"},{"port":4,"label":"' +
					event.options.port4_str +
					'"},{"port":5,"label":"' +
					event.options.port5_str +
					'"},{"port":6,"label":"' +
					event.options.port6_str +
					'"},{"port":7,"label":"' +
					event.options.port7_str +
					'"},{"port":8,"label":"' +
					event.options.port8_str +
					'"},{"port":9,"label":"' +
					event.options.port9_str +
					'"},{"port":10,"label":"' +
					event.options.port10_str +
					'"},{"port":11,"label":"' +
					event.options.port11_str +
					'"},{"port":12,"label":"' +
					event.options.port12_str +
					'"}]}]'
				httpSend(self, ip, port, url)
			},
		},
	})
}
