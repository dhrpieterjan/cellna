import { fetchGraphQL } from "@/lib/graphql-fetch";
import { GET_HOMEPAGE_QUERY } from "@/lib/queries-strings";
import { Homepage } from "@/payload-types";
import { PayloadService } from "./payload.service";

export class MainService {
  /**
   * Get all homepage data including projects, events, and content
   */
  static async getHomepageData(): Promise<Homepage | undefined> {
    try {
      const data = await PayloadService.getHomepageData();
      return data;
    } catch (error) {
      console.error("Error fetching homepage data:", error);
      return undefined;
    }
  }

  /**
   * Get homepage data with error handling
   */
  static async getHomepageDataSafe(): Promise<Homepage | undefined> {
    try {
      return await this.getHomepageData();
    } catch (error) {
      console.error("Error fetching homepage data:", error);
      return undefined;
    }
  }
}
