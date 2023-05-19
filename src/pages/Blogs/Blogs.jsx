import React from 'react'

const Blogs = () => {
  return (
    <div className='w-8/12 mx-auto'>
      <h3 className='text-center text-2xl font-bold mb-16'>Blog</h3>
      <div>
        {/* q-1 */}
        <div className='block w-full md:w-11/12 lg:w-10/12 mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
          <h4 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            Question: What is an access token and refresh token? How do they
            work and where should we store them on the client-side?
          </h4>
          <p className='font-normal text-gray-700 dark:text-gray-400 mt-3'>
            Answer: An access token is a jwt type token that is used to
            authenticate an user. Usually an access token expires very shortly.
            Whereas a refresh token is a kind of token that is used to
            revalidate an user. Usually a refresh token has more expiring time
            than an access token.
          </p>
          <p className='font-normal text-gray-700 dark:text-gray-400 mt-3'>
            Both access and refresh tokens can be used in json web token format.
            These jwt are generated on a authorization server and passed by
            header files with bearer. When an user request for api calls these
            jwt tokens are passed via headers and then verify on the server
            side. We can store these access and refresh tokens on client local
            storage but the optimal way of storing is to put them on cookies.
          </p>
        </div>
        {/* q-2 */}
        <div className='block w-full md:w-11/12 lg:w-10/12 mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
          <h4 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            Question: Compare SQL and NoSQL databases?
          </h4>
          <p className='font-normal text-gray-700 dark:text-gray-400 mt-3'>
            Answer: Both SQL and NoSQL databases have their own use cases in the
            web. Where sql databases are used for structured data and no sql is
            used for unstructured data that is required very fast. The key
            differences between SQL and NoSQL are:
          </p>
          <p className='font-normal text-gray-700 dark:text-gray-400 mt-3'>
            First sql databases are table typed but NoSql is dynamically
            formatted. Scaling a sql databases is hard but we can easily scale
            any no sql databases. We have to put relations to each table and
            each data to store and use but in json typed no sql format we don't
            need to tell the database about the structure , it can easily scale
            up as needed. Sql databases are comparatively slow than a no sql
            database.
          </p>
        </div>
        {/* q-3 */}
        <div className='block w-full md:w-11/12 lg:w-10/12 mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
          <h4 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            Question: What is express js? What is Nest JS?
          </h4>
          <p className='font-normal text-gray-700 dark:text-gray-400 mt-3'>
            Answer: Express js is a node js framework that is used in server for
            building RESTapi types requests. Node js is just javascript that can
            be run on a server. But we have to write a whole bunch of codes to
            achieve a small api request. Here comes the magic of express js. We
            can simplify the work with express js.
          </p>
          <p className='font-normal text-gray-700 dark:text-gray-400 mt-3'>
            Answer:Nest js is built on top of Express js !!Nest js is a server
            side framework that compiles the js code on the server then send the
            data to a the client. Usually a nest js project has providers,
            controllers and modules. Nest js provides a boilerplate and various
            templates for projects to start a new project. Nest js is used with
            typescript thus it is has more error handling capability.
          </p>
        </div>
        {/* q-4 */}
        <div className='block w-full md:w-11/12 lg:w-10/12 mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
          <h4 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            Question: What is MongoDB aggregate and how does it work?
          </h4>
          <p className='font-normal text-gray-700 dark:text-gray-400'>
            Answer:MongoDB aggregation is a advance find() method. When we use
            mongodb for small dataset , we can use find method for that but if
            the data set gets bigger and we need to use a complex query to find
            something we use aggregate to do so. Aggregation is a process of
            handling large number of data in a collection by passing them
            through different stages. heres how it works:
            <br />
            Single purpose methods like
            <code>estimatedDocumentCount(), distinct(), count(),</code>, and
            which are appended to a <code>find()</code> query making them quick
            to use but in a small category.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Blogs
