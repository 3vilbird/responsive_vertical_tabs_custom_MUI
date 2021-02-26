import React from 'react';
import CustomDropzone from '../components/CustomdropZone/CustomDropzone';
import Box from '@material-ui/core/Box';






const Customdropzone = () => {
    const handleChange = (e) => {
        //
        console.log('from the home page==>', e.target.files[0]);

    }


    const handleDownload = () => {
        //
        console.log('handledownload');

    }


    const handleChangeStatus = (files, status) => {
        //
        console.log('file', files, status);

    }

    return (
        <Box my={12} >
            <CustomDropzone
                handleChange={handleChange}
                handleDownload={handleDownload}
                handleChangeStatus={handleChangeStatus}
            />
        </Box>
    );
}

export default Customdropzone;