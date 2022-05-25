import * as React from "react";
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
import "./App.css";
import Nav from "./components/nav";
import Home from "./pages/home";
import Signup from "./pages/signup";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Dashboard from "./pages/dashboard";

const httpLink = createHttpLink({
  uri: "http://localhost:3001/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/nav" element={<Nav />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
    </ApolloProvider>
  );
}

export default App;
