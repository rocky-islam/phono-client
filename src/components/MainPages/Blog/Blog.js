import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="w-3/4 mx-auto my-9 p-4">
        <h2 className="text-2xl font-semibold mb-8">Our Blogs</h2>
        <div>
          <p className="font-bold">
            Question: What are the different ways to manage a state in a React
            application?
          </p>
          <p>
            Answer: 1. Local state <br />
            Local (UI) state – Local state is data we manage in one or another
            component. Local state is most often managed in React using the
            useState hook. For example, local state would be needed to show or
            hide a modal component or to track values for a form component, such
            as form submission, when the form is disabled and the values of a
            form’s inputs. <br />
            2. Global state <br />
            Global (UI) state – Global state is data we manage across multiple
            components. Global state is necessary when we want to get and update
            data anywhere in our app, or in multiple components at least. A
            common example of global state is authenticated user state. If a
            user is logged into our app, it is necessary to get and change their
            data throughout our application. Sometimes state we think should be
            local might become global. <br />
            3. Server state <br />
            Server state – Data that comes from an external server that must be
            integrated with our UI state. Server state is a simple concept, but
            can be hard to manage alongside all of our local and global UI
            state. There are several pieces of state that must be managed every
            time you fetch or update data from an external server, including
            loading and error state. Fortunately there are tools such as SWR and
            React Query that make managing server state much easier. <br />
            4. URL state <br />
            URL state – Data that exists on our URLs, including the pathname and
            query parameters. URL state is often missing as a category of state,
            but it is an important one. In many cases, a lot of major parts of
            our application rely upon accessing URL state. Try to imagine
            building a blog without being able to fetch a post based off of its
            slug or id that is located in the URL! There are undoubtedly more
            pieces of state that we could identify, but these are the major
            categories worth focusing on for most applications you build.
          </p>
        </div>
        <div className="my-4">
          <p className="font-bold">
            Question: How does prototypical inheritance work?
          </p>
          <p>
            The Prototypal Inheritance is a feature in javascript used to add
            methods and properties in objects. It is a method by which an object
            can inherit the properties and methods of another object.
            Traditionally, in order to get and set the "[[Prototype]]" of an
            object, we use Object. getPrototypeOf and Object.
          </p>
        </div>
        <div className="my-4">
          <p className="font-bold">
            Question: What is a unit test? Why should we write unit tests?
          </p>
          <p>
            The main objective of unit testing is to isolate written code to
            test and determine if it works as intended. Unit testing is an
            important step in the development process, because if done
            correctly, it can help detect early flaws in code which may be more
            difficult to find in later testing stages.
          </p>
        </div>
        <div className="my-4">
          <p className="font-bold">Question: React vs. Angular vs. Vue?</p>
          <p>
            React: Facebook released React.js in March 2013 as a JavaScript
            library. Because React just provides one view, it is not appropriate
            for building an MVC architecture: you must solve the model and
            controller yourself. Besides this, there are only advantages and
            lots of advantages. One of the biggest of them is that React.js uses
            a virtual DOM that only compares the previous HTML code differences
            and only loads the different parts. This significantly impacts the
            loading times. In a positive way, of course. With React.js, you
            handle the markup and the logic in the same file, which means you
            can output variables in a view component (JSX). React offers a type
            of mobile solutions for applications called React-Native.
            <br />
            Angular: AngularJS was developed in 2009 by Google. The first
            version was Angular.JS. Angular is currently known as a JavaScript
            framework. Obviously, all significant Google projects have been
            developed with Angular. Angular.js is an MVC framework. A major
            disadvantage of Angular is that it uses a regular DOM, and thus, the
            entire tree structure of the HTML tags is updated, which massively
            impacts the loading time. Angular.js has its Ionic framework for
            mobile applications. <br />
            VU: Vue.js is a JavaScript-based progressive framework for creating
            single-page applications. It was created with scalability and
            incrementality in mind, as well as ease of integration with other
            view layer frameworks. Vue is built from the bottom up to be
            progressively adaptable, unlike other monolithic frameworks. The
            core library focuses solely on the view layer, and it’s simple to
            use and connect with other libraries or applications. This
            framework’s fast learning angle is almost a trademark. It’s a
            flexible framework that may be used as a library or a full-fledged
            framework for developing large web applications. Vue.js combines the
            useful principles of the Angular and React frameworks and presents
            them in a minimalistic modern style. Web developers use Vue.js to
            create frontend user interfaces for web-based and hybrid mobile
            applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
