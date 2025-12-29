cube(`EDzb`, {
    sql_table: `cons_data.e_dzb`,

    joins: {
        EHeader: {
            relationship: `many_to_one`,
            sql: `${EDzb}.header_id = ${EHeader}.id`
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
    
        headerId: {
            sql: `${EDzb}.header_id`,
            type: `number`
        },
    
    },
});