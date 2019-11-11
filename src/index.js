import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

const Dashboard = () => (
    <div>
        <h2>Dashboard</h2>
    </div>
)

const About = () => (
    <div>
        <h2>About</h2>
    </div>
)
const posts = [
    { id: 1, title: 'First', content: 'Hello world!' },
    { id: 2, title: 'Second', content: 'Hello again!' }
  ];

const Post = ({ post }) => {
    let alternative = null;

    if("undefined" === typeof post){
        post = {};
        post.title = "No existe este post.";
        post.content = `No existe el post que estás buscando.`;
        alternative = (<a href={`https://www.google.com`}>Google</a>);
    }

    const title = (<h2>{ post.title  }</h2>);
    const content = (<>{ post.content} {alternative !== null ? alternative : '' }</>)

    return ( <div>
            {title}
            {content}
        </div>);
};
    
    
   


ReactDOM.render((
    <Router>
        <div>
            <aside>
                <Link to={`/`}>Dashboard</Link>
                <Link to={`/about`}>About</Link>
            </aside>

            <main>
                <Route exact path="/" component={Dashboard} />
                <Route path="/(about|who)/" component={About} />
                <Route exact path="/post/:id" render={({match}) => (<Post post={posts.find(p => { console.log(match.params.id); return p.id === parseInt(match.params.id);})}/>
                )} />
            </main>
        </div>
    </Router>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
