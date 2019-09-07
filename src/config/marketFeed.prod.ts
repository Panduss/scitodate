import { ConfigTemplate } from './template';

export default {
    environment: 'prod',
    api: {
        url: 'https://assessment.scitodate.com/api/segment',
    },
    firebaseConfig: {
        apiKey: 'AIzaSyABnXzztEV1RrI73PsOuYcPPD7ypyLibhg',
        authDomain: 'scitodate-market-feed.firebaseapp.com',
        databaseURL: 'https://scitodate-market-feed.firebaseio.com',
        projectId: 'scitodate-market-feed',
        storageBucket: '',
        messagingSenderId: '576820746090',
        appId: '1:576820746090:web:70aea2199f9f9dff49f713',
    }
} as ConfigTemplate;
