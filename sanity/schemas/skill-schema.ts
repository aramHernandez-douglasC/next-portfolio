const skill = {
    name: 'skill',
    title: 'Skill',
    type: 'document',
    fields: [
        {
            name: 'skillName',
            title: 'Skill Name',
            type: 'string'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string'
                }
            ]
        },
        {
            name: 'yearsExperience',
            title: 'Years of Experience',
            type: 'number',
            validation: rule => rule.required().precision(1).positive()
        },
        {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags'
            }
        }

    ]
}

export default skill;