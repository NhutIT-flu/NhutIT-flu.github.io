import { CVProfile, type InsertCVProfile } from "@shared/schema";

// CV-focused storage interface
export interface IStorage {
  getCVProfile(id: number): Promise<CVProfile | undefined>;
  createCVProfile(profile: InsertCVProfile): Promise<CVProfile>;
}

export class MemStorage implements IStorage {
  private cvProfiles: Map<number, CVProfile>;
  currentId: number;

  constructor() {
    this.cvProfiles = new Map();
    this.currentId = 1;
  }

  async getCVProfile(id: number): Promise<CVProfile | undefined> {
    return this.cvProfiles.get(id);
  }

  async createCVProfile(insertProfile: InsertCVProfile): Promise<CVProfile> {
    const id = this.currentId++;
    const profile: CVProfile = { ...insertProfile, id };
    this.cvProfiles.set(id, profile);
    return profile;
  }
}

export const storage = new MemStorage();
