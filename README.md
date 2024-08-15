# React Application with One Time Password Authentication

## Table of Contents

- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Testing](#testing)
- [Explanation](#explanation)
  - [App Component](#app-component)
  - [Pages](#pages)
  - [Components](#components)
  - [Context](#context)
  - [API](#api)
  - [Hooks](#hooks)

## Introduction

React Login/Registration Project with One Time Password Authentication for Havas Young Coders Club Registration.

## Technologies Used

- **React 18.3.1**: A JavaScript library for building user interfaces.
- **React Router**: For routing and navigation.
- **Axios**: For making HTTP requests.
- **Tailwind CSS**: For styling.
- **PropTypes**: For type checking of props.
- **Vitest**: For unit testing.
- **React Testing Library**: For testing React components.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/gamzenurmadan/havas-cx-ycc-task.git
   cd havas-cx-ycc-task

2. **Install Dependencies**:
   ```bash
   npm install

## Running the Project

1. **Start the server**
    ```bash
    npm run dev

## Testing

1. **Run the tests**
    ```bash
    npm run test

## Explanation

### Pages

*   **LoginPage**: Contains the login form.
    
*   **SignupPage**: Contains the signup form.
    
*   **OtpPage**: Contains the OTP validation form.
    

### Components

*   **ErrorMessage**: Displays error messages.
    
*   **FormAction**: Represents form action buttons.
    
*   **FormExtra**: Additional form options like "Remember Me" and "Forgot Password".
    
*   **Header**: Displays the header of the forms.
    
*   **InputField**: Custom input field component.
    
*   **SuccessMessage**: Displays success messages.
    

### Context

*   **AuthContext**: Provides authentication state and methods to the application.
    

### API

*   **authApi**: Contains functions to interact with the authentication API (login, signup, OTP validation).
    

### Hooks

*   **useFormHandler**: Custom hook to manage form state, handle validation, and errors.
