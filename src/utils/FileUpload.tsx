import React, { ChangeEvent } from 'react';
import { Button } from '@mui/material';
import { Storage } from 'aws-amplify';
import {v4 as uuidv4} from 'uuid';

interface FileUploadInput {
    onComplete: (results: (string | undefined)[]) => void;
}

const FileUpload = (props: FileUploadInput) => {
    const { onComplete } = props;

    const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.currentTarget.files;
        const results = await uploadFiles(files);
        onComplete(results ?? []);  
    }

    const uploadFiles = async (files: FileList | null) => {
        if (files && files?.length > 0) {
            const filesArray = Array.from(files);
            const results: (string | undefined)[] = [];

            for (let i = 0; i < filesArray.length; i++) {
                const guidName = uuidv4();
                const file = filesArray[i];
                const result = await Storage.put(`${guidName}_${file.name}`, file, {
                    level: 'public',
                    contentType: file.type
                });
                results.push(result.key);
            }

            return results;
        }
    }

    return (
        <Button variant="contained" component="label">
            Upload
            <input hidden accept="image/*" multiple type="file" onChange={handleChange} />
        </Button>
    )
}

export default FileUpload;