import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

export interface AppData {
  url: string;
  version: string;
}

export interface FullAppData {
  id: string;
  title: string;
  description: string;
  downloadUrl: string;
  version: string;
  size: string;
  lastUpdated: string;
}

export const getAppDownloads = async (): Promise<FullAppData[]> => {
  try {
    // Fetch from specific Firestore document paths
    const [clientDoc, teamDoc] = await Promise.all([
      getDoc(doc(db, "updates", "client")),
      getDoc(doc(db, "updates", "team"))
    ]);

    const apps: FullAppData[] = [];

    // Client app data
    if (clientDoc.exists()) {
      const clientData = clientDoc.data() as AppData;
      apps.push({
        id: 'digital',
        title: 'Lubeck Elevators Digital',
        description: 'Official mobile app for customers to explore our premium elevator products, request quotes, track installations, and access exclusive offers.',
        downloadUrl: clientData.url || "",
        version: clientData.version || "",
        size: "",
        lastUpdated: ""
      });
    }

    // Team app data
    if (teamDoc.exists()) {
      const teamData = teamDoc.data() as AppData;
      apps.push({
        id: 'team',
        title: 'Lubeck Elevators Team',
        description: 'Internal team application for Lubeck employees to manage projects, access technical documentation, and streamline operations.',
        downloadUrl: teamData.url || "",
        version: teamData.version || "",
        size: "",
        lastUpdated: ""
      });
    }

    return apps;
  } catch (error) {
    console.error("Error fetching app downloads:", error);
    return [];
  }
};

