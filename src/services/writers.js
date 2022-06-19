const baseUrl = process.env.REACT_APP_WRITERS_URL;

const getAll = async () => {
    const request = await fetch(baseUrl);
    return await request.json();
}

const writersApi = {getAll}

export default writersApi;

