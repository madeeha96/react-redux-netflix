/*
 * FeaturePage
 *
 * List all the features
 */
import React from "react";
import { Helmet } from "react-helmet";
import "./style.scss";

export default class FeaturePage extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="feature-page">
        <Helmet>
          <title>Feature Page</title>
          <meta
            name="description"
            content="Feature page of React.js Boilerplate application"
          />
        </Helmet>
        <h1>Written Questions</h1>
        <ul>
          <li>
            <p className="title">What do u like about react.js?</p>
            <p>
              React js is a very simple library with few component lifecycles By
              using JSX it allows to you improve your js skills. It has the fast
              learning curve w.r.t to other frameworks. One can easily learn
              react with in a month or two. I like react due to its reusable
              components. React provides a component based structure. You start
              with tiny components like button, checkbox, dropdown etc and then
              you create wrapper components composed of those smaller
              components. And then you write higher level wrapper components.
              And, it goes on like that until you have this one root component
              and that component is your app. It has fast rendering due to
              virtual DOM. Updating DOM is usually becomes bottleneck when it
              comes to web performance. a DOM kept in memory. Any view changes
              are first reflected to virtual DOM, then an efficient diff
              algorithm compares the previous and current states of the virtual
              DOM and calculates the best way (minimum amount of updates needed)
              to apply these changes. Finally those updates are applied to the
              DOM to ensure minimum read/write time.
            </p>
          </li>
          <li>
            <p className="title">
              Compared to other frameworks like Angular/Vue (or anything else
              you've used), what would you say its greatest strengths are?
            </p>
            <p>
              The most important thing about react is that it is easy to learn
              you only need to understand a component’s life cycles, states and
              props to master react to accomplish everything you need. React
              does not dictate any patterns or architecture like MVC/ MVVC,
              after all its only about the view layer and you are free to design
              your app’s architecture in any way you see fit. As Compare to
              Angular: Why on earth should you have to learn an internal process
              such as digest cycles? Those kind of details better be kept as
              internals to provide a clean abstraction. Personally it took 6 to
              7 months just to understand the architecture of angular
              observables, directives, dependency injection, Two way binding,
              one way binding, handling forms, make https request using
              observables. Plus while learning react you can easily shift
              towards react-native thats makes you learn creating native apps
              instead of hybrids. React native provides many native elements by
              itself. Plus it also provides hot reloading, live reloading. I
              have personally worked on angular based web app it gets very
              irritating when u do a tiny change and the app starts to render
              from the start then you have to dive deep from one page to another
              to see the changes. Angular's hot reloading is not that efficient
              as compared to react.js
            </p>
          </li>
          <li>
            <p className="title">
              3. Is there anything you don't like about ReactJS? Anything you
              feel could be improved?
            </p>
            <p>
              Things i dont like about React js is that it requires high pace of
              development and environment changes eventually first i learn flux
              then redux and now everybody is moving towards context. Secondly
              poor documentation and poor updates sometimes when i update my
              modules everything crashes due to errors in updated react-native
              versions mostly babel errors. Mostly functionalities of third
              party components are either restricted for ios or android. Plus
              they are still limited. Native ios and native android community
              are far stable. If your app becomes mature you usually faces
              hurdles for ios or android components. My suggestions for the
              community is to make react native library more stable as native
              android and native ios are.
            </p>
          </li>
        </ul>
      </div>
    );
  }
}
