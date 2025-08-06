import { ModuleInstance } from './main.js'
import * as http from 'http'

export function UpdateActions(self: ModuleInstance): void {
	self.setActionDefinitions({
		route_action: {
			name: 'Routing',
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
				const urlPath =
					'/cgi-bin/command.cgi?cmd=Route&param=[{"func":"set","route":[{"input":' +
					event.options.input_str +
					',"output":[' +
					event.options.output_str +
					']}]}]'

				const options = {
					hostname: ip,
					port: self.config.port || 80,
					path: urlPath,
					method: 'GET',
				}

				const req = http.request(options, (res) => {
					let data = ''
					res.on('data', (chunk) => {
						data += chunk
					})
					res.on('end', () => {
						self.log('info', `Response: ${data}`)
					})
				})

				req.on('error', (err) => {
					self.log('error', `HTTP Request failed: ${err.message}`)
				})

				req.end()
			},
		},

		salvo_action: {
			name: 'Salvo',
			options: [
				{
					id: 'salvo_str',
					type: 'textinput',
					label: 'Salvo Name',
				},
			],
			callback: async function (event) {
				const ip = self.config.host
				const urlPath =
					'/cgi-bin/command.cgi?cmd=Salvo&param=[{"func":"take","name":"' + event.options.salvo_str + '"}]'

				const options = {
					hostname: ip,
					port: self.config.port || 80,
					path: urlPath,
					method: 'GET',
				}

				const req = http.request(options, (res) => {
					let data = ''
					res.on('data', (chunk) => {
						data += chunk
					})
					res.on('end', () => {
						self.log('info', `Response: ${data}`)
					})
				})

				req.on('error', (err) => {
					self.log('error', `HTTP Request failed: ${err.message}`)
				})

				req.end()
			},
		},

		labels_action: {
			name: 'Set Labels',
			options: [
				{
					id: 'port1_str',
					type: 'textinput',
					label: 'Port 1',
					default: 'Port_1',
					tooltip:
						'Cannot contain spaces or any of the following characters: ' +
						'< > ! @ # & $ % ^ & * " ' +
						"' " +
						'` / ' +
						'\\ ' +
						', . : ; ? =',
				},
				{
					id: 'port2_str',
					type: 'textinput',
					label: 'Port 2',
					default: 'Port_2',
					tooltip:
						'Cannot contain spaces or any of the following characters: ' +
						'< > ! @ # & $ % ^ & * " ' +
						"' " +
						'` / ' +
						'\\ ' +
						', . : ; ? =',
				},
				{
					id: 'port3_str',
					type: 'textinput',
					label: 'Port 3',
					default: 'Port_3',
					tooltip:
						'Cannot contain spaces or any of the following characters: ' +
						'< > ! @ # & $ % ^ & * " ' +
						"' " +
						'` / ' +
						'\\ ' +
						', . : ; ? =',
				},
				{
					id: 'port4_str',
					type: 'textinput',
					label: 'Port 4',
					default: 'Port_4',
					tooltip:
						'Cannot contain spaces or any of the following characters: ' +
						'< > ! @ # & $ % ^ & * " ' +
						"' " +
						'` / ' +
						'\\ ' +
						', . : ; ? =',
				},
				{
					id: 'port5_str',
					type: 'textinput',
					label: 'Port 5',
					default: 'Port_5',
					tooltip:
						'Cannot contain spaces or any of the following characters: ' +
						'< > ! @ # & $ % ^ & * " ' +
						"' " +
						'` / ' +
						'\\ ' +
						', . : ; ? =',
				},
				{
					id: 'port6_str',
					type: 'textinput',
					label: 'Port 6',
					default: 'Port_6',
					tooltip:
						'Cannot contain spaces or any of the following characters: ' +
						'< > ! @ # & $ % ^ & * " ' +
						"' " +
						'` / ' +
						'\\ ' +
						', . : ; ? =',
				},
				{
					id: 'port7_str',
					type: 'textinput',
					label: 'Port 7',
					default: 'Port_7',
					tooltip:
						'Cannot contain spaces or any of the following characters: ' +
						'< > ! @ # & $ % ^ & * " ' +
						"' " +
						'` / ' +
						'\\ ' +
						', . : ; ? =',
				},
				{
					id: 'port8_str',
					type: 'textinput',
					label: 'Port 8',
					default: 'Port_8',
					tooltip:
						'Cannot contain spaces or any of the following characters: ' +
						'< > ! @ # & $ % ^ & * " ' +
						"' " +
						'` / ' +
						'\\ ' +
						', . : ; ? =',
				},
				{
					id: 'port9_str',
					type: 'textinput',
					label: 'Port 9',
					default: 'Port_9',
					tooltip:
						'Cannot contain spaces or any of the following characters: ' +
						'< > ! @ # & $ % ^ & * " ' +
						"' " +
						'` / ' +
						'\\ ' +
						', . : ; ? =',
				},
				{
					id: 'port10_str',
					type: 'textinput',
					label: 'Port 10',
					default: 'Port_10',
					tooltip:
						'Cannot contain spaces or any of the following characters: ' +
						'< > ! @ # & $ % ^ & * " ' +
						"' " +
						'` / ' +
						'\\ ' +
						', . : ; ? =',
				},
				{
					id: 'port11_str',
					type: 'textinput',
					label: 'Port 11',
					default: 'Port_11',
					tooltip:
						'Cannot contain spaces or any of the following characters: ' +
						'< > ! @ # & $ % ^ & * " ' +
						"' " +
						'` / ' +
						'\\ ' +
						', . : ; ? =',
				},
				{
					id: 'port12_str',
					type: 'textinput',
					label: 'Port 12',
					default: 'Port_12',
					tooltip:
						'Cannot contain spaces or any of the following characters: ' +
						'< > ! @ # & $ % ^ & * " ' +
						"' " +
						'` / ' +
						'\\ ' +
						', . : ; ? =',
				},
			],
			callback: async function (event) {
				const ip = self.config.host
				const urlPath =
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

				const options = {
					hostname: ip,
					port: self.config.port || 80,
					path: urlPath,
					method: 'GET',
				}

				const req = http.request(options, (res) => {
					let data = ''
					res.on('data', (chunk) => {
						data += chunk
					})
					res.on('end', () => {
						self.log('info', `Response: ${data}`)
					})
				})

				req.on('error', (err) => {
					self.log('error', `HTTP Request failed: ${err.message}`)
				})

				req.end()
			},
		},
	})
}
