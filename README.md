# RecipeFinder | Recipe Search System

## Overview
RecipeFinder is a web application designed to help users discover recipes based on the ingredients they have. Built with React.js, styled using TailwindCSS, and powered by the Edamam API, the system efficiently handles over 10,000 API requests to deliver a seamless user experience.

### Mentor
Dr. Romi Banerjee

## Features
- **Ingredient-based Search**: Enter ingredients you have on hand to find matching recipes.
- **Efficient API Utilization**: Handles a high volume of API requests efficiently, ensuring a responsive user experience.
- **User-Friendly Interface**: Designed with React.js and styled with TailwindCSS for a modern and intuitive UI.

## Tech Stack
- **Frontend**: React.js
- **Styling**: TailwindCSS
- **API**: Edamam API

## Project Duration
March 2024 – May 2024

## Installation and Setup
Follow these steps to set up and run the RecipeFinder locally:

### Prerequisites
- Node.js (v16 or above)
- npm or yarn

### Steps
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/recipefinder.git
   cd recipefinder
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Create a .env File**:
   - Add your Edamam API credentials to a `.env` file in the project root:
     ```env
     REACT_APP_EDAMAM_API_KEY=your_api_key
     REACT_APP_EDAMAM_APP_ID=your_app_id
     ```

4. **Start the Development Server**:
   ```bash
   npm start
   # or
   yarn start
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Usage
1. Navigate to the search bar on the homepage.
2. Enter ingredients separated by commas (e.g., "chicken, garlic, onions").
3. View the list of recipes matching your ingredients, complete with details such as:
   - Recipe name
   - Ingredients
   - Cooking instructions
   - Nutritional information (if available)

## Key Components
- **Search Bar**: Users can input ingredients to search for recipes.
- **Recipe List**: Displays search results with recipe details.
- **Pagination**: Handles a large volume of API responses effectively.

## API Details
The Edamam API is used for fetching recipes based on user input. For more details on the API, visit the [Edamam Developer Documentation](https://developer.edamam.com/).

## Future Enhancements
- **User Authentication**: Allow users to save favorite recipes.
- **Advanced Search Filters**: Include filters like dietary preferences, cuisine types, and cooking time.
- **Mobile Optimization**: Enhance the design for smaller screens.

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch for your feature/bugfix.
3. Submit a pull request.

## License
This project is licensed under the MIT License.

---

**Contact**
For queries, reach out at [recipefinder2024.com].

