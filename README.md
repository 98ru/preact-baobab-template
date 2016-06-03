React-Baobab-Template
=====================

Preact-Baobab-Template is an opinionated ready-to-use template which is build upon ES6, [Preact](https://github.com/developit/preact) and [Baobab](https://github.com/Yomguithereal/baobab).

Directory Structure
-------------------

```
./
├─ dist/            -- build results
├─ public/          -- static assets
└─ src/             -- project source
   ├─ actions/      -- list of actions
   ├─ common/       -- routes, state, utils, etc.
   ├─ components/   -- dumb components
   ├─ controllers/  -- smart components
   └─ views/        -- page controllers
```

Project Architecture
--------------------

There are three basic layers: actions, components and the state tree. There are no stores, local states, dispatchers, reducers, lengthy lists of switch-cases because these things unnecessarily complicate the architecture.

State Tree
----------

The whole state of the application is stored within a single container - the state tree which is based on the superb [Baobab](https://github.com/Yomguithereal/baobab) library. If you haven't checked this library you should do so. It introduces many cool features such as immutability, fast object equality checks and easy state management.

The state tree should contain only JSON-serializable data. This optional restriction simplifies many things such as hydration/dehydration of the state.

Components
----------

There are two types of components: dumb components and controllers or so-called smart components. This distinction simplifies testing of components and makes them more reusable.

Controllers subscribe to branches of the state tree and receive updates as soon as anything within the observable part of the state is changed. Only containers should call actions or subscribe to state changes. Views are controllers with some page-centric logic.

Dumb components receive data and action handlers through props from controllers and may contain only other dumb components. They shouldn't set any local state nor call any actions.

Actions
-------

Actions are simple namespaced functions which do the whole work of talking to the server and changing the state of the application. No component should ever do this. Each action should comply with the KISS principle: it should be short, easy to understand and change only one part of the state.

Data Access Object
------------------

Data Access Object or DAO is a special object created at the initialization of the application and passed through the context property to controllers. It contains all actions, a reference to the state tree and a default state of the application. Actions receive DAO which allows them to stay loosely-coupled and easily testable.

License
-------

[MIT](https://github.com/slmgc/preact-baobab-template/blob/master/LICENSE)