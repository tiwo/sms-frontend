import { throwHttpErrors } from './helpers.js';


const apiFetch = async (resource, api_key) => {

    const headers = {
        accept: 'application/json',
        Authorization: `AccessKey ${api_key}`,
    };

    console.log(headers);

    const request = new Request('https://rest.messagebird.com/' + resource, {
        headers,
        referrerPolicy: 'no-referrer',
    });

    const response = await fetch(request);
    throwHttpErrors(response);
    return await response.json();
}

const getBalance = api_key => {
    return apiFetch('balance', api_key);
};

const getMessages = api_key => {
    return apiFetch('messages', api_key);
};

export { getBalance, getMessages };