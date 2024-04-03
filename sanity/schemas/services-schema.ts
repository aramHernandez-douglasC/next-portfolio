const services = {
    name: "services",
    title: "Services",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",

        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title'
            }
        },
        {
            name: "shortDescription",
            title: "Short Description",
            type: "string"
        },
        {
            name: "longDescription",
            title: "Long Description",
            type: "array",
            of: [{type: 'block'}]
        },
        {
            name: 'images',
            title: 'Images',
            type: "array",
            of: [{type: 'image'}]
        },
        {
            name: 'skills',
            title: 'Skills',
            type: 'array',
            of: [{type:'skill'}]
        }

    ]

}

export default services;