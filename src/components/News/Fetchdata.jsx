// const api_Key = 'pub_15761798c8ba1de40eebb210f7a77a9a250e5';
const api_Key = 'pub_15464e0c79fbf2f2e24013532c7788dbeb006';


const fetchData = async (category, page) => {
    const language = localStorage.getItem('selectedLanguage');
    var url;
    if (page == undefined) {
        url = `https://newsdata.io/api/1/news?apikey=${api_Key}&category=${category}&language=${language}`;
    }
    else {
        url = `https://newsdata.io/api/1/news?apikey=${api_Key}&category=${category}&language=${language}&page=${page}`;
    }

    try {
        const response = await fetch(url);
        const parsedData = await response.json();
        return parsedData;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // You may want to handle this error in the component that uses this function
    }
};

export default fetchData;