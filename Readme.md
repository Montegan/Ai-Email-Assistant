# AI Email Assistant Chatbot

This is an AI-powered email assistant designed to help an electronics shop generate email responses to customer comments. The app takes user comments, analyzes them for sentiment, generates summaries, and composes personalized emails based on the comment and sentiment.

## Features

- **Generate Customer Comments**: Automatically generates customer reviews, both positive and negative, based on electronic products.
- **Compose Emails**: Creates personalized email responses to customer comments, with a selectable output language.
- **Sentiment Analysis**: Analyzes the sentiment (positive or negative) of customer comments to tailor email responses.
- **Multilingual Support**: Supports generating email responses in various languages including English, Spanish, Chinese, Tagalog, Vietnamese, Arabic, and French.

## Technologies Used

### Frontend

- **React**: Handles the user interface and interaction.
- **Axios**: Used for making HTTP requests to the backend.
- **Tailwind CSS**: For styling the app.

### Backend

- **Flask**: Handles the API endpoints for comment generation and email composition.
- **OpenAI**: Integrates with GPT models to generate customer comments, summaries, email content, and sentiment analysis.
- **Flask-CORS**: Enables cross-origin requests between frontend and backend.

### Hosting

- **ngrok**: Exposes the locally hosted Flask backend to the internet for testing.

## Installation and Setup

### Prerequisites

- **Node.js** (for React frontend)
- **Python** and **pip** (for Flask backend)
- **ngrok** (for tunneling the local server)

### Frontend Setup

1. Clone the repository and navigate to the frontend directory.

   ```bash
   git clone <repository-url>
   cd frontend
   ```

2. Install dependencies.

   ```bash
     npm install
   ```

3. Start the React app.

   ```bash
   npm run dev
   ```

### Backend Setup

1. Create a virtual environment (optional but recommended).

   ```bash
   python -m venv venv
   source venv/bin/activate  # For Linux/macOS
   venv\Scripts\activate  # For Windows
   ```

2. Install required Python packages.

   ```bash
   pip install -r requirements.txt
   ```

3. Set up **OpenAI API Key** in an `.env` file.

   ```
   OPENAI_API_KEY=<your-openai-api-key>
   ```

4. Start the Flask server.

   ```bash
   flask run --port=5000
   ```

5. Your backend will be running locally on `http://localhost:5000`.

### Exposing Backend with ngrok

1. Start **ngrok** to expose the Flask backend.

   ```bash
   ngrok http 5000
   ```

2. Copy the **ngrok URL** and replace the local Flask URL in your React app's API requests (in `App.js`).

### How to Use

1. **Generate a Comment**:
   - Press the "Generate Comment" button to create a new customer comment.
2. **Generate an Email**:
   - Select the language for the email output.
   - Press the "Generate Email" button to compose a response to the customer comment.

### API Endpoints

1. **Generate Customer Comment**

   - **Endpoint**: `/originalComment`
   - **Method**: `GET`
   - **Response**: A randomly generated customer comment.

2. **Compose Email**
   - **Endpoint**: `/composeEmail`
   - **Method**: `POST`
   - **Request Body**:
     ```json
     {
       "language": "English",
       "comment": "This product is amazing!"
     }
     ```
   - **Response**: The generated email response based on the comment and selected language.

### Future Improvements

- Improve the design
- Add more detailed sentiment analysis.
- Allow customization of company details in the email footer.
- Add more languages and email templates.
