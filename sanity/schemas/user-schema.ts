const user = {
    name: 'user',
    title: 'User Info',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
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
            name: 'logo',
            title: 'Logo',
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
            name: 'summary',
            title: 'Summary',
            type: 'array',
            of: [{ type: 'block' }]
        },

        {
            name: 'titles',
            title: 'Titles',
            type: 'array',
            of: [{ type: 'string' }]
        },
        {
            name: 'skills',
            title: 'Skills',
            type: 'array',
            of: [{ type: 'skill' }],
        
        },
        {
            name: 'education',
            title: 'Education',
            type: 'array',
            of: [{ type: 'education' }],
        },
        {
            name: 'experience',
            title : 'Experience',
            type: 'array',
            of: [{type: 'experience'}],
        },
        {
            name: 'socials',
            title: 'Socials',
            type: 'array',
            of: [{ type: 'socials'}]
        },
        {
            name: 'resume',
            title: 'Resume/CV',
            type: 'file',
            accept: 'application/pdf'
        }

    ]
}

export default user;