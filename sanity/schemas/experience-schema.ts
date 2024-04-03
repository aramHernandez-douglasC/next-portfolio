import { Rule } from '@sanity/types';

const experience = {
    name: 'experience',
    title: 'Experience',
    type: 'document',
    fields: [
        {
            name: 'employeer',
            title: 'Exployeer',
            type: 'string'
        },
        {
            name: 'location',
            title: 'Location',
            type: 'string'
        },
        {
            name:'position',
            title:'Position',
            type:'string'
        },
        {
            name : 'yearsOfExperience',
            title: 'Years Of Experience',
            type: 'number',
            validation: (rule:Rule)  => rule.required().precision(1).positive()
        },

    ]
}

export default experience;