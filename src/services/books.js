const baseUrl = process.env.REACT_APP_BOOKS_URL;

const getAll = async () => {
    const request = await fetch(baseUrl);
    return await request.json();
}

const booksApi = {getAll}

export default booksApi;

