import React from 'react';
import Dropzone from 'react-dropzone-uploader';
import { Header, Outline, Footer } from './Header.js';
import { makeStyles } from '@material-ui/core/styles';
import CButton from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import GetAppOutlinedIcon from '@material-ui/icons/GetAppOutlined';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
		},
	},
	input: {
		display: 'none',
	},
}));

const CustomDropzone = (props) => {
	const UploadButton = () => {
		const classes = useStyles();
		return (
			<div className={classes.root}>
				<input
					accept="*"
					className={classes.input}
					onclick="initialize()"
					id="contained-button-file"
					multiple
					type="file"
					onChange={(e) => props.handleChange(e)}
				/>
				<label htmlFor="contained-button-file">
					<CButton variant="outlined" size="small" color="primary" component="span" startIcon={<AddIcon />}>
						Select File
					</CButton>
				</label>
			</div>
		);
	};
	const Input = () => {
		const classes = useStyles();
		return (
			<Grid container justify="center">
				<Grid item>
					<Header>Drag and drop the file here </Header>
					<br />
					<Header>or</Header>
					<br />
					<UploadButton />
					<Footer>
						Importing Requires Microsoft Excel .xlsx format
						<CButton color="primary" startIcon={<GetAppOutlinedIcon />} onClick={props.handleDownload}>
							Download Template
						</CButton>
					</Footer>
				</Grid>
			</Grid>
		);
	};

	return (
		<Outline>
			<Dropzone
				maxFiles={1}
				canRemove={true}
				multiple={false}
				onChangeStatus={props.handleChangeStatus}
				InputComponent={Input}
				autoUpload={true}
				accept=".xml,.csv,.xlsx,.xls"
				styles={{
					dropzone: {
						textAlign: 'center',
						margin: 'auto',
						width: '100%',
						height: '210px',
						background: 'rgba(47, 128, 237, 0.05)',
						borderRadius: '20px',
						padding: '20px',
					},
					dropzoneActive: {
						background: 'rgba(47, 128, 237, 0.5)',
					},
				}}
			/>
		</Outline>
	);
};

export default CustomDropzone;
