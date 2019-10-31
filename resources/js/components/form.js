import React from 'react';
import ReactDOM from 'react-dom';

function Form() {
    return (
        <div class="container">
            <div class="form-container">
                <form class="data-form">
                    <div class="data-form-section" id="data-form-details">
                        <div class="data-form-section-header">
                            <p class="data-form-section-header-text">Step 1: Your details</p>
                        </div>
                        <div class="data-form-section-content">
                            <div class="data-form-section-content-input">
                                <p class="input-label">First Name</p>
                                <input class="input-textbox" type="text" name="firstname"></input>
                                <p class="input-label">Surname</p>
                                <input class="input-textbox" type="text" name="surname"></input>
                                <p class="input-label">Email Address:</p>
                                <input class="input-textbox" type="text" name="email"></input>
                            </div>
                            <div class="data-form-section-content-button">
                                <input type="submit" value="Next >"></input>
                            </div>
                        </div>
                    </div>
                    <div class="data-form-section" id="data-form-comments">
                        <div class="data-form-section-header">
                            <p class="data-form-section-header-text">Step 2: More comments</p>
                        </div>
                        <div class="data-form-section-content">
                            <div class="data-form-section-content-input">
                                <p class="input-label">Telephone number</p>
                                <input class="input-textbox" type="text" name="telephone"></input>
                                <p class="input-label">Gender</p>
                                <input class="dropbox" type="text" name="gender"></input>
                                <p class="input-label">Date of birth</p>
                                <div class="dob-input-fields">
                                    <input type="text" name="dob-day"></input>
                                    <input type="text" name="dob-month"></input>
                                    <input type="text" name="dob-year"></input>
                                </div>
                            </div>
                            <div class="data-form-section-content-button">
                                <input type="submit" value="Next >"></input>
                            </div>
                        </div>
                    </div>
                    <div class="data-form-section" id="data-form-more-comments">
                        <div class="data-form-section-header">
                            <p class="data-form-section-header-text">Step 3: Final comments</p>
                        </div>
                        <div class="data-form-section-content">
                            <div class="data-form-section-content-input">
                                <p class="input-label">Comments</p>
                                <input type="textfield" name="comments"></input>
                            </div>
                            <div class="data-form-section-content-button">
                                <input type="submit" value="Next >"></input>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Form;

if (document.getElementById('form')) {
    ReactDOM.render(<Form />, document.getElementById('form'));
}
