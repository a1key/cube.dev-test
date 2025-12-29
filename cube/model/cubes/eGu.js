cube(`EGu`, {
    sql_table: `cons_dict.e_gu`,
    title: 'GU Codes',
    description: 'Codes for GU classification',
    joins: {
        ERegion: {
            relationship: `many_to_one`,
            sql: `${EGu}.region_id = ${ERegion}.id`
        }
    },
    measures: {
        count: {
            type: `count`,
        }
    },
    dimensions: {
        id: {
            sql: `id`,
            type: `number`,
            primaryKey: true
        },
        code: {
            title: `GU Code`,
            sql: `code`,
            type: `string`
        },
        regionId: {
            sql: `region_id`,
            type: `number`
        }
    }
});
