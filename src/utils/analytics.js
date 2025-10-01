import { track } from '@vercel/analytics';

/**
 * Custom analytics tracking utilities for EazyInsured
 * Professional implementation with type safety and error handling
 */

/**
 * Track custom events throughout the application
 * @param {string} eventName - Name of the event to track
 * @param {Object} properties - Additional properties to send with the event
 */
export const trackEvent = (eventName, properties = {}) => {
  try {
    // Only track in production or if specifically enabled in development
    if (process.env.NODE_ENV === 'production' || process.env.VERCEL_ANALYTICS_DEBUG) {
      track(eventName, properties);
    }
    
    // Log to console in development for debugging
    if (process.env.NODE_ENV === 'development') {
      console.log('🔍 Analytics Event:', eventName, properties);
    }
  } catch (error) {
    console.warn('Analytics tracking error:', error);
  }
};

/**
 * Track insurance quote requests
 */
export const trackQuoteRequest = (insuranceType, userDetails = {}) => {
  trackEvent('quote_requested', {
    insurance_type: insuranceType,
    ...userDetails,
    timestamp: new Date().toISOString()
  });
};

/**
 * Track form submissions
 */
export const trackFormSubmission = (formType, success = true, errorMessage = null) => {
  trackEvent('form_submission', {
    form_type: formType,
    success,
    error_message: errorMessage,
    timestamp: new Date().toISOString()
  });
};

/**
 * Track user engagement with insurance services
 */
export const trackServiceInteraction = (serviceName, action = 'viewed') => {
  trackEvent('service_interaction', {
    service_name: serviceName,
    action,
    timestamp: new Date().toISOString()
  });
};

/**
 * Track page views with additional context
 */
export const trackPageView = (pageName, additionalData = {}) => {
  trackEvent('page_view', {
    page_name: pageName,
    ...additionalData,
    timestamp: new Date().toISOString()
  });
};

/**
 * Track conversion events (successful insurance purchases/applications)
 */
export const trackConversion = (insuranceType, value = null, currency = 'INR') => {
  trackEvent('conversion', {
    insurance_type: insuranceType,
    value,
    currency,
    timestamp: new Date().toISOString()
  });
};

/**
 * Track user journey milestones
 */
export const trackMilestone = (milestone, data = {}) => {
  trackEvent('user_milestone', {
    milestone,
    ...data,
    timestamp: new Date().toISOString()
  });
};