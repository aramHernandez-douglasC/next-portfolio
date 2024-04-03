import { createClient, groq } from 'next-sanity';

class SanityDataService {
    private client;

    constructor() {
        this.client = createClient({
            projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
            dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
            apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION
        });
    }

    public async fetchData<T>(query: string): Promise<T> {
        try {
            return await this.client.fetch(groq`${query}`);
        } catch (error) {
            console.error("Error fetching data:", error);
            throw error; // Re-throw the error if you want to handle it further up the chain
        }
    }
}

export const dataService = new SanityDataService();