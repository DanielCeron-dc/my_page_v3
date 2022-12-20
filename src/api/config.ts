
console.log(process.env.NODE_ENV);

export const config = {
    apiUrl: process.env.NODE_ENV === 'development' ? process.env.REACT_APP_API_URL_DEV : process.env.REACT_APP_API_URL,
    aws: {
        accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID || '',
        secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY || '',
        region: process.env.REACT_APP_AWS_REGION || '',
        bucket: process.env.REACT_APP_AWS_BUCKET || '',
        expires: 60* 5,  
    }
}; 