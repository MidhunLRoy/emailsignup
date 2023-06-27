import React from "react";
import { Label, FormGroup, Input, Button, Form } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";

// import { Link } from "react-router-dom";
export const SignUp = () => {    
    const [termsChecked, setTermsChecked] = useState(false);
    const [countries, setCountries] = useState([]);
    const [regions, setRegions] = useState([]);
  
    const handleTermsCheck = (e) => {
      setTermsChecked(e.target.checked);
    };
  
    useEffect(() => {
      // Fetch countries from the database and set the countries state
      fetchCountries().then((data) => {
        setCountries(data);
      });
  
      // Fetch regions from the database and set the regions state
      fetchRegions().then((data) => {
        setRegions(data);
      });
    }, []);
  
    const fetchCountries = () => {
      // Replace this with your actual API call to fetch countries from the database
      return fetch("http://localhost:8000/api/countries")
        .then((response) => response.json())
        .then((data) => data);
    };
  
    const fetchRegions = () => {
      // Replace this with your actual API call to fetch regions from the database
      return fetch("http://localhost:8000/api/states")
        .then((response) => response.json())
        .then((data) => data);
    };
  
    return (
        <>
            <div class="mt-5">
                <div className="mx-auto ">
                    <div className="row justify-content-center">
                        <div className="col-sm-6  text-center text-danger">
                            <div className="">
                                <h5 className="text-dark mt-5">SIGN UP</h5>
                            </div>
                            <div >
                                <Form className="">
                                    <FormGroup className="text-center">
                                        <div class="input-container">
                                            <input
                                                placeholder="FirstName"
                                                name="name"
                                                class="input-field"
                                                type="text"
                                            />
                                            <label
                                                for="input-field"
                                                class="input-label"
                                            >
                                                FIRSTNAME
                                            </label>
                                            <span class="input-highlight"></span>
                                        </div>
                                    </FormGroup>

                                    <FormGroup>
                                        <div class="input-container">
                                            <input
                                                placeholder="LastName"
                                                name="name"
                                                class="input-field"
                                                type="text"
                                            />
                                            <label
                                                for="input-field"
                                                class="input-label"
                                            >
                                                LASTNAME
                                            </label>
                                            <span class="input-highlight"></span>
                                        </div>
                                    </FormGroup>

                                    <FormGroup>
                                        <div class="input-container">
                                            <input
                                                placeholder="Email"
                                                name="email"
                                                class="input-field"
                                                type="email"
                                            />
                                            <label
                                                for="input-field"
                                                class="input-label"
                                            >
                                                Email
                                            </label>
                                            <span class="input-highlight"></span>
                                        </div>
                                    </FormGroup>

                               
                                    <FormGroup>
                                    <div class="input-container">
                                    <Input className="mb-3" type="select" onChange={(e) => setCountryId(e.target.value)}>
            <option>Select Country</option>
            {countryData.map((country) => (
              <option key={country.id} value={country.id}>
                {country.name}
              </option>
            ))}
          </Input>
                  <span class="input-highlight"></span>
                  </div>
                </FormGroup>


                <FormGroup>
                    <div class="input-container">
                        <Input className="mb-3" type="select">
                            <option>Select State</option>
                                {stateData.map((state) => (
                                    <option key={state.id}>{state.name}</option>
                                ))}
          </Input>
                  <span class="input-highlight"></span>
                  </div>
                </FormGroup>

                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};