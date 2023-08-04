import React, { createRef, useState } from "react";
import { useDispatch } from 'react-redux';
import '../assets/styles/tripForm.css';

export default function TripForm() {
    const [disabledBtn, setdisabledBtn] = useState(true);
    const dispatch = useDispatch();
    const form = createRef();
    const [formState, setFormState] = useState({
        cityName: '',
        datestart: '',
        dateend: ''
    });
    return (
        <div className="form">
            <h2> Create trip</h2>
            <form onSubmit={submitData} onChange={() => { setdisabledBtn(false) }} ref={form}>

                <div className="form-items"> <label htmlFor="cityName"><span>*</span>City </label>
                    <input id="name" className={firstnameclassName} type="text" onChange={handleFirstName} placeholder='Please select a city' />
                </div>
                <div className="form-items"> <label htmlFor="surname"> <span>*</span>Start date</label>
                    <input id="surname" className={lastnameclassName} type="date" onChange={handleLastName} placeholder='Select date' />
                </div>
                <div className="form-items">  <label htmlFor="age"> <span>*</span>End date</label>
                    <input id="age" type="date" className={ageclassName} onChange={handleAge} placeholder='Select date' />
                </div>
                <div className="form-items">
                    <button className="btnR" type="reset" disabled={disabledBtn} onClick={resetData}>Cancel</button>
                    <button className="btnSubmit" type="submit" disabled={disabledBtn} >Save</button>
                </div>

            </form >
        </div>
    )
}