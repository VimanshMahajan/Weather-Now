Sure, here is the detailed README file:

---

# Weather Now

A simple web application to get live weather updates for any location using WeatherAPI. This application is built using Node.js, Express, and EJS templates.

## Table of Contents
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [License](#license)

## Technologies Used

- **Node.js**: JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express**: Fast, unopinionated, minimalist web framework for Node.js.
- **Axios**: Promise-based HTTP client for the browser and Node.js.
- **EJS**: Embedded JavaScript templating.
- **Bootstrap**: Open-source CSS framework directed at responsive, mobile-first front-end web development.
- **WeatherAPI**: API to get the current weather information.

## Features

- Fetches live weather data based on user input.
- Displays current temperature, humidity, and weather condition.
- Responsive UI using Bootstrap.
- Error handling for invalid locations and API errors.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/weather-detection.git
    cd weather-detection
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add your WeatherAPI key:

    ```env
    API_KEY=your_api_key_here
    ```

4. Start the server:

    ```bash
    nodemon index.js
    ```

5. Open your browser and navigate to `http://localhost:3000`.

## Usage

1. Open the application in your browser.
2. Enter a location in the input field.
3. Click the "Submit" button.
4. View the current temperature, humidity, and weather condition for the entered location.

## File Structure

- `index.js`: The main server file.
- `views/index.ejs`: The EJS template for the main page.
- `public/Style/index.css`: Custom CSS styles.
- `public/Images/img.png`: Image displayed on the main page.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
