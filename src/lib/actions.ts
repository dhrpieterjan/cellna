"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { ProjectsService } from "@/services/projects.service";
import { MainService } from "@/services/main.service";

// Types for server actions
interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  projectId?: string;
}

interface ProjectInquiryData {
  projectId: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
}

// Contact form submission
export async function submitContactForm(formData: ContactFormData) {
  try {
    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      return {
        success: false,
        error: "Naam, email en bericht zijn verplicht.",
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return {
        success: false,
        error: "Voer een geldig email adres in.",
      };
    }

    // Here you would typically send the data to your backend/email service
    // For now, we'll simulate a successful submission
    console.log("Contact form submission:", formData);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Revalidate relevant pages
    revalidatePath("/", "page");

    return {
      success: true,
      message:
        "Uw bericht is succesvol verzonden. We nemen zo snel mogelijk contact met u op.",
    };
  } catch (error) {
    console.error("Contact form error:", error);
    return {
      success: false,
      error: "Er is een fout opgetreden. Probeer het later opnieuw.",
    };
  }
}

// Project inquiry submission
export async function submitProjectInquiry(inquiryData: ProjectInquiryData) {
  try {
    // Validate required fields
    if (
      !inquiryData.projectId ||
      !inquiryData.name ||
      !inquiryData.email ||
      !inquiryData.message
    ) {
      return {
        success: false,
        error: "Alle velden zijn verplicht.",
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(inquiryData.email)) {
      return {
        success: false,
        error: "Voer een geldig email adres in.",
      };
    }

    // Verify project exists
    const projectData = await ProjectsService.getProjectById(inquiryData.projectId);

    if (!projectData) {
      return {
        success: false,
        error: "Project niet gevonden.",
      };
    }

    // Here you would typically send the data to your backend/email service
    console.log("Project inquiry submission:", inquiryData);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Revalidate project page and homepage
    revalidatePath(`/project/${inquiryData.projectId}`, "page");
    revalidatePath("/", "page");

    return {
      success: true,
      message: `Uw interesse voor ${
        projectData?.Naam || "dit project"
      } is geregistreerd. We nemen zo snel mogelijk contact met u op.`,
    };
  } catch (error) {
    console.error("Project inquiry error:", error);
    return {
      success: false,
      error: "Er is een fout opgetreden. Probeer het later opnieuw.",
    };
  }
}

// Newsletter subscription
export async function subscribeToNewsletter(email: string) {
  try {
    if (!email) {
      return {
        success: false,
        error: "Email adres is verplicht.",
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        success: false,
        error: "Voer een geldig email adres in.",
      };
    }

    // Here you would typically add to your newsletter service
    console.log("Newsletter subscription:", email);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Revalidate homepage
    revalidatePath("/", "page");

    return {
      success: true,
      message: "U bent succesvol ingeschreven voor onze nieuwsbrief.",
    };
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return {
      success: false,
      error: "Er is een fout opgetreden. Probeer het later opnieuw.",
    };
  }
}

// Get homepage data (server action for revalidation)
export async function getHomepageData() {
  try {
    const data = await MainService.getHomepageData();

    return {
      success: true,
      data,
    };
  } catch (error) {
    console.error("Error fetching homepage data:", error);
    return {
      success: false,
      error: "Failed to fetch homepage data",
    };
  }
}

// Get project data (server action for revalidation)
export async function getProjectData(projectId: string) {
  try {
    const data = await ProjectsService.getProjectById(projectId);

    return {
      success: true,
      data,
    };
  } catch (error) {
    console.error("Error fetching project data:", error);
    return {
      success: false,
      error: "Failed to fetch project data",
    };
  }
}

// Get all projects (server action for revalidation)
export async function getAllProjects() {
  try {
    const data = await ProjectsService.getAllProjectIds();

    return {
      success: true,
      data,
    };
  } catch (error) {
    console.error("Error fetching projects:", error);
    return {
      success: false,
      error: "Failed to fetch projects",
    };
  }
}

// Revalidate specific paths
export async function revalidateHomepage() {
  try {
    revalidatePath("/", "page");
    return { success: true };
  } catch (error) {
    console.error("Error revalidating homepage:", error);
    return { success: false, error: "Failed to revalidate homepage" };
  }
}

export async function revalidateProject(projectId: string) {
  try {
    revalidatePath(`/project/${projectId}`, "page");
    return { success: true };
  } catch (error) {
    console.error("Error revalidating project:", error);
    return { success: false, error: "Failed to revalidate project" };
  }
}

export async function revalidateAllProjects() {
  try {
    revalidatePath("/", "page");
    return { success: true };
  } catch (error) {
    console.error("Error revalidating projects:", error);
    return { success: false, error: "Failed to revalidate projects" };
  }
}

// Utility function to handle form data extraction
export async function extractFormData(formData: FormData) {
  return {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
    message: formData.get("message") as string,
    projectId: formData.get("projectId") as string,
  };
}

// Utility function to validate form data
export async function validateFormData(
  data: any,
  requiredFields: string[] = ["name", "email", "message"]
) {
  const errors: string[] = [];

  for (const field of requiredFields) {
    if (!data[field] || data[field].trim() === "") {
      errors.push(`${field} is verplicht.`);
    }
  }

  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push("Voer een geldig email adres in.");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}
