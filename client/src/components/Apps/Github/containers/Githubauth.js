import React from 'react'
import "../style/Githubauth.css";

const Githubauth = () => {
    return (
        <div className="authdiv1">
            <section className="authsec1">
                <img
                    src='https://image.flaticon.com/icons/png/512/25/25231.png'
                    alt='github logo'
                    className="authimg"
                />
                <section className="authsec2">
                    <h2>Authentication</h2>
                    <label for="authpasswotd">Github password</label>
                    <section className="authsec3">
                        <input
                            type="password"
                            placeholder="Github password"
                            name="authpassword"
                        />
                        <button className="authbtn1">
                            Continue
                        </button>
                    </section>
                </section>
            </section>
        </div>
    )
}

export default Githubauth
