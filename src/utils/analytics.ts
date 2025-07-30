// Google Analytics utility functions
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void;
  }
}

// Track page views
export const trackPageView = (url: string, title: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-XTG9XF7M8D', {
      page_title: title,
      page_location: url,
    });
  }
};

// Track form submissions
export const trackFormSubmission = (formType: 'contact' | 'volunteer' | 'newsletter', success: boolean) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'form_submit', {
      event_category: 'engagement',
      event_label: formType,
      value: success ? 1 : 0,
      custom_parameters: {
        form_type: formType,
        submission_success: success
      }
    });
  }
};

// Track program page views
export const trackProgramView = (programSlug: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'view_program', {
      event_category: 'programs',
      event_label: programSlug,
      custom_parameters: {
        program_slug: programSlug
      }
    });
  }
};

// Track donation interest
export const trackDonationInterest = (donationLevel?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'donation_interest', {
      event_category: 'conversion',
      event_label: donationLevel || 'general',
      custom_parameters: {
        donation_level: donationLevel
      }
    });
  }
};

// Track PDF downloads
export const trackPDFDownload = (documentName: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'file_download', {
      event_category: 'documents',
      event_label: documentName,
      custom_parameters: {
        file_type: 'pdf',
        document_name: documentName
      }
    });
  }
};

// Track external link clicks
export const trackExternalLink = (url: string, linkText: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'click', {
      event_category: 'external_link',
      event_label: url,
      custom_parameters: {
        link_text: linkText,
        destination_url: url
      }
    });
  }
};