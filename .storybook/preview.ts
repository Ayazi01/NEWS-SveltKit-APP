import '../src/app.postcss';
import type { Parameters } from '@storybook/types';
export const parameters: Parameters = {
	backgrounds: {
		default: 'light'
	},
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/
		}
	}
};
