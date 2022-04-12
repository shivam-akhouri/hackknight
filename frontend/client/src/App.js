import React, { Component } from "react";
// import SimpleStorageContract from "./contracts/SimpleStorage.json";
import getWeb3 from "./getWeb3";

import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar/Navbar.js";
import FormDoctor from "./components/FormDoctor/FormDoctor.js";
import FormManufacturer from "./components/FormManufacturer/FormManufacturer.js";
import FormSupplier from "./components/FormSupplier/FormSupplier.js";
import Login from "./components/Login/Login.js";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Analytics from "./components/Analytics/Analytics.js"
import Checkpage from "./components/checkpage";

class App extends Component {
  // state = { storageValue: 0, web3: null, accounts: null, contract: null };

  // componentDidMount = async () => {
  //   try {
  //     // Get network provider and web3 instance.
  //     const web3 = await getWeb3();

  //     // Use web3 to get the user's accounts.
  //     const accounts = await web3.eth.getAccounts();

  //     // Get the contract instance.
  //     const networkId = await web3.eth.net.getId();
  //     const deployedNetwork = SimpleStorageContract.networks[networkId];
  //     const instance = new web3.eth.Contract(
  //       SimpleStorageContract.abi,
  //       deployedNetwork && deployedNetwork.address,
  //     );

  //     // Set web3, accounts, and contract to the state, and then proceed with an
  //     // example of interacting with the contract's methods.
  //     this.setState({ web3, accounts, contract: instance }, this.runExample);
  //   } catch (error) {
  //     // Catch any errors for any of the above operations.
  //     alert(
  //       `Failed to load web3, accounts, or contract. Check console for details.`,
  //     );
  //     console.error(error);
  //   }
  // };

  // runExample = async () => {
  //   const { accounts, contract } = this.state;

  //   // Stores a given value, 5 by default.
  //   await contract.methods.set(5).send({ from: accounts[0] });

  //   // Get the value from the contract to prove it worked.
  //   const response = await contract.methods.get().call();

  //   // Update state with the result.
  //   this.setState({ storageValue: response });
  // };

  render() {
    return(
      <>
        <Navbar/>
        <Routes>

          <Route path="doctor" element={<FormDoctor />} />
          <Route path="manufacturer" element={<FormManufacturer />} />
          <Route path="supplier" element={<FormSupplier />} />
          <Route path="login" element={<Login />} />
          <Route path="analytics" element={<Analytics/>}/>
          <Route path="check" element={<Checkpage />} />
        </Routes>
        {/* <FormDoctor/>
        <FormManufacturer/>
        <FormSupplier/> */}
        {/* <Login/> */}
      </>
    );
  }
}


export default App;
