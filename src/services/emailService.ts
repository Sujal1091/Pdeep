import emailjs from '@emailjs/browser';
import type { EnquiryFormData } from '../types';

export interface EmailSendResult {
  success: boolean;
  message?: string;
}

export async function sendEnquiryEmail(
  formData: EnquiryFormData, 
  referenceId: string
): Promise<EmailSendResult> {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const templateParams = {
    reference_id: referenceId,
    from_name: formData.fullName,
    full_name: formData.fullName,
    name: formData.fullName,
    from_email: formData.email,
    user_email: formData.email,
    email: formData.email,
    phone: formData.phone,
    phone_number: formData.phone,
    age: formData.age,
    occupation: formData.occupation,
    interested_project: formData.interestedProject,
    work_mode: formData.workMode,
    message: formData.message || 'No additional message provided.',
    submission_date: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
  };

  // If EmailJS credentials are not configured yet, log a warning and simulate
  if (!serviceId || !templateId || !publicKey) {
    console.warn(
      '[EmailJS Service] Environment variables (VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY) are missing in .env. Simulating submission.',
      templateParams
    );
    // Return success in simulation mode so user testing still proceeds smoothly
    return {
      success: true,
      message: 'EmailJS keys not configured in .env yet. Submission simulated.'
    };
  }

  try {
    const response = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey
    );

    if (response.status === 200) {
      return { success: true };
    } else {
      return {
        success: false,
        message: `Email sending failed with status: ${response.status} (${response.text})`
      };
    }
  } catch (error: any) {
    console.error('[EmailJS Error]', error);
    return {
      success: false,
      message: error?.text || error?.message || 'Failed to send inquiry email via EmailJS.'
    };
  }
}
