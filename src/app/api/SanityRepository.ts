import { dataService } from './SanityDataService'


const getProjects = () => {
    // Using GROQ
    return dataService.fetchData(
        `*[_type == 'project']{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            gitUrl,
            prevUrl,
            content,
            "tags": tags, 
            "appTypeTags": appTypeTags
        }`
    )
}

const getAllServices = () => {
    return dataService.fetchData(
        `*[_type == 'services']{
            _id,
            _createdAt,
            title,
            "slug": slug.current,
            shortDescription
        }`
    )
}

const getDetailServiceById = (id: string) => {
    return dataService.fetchData(
        `*[_type == 'services' && _id == ${id}]{
            _id,
            _createdAt,
            title,
            "slug": slug.current,
            longDescription,
            "images" : images[].asset -> url,
            skills
        }`
    )
    
} 

const getDetailServiceBySlug = (slug: string) => {
    return dataService.fetchData(
        `*[_type == 'services' && slug,current == ${slug}]{
            _id,
            _createdAt,
            title,
            "slug": slug.current,
            longDescription,
            "images" : images[].asset -> url,
            skills
        }`
    )  
} 

const getUserInfo = () => {
    return dataService.fetchData(
        `*[_type == 'user' && name == 'Aram Hernandez'][0]{
            _id,
            _createdAt,
            name,
            "image" : image.asset -> url,
            logo,
            summary,
            titles,
            "skills": skills[]{
                skillName,
                "image": image.asset -> url,
            }, 
            education,
            experience,
            socials
        }`
    )
}


export { getProjects, getAllServices, getDetailServiceById, getDetailServiceBySlug, getUserInfo };