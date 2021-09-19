import axios from 'axios';

async function makeRequest(payload) {
    console.log(payload);
    try {
        const response = await axios({
            url:'https://angular-test-backend-yc4c5cvnnq-an.a.run.app/graphiql',
            method: 'POST',
            data: payload
        })

        if (response.status === 200) {
            return response.data;
        }
        return null;

    } catch (error) {
        console.log(error);
    }
}

export default makeRequest;