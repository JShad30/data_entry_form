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
                            <p class="input-label">First Name</p>
                            <input class="input-textbox" type="text" name="firstname"></input>
                        </div>
                        <div class="input-section">
                            <p class="input-label">Surname</p>
                            <input class="input-textbox" type="text" name="surname"></input>
                        </div>
                        <div class="input-section">
                            <p class="input-label">Email Address:</p>
                            <input class="input-textbox" type="text" name="email"></input>
                        </div>
                    </div>
                    <div class="data-form-section-content-button">
                        <input class="next-button" id="details-next-button" type="submit" value="Next >"></input>
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
                            <p class="input-label">Telephone number</p>
                            <input class="input-textbox" type="text" name="telephone"></input>
                        </div>
                        <div class="input-section">
                            <p class="input-label">Gender</p>
                            <input class="dropbox" type="text" name="gender"></input>
                        </div>
                        <div class="input-section">
                            <p class="input-label">Date of birth</p>
                            <div class="dob-input-fields">
                                <input class="dob-input input-textbox" type="text" name="dob-day"></input>
                                <input class="dob-input input-textbox" type="text" name="dob-month"></input>
                                <input class="dob-input input-textbox" type="text" name="dob-year"></input>
                            </div>
                        </div>
                    </div>
                    <div class="data-form-section-content-button">
                        <input class="next-button" id="comments-next-button" type="submit" value="Next >"></input>
                    </div>
                </div>
            </div>
            <div class="data-form-section" id="data-form-final-comments">
                <div class="data-form-section-header" id="data-form-final-comments-header">
                    <p class="data-form-section-header-text">Step 3: Final comments</p>
                </div>
                <div class="data-form-section-content" id="data-form-final-comments-content">
                    <div class="data-form-section-content-input">
                        <p class="input-label">Comments</p>
                        <input type="textfield" name="comments"></input>
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
