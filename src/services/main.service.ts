import { fetchGraphQL } from "@/lib/graphql-fetch";
import { GET_HOMEPAGE_QUERY } from "@/lib/queries-strings";
import { HomepageData } from "@/lib/types";

export class MainService {
  /**
   * Get all homepage data including projects, events, and content
   */
  static async getHomepageData(): Promise<HomepageData> {
    try {
      const data = await fetchGraphQL<HomepageData>(GET_HOMEPAGE_QUERY);
      return data;
    } catch (error) {
      console.error("Error fetching homepage data:", error);
      // Return empty data structure instead of throwing during build
      return {
        projects: [],
        homepages: [],
      };
    }
  }

  /**
   * Get homepage data with error handling
   */
  static async getHomepageDataSafe(): Promise<HomepageData | null> {
    try {
      return await this.getHomepageData();
    } catch (error) {
      console.error("Error fetching homepage data:", error);
      return null;
    }
  }
}
