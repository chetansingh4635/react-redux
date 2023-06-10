import React, { Component } from 'react'
export const Signup = () => {

    return (
        <form>
            <h3>Sign Up</h3>
            <div className="mb-3">
                <label>Name</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                />
            </div>
            <div className="mb-3">
                <label>Email address</label>
                <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                />
            </div>
            <div className="mb-3">
                <label>Mobile Number</label>
                <input
                    type="number"
                    className="form-control"
                    placeholder="Enter your mobile number"
                />
            </div>
            <div className="mb-3">
                <label>Password</label>
                <input
                    type="password"
                    className="form-control"
                    placeholder="password"
                />
            </div>
            <div className="mb-3">
                <label>Confirm Password</label>
                <input
                    type="password"
                    className="form-control"
                    placeholder="confirm password"
                />
            </div>
            <div className="mb-3">
                <label>Password</label>
                <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                />
            </div>
            <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </div>
        </form>
    )
}