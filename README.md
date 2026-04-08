# Appointment Booking App

A React Native mobile application that allows users to seamlessly book and manage appointments with various service providers.

## Features

- **User Authentication:** Simple mock login/logout flow using React Context and AsyncStorage.
- **Provider Listing:** View available service providers (Doctors, Lawyers, Stylists, etc.).
- **Appointment Scheduling:** Select a provider, view available time slots, and confirm a booking.
- **Appointment Management:** View a list of upcoming booked appointments and cancel them if necessary.

## Tech Stack

- React Native (Expo)
- React Navigation (Native Stack & Bottom Tabs)
- Context API for State Management
- AsyncStorage (for mock data persistence)

## Assumptions

- For the scope of this 5-7 day sprint assignment, authentication is mocked without a backend server. Entering any username will log the user in.
- Data (providers and time slots) is hardcoded into the `AppContext` state manager to simulate an API payload.
- Basic UI elements from standard React Native are used for broad compatibility across Android devices.

## Installation & Running Locally

1. Clone the repository / Unzip the source code.
2. Navigate to the project directory:
   ```bash
   cd AppointmentApp
   ```
