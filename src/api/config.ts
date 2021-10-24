export const config = {
    apiUrl: process.env.REACT_APP_API_URL || 'http://localhost:5000',
    aws: {
        accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID || '',
        secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY || '',
        region: process.env.REACT_APP_AWS_REGION || '',
        bucket: process.env.REACT_APP_AWS_BUCKET || '',
        expires: 60* 5,  
    }
}; 