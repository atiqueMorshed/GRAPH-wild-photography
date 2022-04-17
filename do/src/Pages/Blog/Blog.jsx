const Blog = () => {
  return (
    <div className="w-11/12 max-w-[740px] mx-auto my-20">
      <div className="flex flex-col gap-16">
        <div className="p-3 shadow">
          <h1 className="text-xl font-semibold mb-4">
            [Q1] What is the difference between authentication and authorization
          </h1>
          <p className="text-justify">
            Authentication checks for user identification. It checks if the user
            is who he says he is. For example, when a person logs into a
            website, he has to enter his email/ password to verify that he is
            truly that person.
            <br />
            <br />
            Authorization checks for if a user has the correct permission to
            access a certain resource. For example, if a client account tries to
            access the admin resource, that access will be blocked since that
            client does not have permission to access admin resources.
          </p>
        </div>

        <div className="p-3 shadow">
          <h1 className="text-xl font-semibold mb-4">
            [Q2] Why are you using firebase? What other options do you have to
            implement authentication?
          </h1>
          <p className="text-justify">
            I'm using firebase mainly for user authentication. Firebase is a
            great choice for secure access to client-side applications without
            any backend. Since I'm only using react without any backend,
            firebase makes things so much simpler. And the observer pattern
            style access to the user state simplifies the code a lot.
            <br />
            <br />
            One great alternative to firebase is AWS Amplify. This allows us to
            create full-stack apps with authentication, and storage very easily.
            If our app has an express backend, PassportJS is another great
            alternative. I’ve also done authentication with mongoose and JWT on
            MERN apps.
          </p>
        </div>

        <div className="p-3 shadow">
          <h1 className="text-xl font-semibold mb-4">
            [Q3] What other services does firebase provide other than
            authentication?
          </h1>
          <p className="text-justify">
            Apart from authentication, firebase provides database (firestore and
            realtime), storage, hosting, Google analytics, cloud messaging, and
            more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
