const path = require('path');

module.exports = {
	webpackFinal: async config => {
		config.module.rules.push({
			test: /\.(ts|tsx)$/,
			use: [
				{
					loader: require.resolve('ts-loader'),
				},
			],
		});
		config.resolve.extensions.push('.ts', '.tsx');
		config.module.rules.push({
			test: /\.scss$/,
			use: ['style-loader', 'css-loader', 'sass-loader'],
			include: path.resolve(__dirname, '../'),
		});
		return config;
	},
	stories: ['../src/**/*.stories.[tj]sx'],
};
