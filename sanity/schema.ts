import { type SchemaTypeDefinition } from 'sanity'
import project from './schemas/project-schema'
import user from './schemas/user-schema'
import skill from './schemas/skill-schema';
import education from './schemas/education-schema'
import experience from './schemas/experience-schema';
import services from './schemas/services-schema';
import socials from './schemas/socials-schema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, user, skill, education, experience, services, socials], 
}
