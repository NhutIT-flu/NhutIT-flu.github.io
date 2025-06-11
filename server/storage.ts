import { 
  cvProfiles, 
  education, 
  skills, 
  projects, 
  certifications, 
  references,
  type CVProfile, 
  type Education,
  type Skill,
  type Project,
  type Certification,
  type Reference,
  type InsertCVProfile,
  type InsertEducation,
  type InsertSkill,
  type InsertProject,
  type InsertCertification,
  type InsertReference
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  // CV Profile
  getCVProfile(id: number): Promise<CVProfile | undefined>;
  createCVProfile(profile: InsertCVProfile): Promise<CVProfile>;
  
  // Education
  getEducation(cvProfileId: number): Promise<Education[]>;
  createEducation(education: InsertEducation): Promise<Education>;
  
  // Skills
  getSkills(cvProfileId: number): Promise<Skill[]>;
  createSkill(skill: InsertSkill): Promise<Skill>;
  
  // Projects
  getProjects(cvProfileId: number): Promise<Project[]>;
  createProject(project: InsertProject): Promise<Project>;
  
  // Certifications
  getCertifications(cvProfileId: number): Promise<Certification[]>;
  createCertification(certification: InsertCertification): Promise<Certification>;
  
  // References
  getReferences(cvProfileId: number): Promise<Reference[]>;
  createReference(reference: InsertReference): Promise<Reference>;
}

export class DatabaseStorage implements IStorage {
  // CV Profile methods
  async getCVProfile(id: number): Promise<CVProfile | undefined> {
    const [profile] = await db.select().from(cvProfiles).where(eq(cvProfiles.id, id));
    return profile || undefined;
  }

  async createCVProfile(insertProfile: InsertCVProfile): Promise<CVProfile> {
    const [profile] = await db
      .insert(cvProfiles)
      .values(insertProfile)
      .returning();
    return profile;
  }

  // Education methods
  async getEducation(cvProfileId: number): Promise<Education[]> {
    return await db.select().from(education).where(eq(education.cvProfileId, cvProfileId));
  }

  async createEducation(insertEducation: InsertEducation): Promise<Education> {
    const [edu] = await db
      .insert(education)
      .values(insertEducation)
      .returning();
    return edu;
  }

  // Skills methods
  async getSkills(cvProfileId: number): Promise<Skill[]> {
    return await db.select().from(skills).where(eq(skills.cvProfileId, cvProfileId));
  }

  async createSkill(insertSkill: InsertSkill): Promise<Skill> {
    const [skill] = await db
      .insert(skills)
      .values(insertSkill)
      .returning();
    return skill;
  }

  // Projects methods
  async getProjects(cvProfileId: number): Promise<Project[]> {
    return await db.select().from(projects).where(eq(projects.cvProfileId, cvProfileId));
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const [project] = await db
      .insert(projects)
      .values(insertProject)
      .returning();
    return project;
  }

  // Certifications methods
  async getCertifications(cvProfileId: number): Promise<Certification[]> {
    return await db.select().from(certifications).where(eq(certifications.cvProfileId, cvProfileId));
  }

  async createCertification(insertCertification: InsertCertification): Promise<Certification> {
    const [certification] = await db
      .insert(certifications)
      .values(insertCertification)
      .returning();
    return certification;
  }

  // References methods
  async getReferences(cvProfileId: number): Promise<Reference[]> {
    return await db.select().from(references).where(eq(references.cvProfileId, cvProfileId));
  }

  async createReference(insertReference: InsertReference): Promise<Reference> {
    const [reference] = await db
      .insert(references)
      .values(insertReference)
      .returning();
    return reference;
  }
}

export const storage = new DatabaseStorage();
