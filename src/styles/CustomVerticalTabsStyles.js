
const CustomVerticalTabsStyles = {
	tabRootButton: {
		margin: '0',
		minHeight: '74px',
		background: '#F9F9F9',
		lineHeight: '21px',
		border: '0 !important',
		color: '#000 !important',
		//marginLeft: '4px',
		'&:last-child': {
			marginLeft: '0px',
		},
		'&  .button:focus': {
			outline: 'none',
		},

		'& .wrapper': {

			alignItems: 'flexStart',

		}

	},


	tabsRoot: {
		margin: '0',
		background: "#F9F9F9",
		width: "100%",

		paddingTop: '20px',
		paddingLeft: '20px',
		paddingright: '10px',
		minHeight: "unset !important",
		"& $tabRootButton": {
			fontSize: "0.875rem",
			outline: 'none',
			margin: '0',

		}
	},


	tabLabelContainer: {
		padding: '0px',
	},
	tabLabel: {
		fontWeight: '500',
		fontSize: '12px',
	},
	tabSelected: {
		backgroundColor: "#2F80ED",
		transition: '0.2s background-color 0.1s',
		minHeight: '50px',
		borderRadius: '10px',

	},

	tabText: {
		width: '100%',
		textAlignLast: 'left',
		fontSize: '20px',
		lineheight: '23px',
		fontFamily: 'Roboto',
		fontStyle: 'normal',
		fontWeight: '500',
		textTransform: 'capitalize',
		color: "#ffffff",

	},

	selectedTabText: {
		width: '100%',
		textAlignLast: 'left',
		fontSize: '20px',
		lineheight: '23px',
		fontFamily: 'Roboto',
		fontStyle: 'normal',
		fontWeight: 400,
		color: 'black',
		textTransform: 'capitalize',
	},


};

export default CustomVerticalTabsStyles;
