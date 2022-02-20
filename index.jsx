import axios from 'axios';

async function getData() {
    const { data: user } = await axios('https://jsonplaceholder.typicode.com/users/1');
    const { dtat: post } = await axios('https://jsonplaceholder.typicode.com/posts?userId=1');

    console.log(user);
    console.log(post);
}

getData();
