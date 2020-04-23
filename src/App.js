import React from "react";


import { Cards, Charts, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api/index';


import { render } from "@testing-library/react";

class App extends React.Component {
state = {
  data: {},
}

  async componentDidMount() {
    const fetchedData = await fetchData();

 this.setState({ data: fetchedData });
  }

  render() {
    const { data } = this.state
    return (
      <div className ={styles.container}>
        <Cards />
        <CountryPicker />
        <Charts />
      </div>
    );
  }
}
export default App;