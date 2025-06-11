import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const cvProfiles = pgTable("cv_profiles", {
  id: serial("id").primaryKey(),
  fullName: text("full_name").notNull(),
  title: text("title").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  linkedin: text("linkedin"),
  github: text("github"),
  location: text("location"),
  portfolio: text("portfolio"),
  summary: text("summary").notNull(),
  profileImage: text("profile_image"),
  lastUpdated: timestamp("last_updated").defaultNow(),
});

export const education = pgTable("education", {
  id: serial("id").primaryKey(),
  cvProfileId: integer("cv_profile_id").references(() => cvProfiles.id),
  degree: text("degree").notNull(),
  university: text("university").notNull(),
  duration: text("duration").notNull(),
  gpa: text("gpa"),
  achievements: text("achievements").array(),
  coursework: text("coursework").array(),
});

export const skills = pgTable("skills", {
  id: serial("id").primaryKey(),
  cvProfileId: integer("cv_profile_id").references(() => cvProfiles.id),
  name: text("name").notNull(),
  category: text("category").notNull(), // frontend, backend, cloud, tools
  proficiency: integer("proficiency").notNull(), // 1-5
});

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  cvProfileId: integer("cv_profile_id").references(() => cvProfiles.id),
  name: text("name").notNull(),
  description: text("description").notNull(),
  role: text("role").notNull(),
  duration: text("duration").notNull(),
  technologies: text("technologies").array(),
  metrics: text("metrics").array(),
  githubUrl: text("github_url"),
  liveUrl: text("live_url"),
});

export const certifications = pgTable("certifications", {
  id: serial("id").primaryKey(),
  cvProfileId: integer("cv_profile_id").references(() => cvProfiles.id),
  name: text("name").notNull(),
  issuer: text("issuer").notNull(),
  validUntil: text("valid_until"),
  type: text("type").notNull(), // certification, achievement
});

export const references = pgTable("references", {
  id: serial("id").primaryKey(),
  cvProfileId: integer("cv_profile_id").references(() => cvProfiles.id),
  name: text("name").notNull(),
  title: text("title").notNull(),
  company: text("company").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  linkedin: text("linkedin"),
});

export const insertCVProfileSchema = createInsertSchema(cvProfiles);
export const insertEducationSchema = createInsertSchema(education);
export const insertSkillSchema = createInsertSchema(skills);
export const insertProjectSchema = createInsertSchema(projects);
export const insertCertificationSchema = createInsertSchema(certifications);
export const insertReferenceSchema = createInsertSchema(references);

export type CVProfile = typeof cvProfiles.$inferSelect;
export type Education = typeof education.$inferSelect;
export type Skill = typeof skills.$inferSelect;
export type Project = typeof projects.$inferSelect;
export type Certification = typeof certifications.$inferSelect;
export type Reference = typeof references.$inferSelect;

export type InsertCVProfile = z.infer<typeof insertCVProfileSchema>;
export type InsertEducation = z.infer<typeof insertEducationSchema>;
export type InsertSkill = z.infer<typeof insertSkillSchema>;
export type InsertProject = z.infer<typeof insertProjectSchema>;
export type InsertCertification = z.infer<typeof insertCertificationSchema>;
export type InsertReference = z.infer<typeof insertReferenceSchema>;
