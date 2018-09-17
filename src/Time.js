// @ts-check

// Packages
import React from 'react';
import moment from 'moment';

// Ours
import Context from './context';
import { CSS } from './utils';
import styles from './styles/Time';

const Time = props => {
	const { position, date, format } = props;

	return (
		<Context.Consumer>
			{ctx => (
				<div
					style={CSS([
						styles[position].container,
						props.containerStyle[position]
					])}
				>
					<span style={CSS([styles[position].text, props.textStyle[position]])}>
						{moment(date)
							.locale(ctx.locale)
							.format(format)}
					</span>
				</div>
			)}
		</Context.Consumer>
	);
};

Time.defaultProps = {
	position: 'left',
	date: null,
	containerStyle: {},
	textStyle: {},
	format: 'LT'
};

export default Time;
