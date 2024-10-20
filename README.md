# Axpo-Tech-Challenge---Client

This is a single-page application developed using React and JavaScript for the Axpo Group - Tech challenge. The application enables users to view various balancing circles and their respective details.

## Features

- **Balancing Circles Details**: 
  - View members categorized as producers (incomes) and consumers (outcomes), along with their insights and total forecast.
  - Displays the total imbalance for each balancing circle. Note: Currently experiencing challenges with this feature's accuracy.
  - Provides a one-day-ahead imbalance prediction, broken down by the hour of the day.

## Installation

To set up and run this application locally, please follow these steps. Note that you will need to have the API running beforehand:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd Axpo-Tech-Challenge---Client

2. **Install dependencies**: Make sure you have Node.js installed. Then, run the following command:
    npm install

3. **Run de application**:
    npm run dev

## Endpoints

- **Home Page**:  
  `/` 
- **Balancing Circles List**:  
  `/balancing-circles`
- **Balancing Circle Details**:  
  `/balancing-circles/:circleId` 
- **Not Found**:  
  `*`

## Known Issues

- The total imbalance calculation might not return the correct results. Further investigation and debugging are needed to resolve this issue effectively.