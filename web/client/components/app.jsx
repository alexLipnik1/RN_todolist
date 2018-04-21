import React from 'react';
import DayPlan from './DayPlan/dayPlan';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default () => (
	<MuiThemeProvider>
		<DayPlan />
	</MuiThemeProvider>
);
