// source; https://www.youtube.com/watch?v=IYCa1F-OWmk
// install axios to get posts

// useState to have maintain state within component / oject
// useEffect - mimic lifecycle methods, whenComponentMounts fire off the requets to get the posts

```js
// for your App.js

import React, {useState, useEffect} from 'react';

const App = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);  // default page 1
    const [postsPerPage, setPostsPerPage] = useState(10);

    // use asnyc/await with useEffect
    // but you have to create a new function to useEffect with async/await

    useEffect(() => {
        const fetchPosts = asnyc () => {
            setLoading(true);
            const res = await axios.get('Http://...');
            setPosts(res.data);
            setLoading(false);
            };

        fetchPosts();
    }, []);

    // get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // change page
        // maps pageNumber from Pagination to the page number
    const paginate = (pageNumber) => setCurrentPage(pageNumber);


    return (
        <div className='container'>
            <Posts posts={currentPosts} loading={loading} />
            <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} />
        </div>
    )
}


// for your component Post.js

const Posts = ({posts, loading}) => {
    if (loading) {
        return(
            <LoadingComponent />
        )
    }

    return (
        <ul className='list-group mb-4'>
            {posts.map(post => (
                <li key={post.id} className='list-group-item'>
                    {post.title}
                </li>
            ))}
        </ul>
    );
};


// for component Pagination.js

const Pagination = ({ postsPerPage, totalPosts }) => {
    const pageNumbers = [];

    for (let i = 1; i <= < Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a href="!#" className="page-link">
                            {umber}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )

}
```

// headless browser, like Puppeteer
