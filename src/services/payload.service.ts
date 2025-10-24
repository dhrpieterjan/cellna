import { getPayload } from "payload";
import config from "@/payload.config";
import { Homepage, Project } from "@/payload-types";

export class PayloadService {
  private static payload: any = null;

  private static async getPayloadInstance() {
    if (!this.payload) {
      this.payload = await getPayload({ config });
    }
    return this.payload;
  }

  // Get all projects
  static async getProjects(): Promise<{ docs: Project[] }> {
    const payload = await this.getPayloadInstance();
    const result = await payload.find({
      collection: "projects",
      where: {
        Actief: {
          equals: true,
        },
      },
      sort: "-createdAt",
      depth: 2, // Include related media files
    });
    return result;
  }

  // Get project by ID
  static async getProjectById(id: string): Promise<Project | undefined> {
    const payload = await this.getPayloadInstance();
    const result = await payload.findByID({
      collection: "projects",
      id,
      depth: 2, // Include related media files
    });
    return result;
  }

  // Get homepage data
  static async getHomepageData(): Promise<Homepage | undefined> {
    const payload = await this.getPayloadInstance();
    const result = await payload.findGlobal({
      slug: "homepage",
      depth: 2, // Include related media files
    });
    return result;
  }

  // Get all project IDs for static generation
  static async getAllProjectIds(): Promise<{ id: string }[]> {
    const payload = await this.getPayloadInstance();
    const result = await payload.find({
      collection: "projects",
      where: {
        Actief: {
          equals: true,
        },
      },
      depth: 0,
      limit: 0,
      select: {
        id: true,
      },
    });
    return result.docs.map((project: Project) => ({ id: project.id }));
  }
}
