# React Google Maps App

This is a simple React application that utilizes the `google-maps-react` library to display a map with a marker. The marker can be added by clicking on the map, and clicking on the marker displays an info window with the marker's coordinates.

## Prerequisites

Before running the app, make sure you have the following installed:

- Node.js (v14 or later)
- npm (v6 or later)

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/react-google-maps-app.git
   cd react-google-maps-app
2. Install Dependencies
   ```
   npm install
   ```
3. Obtain a Google Maps API Key:
   To use the Google Maps API, you need an API key. You can obtain one by following the instructions here.

4. Configure the API Key:
Replace 'YOUR_API_KEY' with your actual Google Maps API key in the MapContainer.js file:
```
export default GoogleApiWrapper({
  apiKey: 'YOUR_API_KEY'
})(MapContainer)
```
5. Run the app:
npm start

## Project Structure

The project is organized as follows:

- **src**: Contains the application source code.
  - **components**: React components directory.
    - **MapContainer.js**: Component responsible for rendering the map and marker logic.
  - **App.js**: Main component that renders the `MapContainer`.


## Usage
Click on the map to add a new marker.
Click on a marker to display an info window with its coordinates.
Contributions
Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or create a pull request.

## License
This project is licensed under the MIT License.

## Contact
For any inquiries or questions, you can reach us at contact@example.com.

Happy mapping!




