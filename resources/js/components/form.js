import React from 'react';
import ReactDOM from 'react-dom';

function Form() {
    return (
        <form class="data-form">
            <div class="data-form-section" id="data-form-details">
                <div class="data-form-section-header" id="data-form-details-header">
                    <p class="data-form-section-header-text">Step 1: Your details</p>
                </div>
                <div class="data-form-section-content" id="data-form-details-content">
                    <div class="data-form-section-content-input">
                        <div class="input-section">
                            <p class="input-label">First Name <span class="error-message" id="firstname-message">*Required</span></p>
                            <input class="input-textbox" type="text" name="firstname" id="firstname"></input>
                        </div>
                        <div class="input-section">
                            <p class="input-label">Surname <span class="error-message" id="surname-message">*Required</span></p>
                            <input class="input-textbox" type="text" name="surname" id="surname"></input>
                        </div>
                        <div class="input-section">
                            <p class="input-label">Email Address: <span class="error-message" id="email-message">*Required</span></p>
                            <input class="input-textbox" type="text" name="email" id="email"></input>
                        </div>
                    </div>
                    <div class="data-form-section-content-button">
                        <div class="next-button" id="details-next-button">Next ></div>
                    </div>
                </div>
            </div>
            <div class="data-form-section" id="data-form-comments">
                <div class="data-form-section-header" id="data-form-comments-header">
                    <p class="data-form-section-header-text">Step 2: More comments</p>
                </div>
                <div class="data-form-section-content" id="data-form-comments-content">
                    <div class="data-form-section-content-input">
                        <div class="input-section">
                            <p class="input-label">Telephone number <span class="error-message" id="telephone-message">*Required</span></p>
                            <input class="input-textbox" type="text" name="telephone" id="telephone"></input>
                        </div>
                        <div class="input-section">
                            <p class="input-label">Gender  <span class="error-message" id="gender-message">*Required</span></p>
                            <select class="gender-drop-down-menu" id="gender-select">
                                <option value="gender">Select Gender:</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        <div class="input-section">
                            <p class="input-label">Date of birth <span class="error-message" id="dob-message">*Required</span></p>
                            <div class="dob-input-fields">
                                <input class="dob-input" type="text" name="dob-day" id="dob-day"></input>
                                <input class="dob-input" type="text" name="dob-month" id="dob-month"></input>
                                <input class="dob-input" type="text" name="dob-year" id="dob-year"></input>
                            </div>
                        </div>
                    </div>
                    <div class="data-form-section-content-button">
                        <div class="next-button" id="comments-next-button">Next ></div>
                    </div>
                </div>
            </div>
            <div class="data-form-section" id="data-form-final-comments">
                <div class="data-form-section-header" id="data-form-final-comments-header">
                    <p class="data-form-section-header-text">Step 3: Final comments</p>
                </div>
                <div class="data-form-section-content" id="data-form-final-comments-content">
                    <div class="final-comments-input-section">
                        <div class="data-form-section-content-input">
                            <p class="input-label">Comments</p>
                            <textarea class="comments-textfield" rows="6" cols="50" name="comments"></textarea>
                        </div>
                    </div>
                    <div class="data-form-section-content-button">
                        <input class="next-button" id="final-comments-next-button" type="submit" value="Next >"></input>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Form;

if (document.getElementById('form')) {
    ReactDOM.render(<Form />, document.getElementById('form'));
}
