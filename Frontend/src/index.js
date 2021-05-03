import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from './App';
import reportWebVitals from "./reportWebVitals";
import Navigation from "./Components/Navigation";
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { CookiesProvider } from 'react-cookie'
import { SessionProvider } from './contexts/SessionContext'


const client = new ApolloClient({
  uri: 'http://localhost:5001/graphql',
  cache: new InMemoryCache(),
  credentials: 'include',
})

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <Router>
        <ApolloProvider client={client}>
          <SessionProvider>
            {/* <Navigation /> */}
            <App />
          </SessionProvider>
        </ApolloProvider>
      </Router>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
