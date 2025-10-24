import { fetchGraphQL } from "@/lib/graphql-fetch";
import {
  GET_PROJECT_DETAIL_QUERY,
  GET_ALL_PROJECT_IDS_QUERY,
} from "@/lib/queries-strings";
import { ProjectDetailData } from "@/lib/types";

export class ProjectsService {
  /**
   * Get detailed information for a specific project
   */
  static async getProjectById(id: string): Promise<ProjectDetailData | null> {
    try {
      const data = await fetchGraphQL<ProjectDetailData>(
        GET_PROJECT_DETAIL_QUERY,
        { id }
      );
      return data;
    } catch (error) {
      console.error("Error fetching project data:", error);
      return null;
    }
  }

  /**
   * Get all project IDs for static generation
   */
  static async getAllProjectIds(): Promise<{ id: string }[]> {
    try {
      const data = await fetchGraphQL<{ projects: { id: string }[] }>(
        GET_ALL_PROJECT_IDS_QUERY
      );
      return data.projects.map((project) => ({
        id: project.id,
      }));
    } catch (error) {
      console.error("Error generating static params:", error);
      return [];
    }
  }

  /**
   * Get project metadata for SEO
   */
  static async getProjectMetadata(id: string) {
    const data = await this.getProjectById(id);

    if (!data?.project) {
      return {
        title: "Project niet gevonden - Cellna",
      };
    }

    return {
      title: `${data.project.Naam} - Cellna`,
      description: data.project.Projectomschrijving
        ? data.project.Projectomschrijving.substring(0, 160)
        : `Bekijk details van ${data.project.Naam} project bij Cellna`,
    };
  }
}
