import React from 'react';
import '../assets/styles/mainPanel.css';

export default function TripForm() {
    return (
        <div>
            <h3>Create trip</h3>
            <form>

                <input type='text' />
                <button>Cancel</button>
                <button>Save</button>
            </form>
        </div>
    )
}