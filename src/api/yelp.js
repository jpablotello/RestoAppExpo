import axios from 'axios';

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 7Wx3r-erAXD2j87mw8X4CpOF3UgobiBL-A0wUJ4S7oeDDSxlgSz46NScED-YDjRadf9VhR0wUz6AJqfGoFHHFVAS4r8YMvZekM0zZDKAHtgMa8grfc_fuR6vh2jsXXYx'
    }
})