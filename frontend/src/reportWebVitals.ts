import { onCLS, onFCP, onLCP, onTTFB } from 'web-vitals';

// Define a function type for the callback parameter
const reportWebVitals = (onPerfEntry?: (metric: any) => void) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    onCLS(onPerfEntry);  // Corrected: use `onCLS` instead of `getCLS`

    onFCP(onPerfEntry);  // Corrected: use `onFCP` instead of `getFCP`
    onLCP(onPerfEntry);  // Corrected: use `onLCP` instead of `getLCP`
    onTTFB(onPerfEntry); // Corrected: use `onTTFB` instead of `getTTFB`
  }
};

export default reportWebVitals;
