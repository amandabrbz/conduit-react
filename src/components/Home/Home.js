import React from "react";
import "./Home.css";
import { Switch, NavLink, useRouteMatch, Route } from 'react-router-dom';
import ArticleList from '../ArticleList/ArticleList';
import { Redirect } from 'react-router-dom';
import TagList from '../TagList/TagList';
const Home = () => {
  let { path, url } = useRouteMatch();

  return (
    <>
      <div className="home">
        <h1>conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
      <div className="container home-main">
        <div style={{'maxWidth': '100%'}}>
          <nav className="home-tabs">
            <NavLink to={`${url}/global`} className="home-tab" activeClassName="active">Global</NavLink>
            <NavLink to={`${url}/my-feed`} className="home-tab" activeClassName="active">My Feed</NavLink>
          </nav>
          <main>
            <Switch>
              <Route path={`${path}/global`} component={ArticleList} />
              <Route path={`${path}/my-feed`} component={ArticleList} />
              <Route path={`${path}/`}>
                <Redirect to={`${path}/global`}/>
              </Route>
            </Switch>
          </main>
        </div>
        <aside >
          <h2>Popular Tags</h2>
          <section>
            <TagList/>
          </section>
        </aside>
      </div>
    </>
  );
};

export default Home;
