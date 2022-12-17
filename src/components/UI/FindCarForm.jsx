import React from "react";
import "../../styles/find-car-form.css";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";

const FindCarForm = () => {
  return (
    <Form className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="select__group">
          <input type="text" placeholder="De l'adresse" required />
        </FormGroup>

        <FormGroup className="select__group">
          <input type="text" placeholder="Adresser" required />
        </FormGroup>

        <FormGroup className="select__group">
          <input type="date" placeholder="Date du voyage" required />
        </FormGroup>

        <FormGroup className="select__group">
          <input
            className="temps de parcours"
            type="temps"
            placeholder="temps de parcours"
            required
          />
        </FormGroup>
        <FormGroup className="select__group">
          <select>
            <option value="ac">AC Car</option>
            <option value="non-ac">Non AC Car</option>
          </select>
        </FormGroup>

        <FormGroup className="select__group">
          <button className="btn find__car-btn">Trouver une voiture</button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;
