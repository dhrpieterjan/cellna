import { fetchGraphQL } from "@/lib/graphql-fetch";
import {
  GET_PROJECT_DETAIL_QUERY,
  GET_ALL_PROJECT_IDS_QUERY,
} from "@/lib/queries-strings";
import { Project } from "@/payload-types";
import { PayloadService } from "./payload.service";

export class ProjectsService {
  /**
   * Get detailed information for a specific project
   */
  static async getProjectById(id: string): Promise<Project | undefined> {
    return await PayloadService.getProjectById(id);
  }

  /**
   * Get all project IDs for static generation
   */
  static async getAllProjectIds(): Promise<{ id: string }[]> {
    return await PayloadService.getAllProjectIds();
  }

  /**
   * Get project metadata for SEO
   */
  static async getProjectMetadata(id: string) {
    const data = await this.getProjectById(id);

    if (!data) {
      return {
        title: "Project niet gevonden - Cellna",
      };
    }

    return {
      title: `${data.Naam} - Cellna`,
      description: data.Projectomschrijving
        ? data.Projectomschrijving.substring(0, 160)
        : `Bekijk details van ${data.Naam} project bij Cellna`,
    };
  }
}
