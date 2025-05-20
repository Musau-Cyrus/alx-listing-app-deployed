// API Endpoints
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001/api';
export const PROPERTIES_API_URL = `${API_BASE_URL}/properties`;
export const USERS_API_URL = `${API_BASE_URL}/users`;

// UI Text & Labels
export const SITE_TITLE = 'ALX Listing App';
export const HERO_TITLE = 'Find Your Next Perfect Place';
export const HERO_SUBTITLE = 'Discover amazing properties at unbeatable prices.';
export const BUTTON_VIEW_DETAILS = 'View Details';
export const BUTTON_BOOK_NOW = 'Book Now';
export const BUTTON_LOAD_MORE = 'Load More';

// Configuration Settings
export const ITEMS_PER_PAGE = 10;
export const DEFAULT_CURRENCY = 'USD';
export const MAX_UPLOAD_SIZE_MB = 5; // Max image upload size in Megabytes

// Placeholder Data (if needed for development/testing)
export const PLACEHOLDER_IMAGE_URL = '/assets/placeholder-image.png'; // Ensure this image exists in public/assets

// Add other project-specific constants below

// Example of a more complex constant object
export const themeColors = {
  primary: '#007bff', // Blue
  secondary: '#6c757d', // Gray
  success: '#28a745', // Green
  danger: '#dc3545', // Red
  warning: '#ffc107', // Yellow
  info: '#17a2b8', // Teal
  light: '#f8f9fa', // Light Gray
  dark: '#343a40', // Dark Gray
};

// It's good practice to group related constants
export const errorMessages = {
  NETWORK_ERROR: 'A network error occurred. Please try again later.',
  FETCH_PROPERTIES_ERROR: 'Failed to fetch properties. Please check your connection.',
  FORM_VALIDATION_ERROR: 'Please correct the errors in the form.',
};
