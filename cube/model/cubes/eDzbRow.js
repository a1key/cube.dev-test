cube(`EDzbRow`, {
    sql_table: `cons_data.e_dzb_row`,

    joins: {
        EDzb: {
            relationship: `many_to_one`,
            sql: `${EDzbRow}.form_id = ${EDzb}.id`
        },
        EFkr: {
            relationship: `many_to_one`,
            sql: `${EDzbRow}.fkr_id = ${EFkr}.id`
        },
        EEkrSpec: {
            relationship: `many_to_one`,
            sql: `${EDzbRow}.ekr_spec_id = ${EEkrSpec}.id`
        }
    },
    measures: {
        count: {
            type: `count`,
        },
        transfer: {
            sql: `transfer`,
            type: `sum`
        },
        sum_plan06: {
            sql: `plan06`,
            type: `sum`
        },
        start_year07: {
            sql: `start_year07`,
            type: `sum`
        },
        sum08: {
            sql: `sum08`,
            type: `sum`
        },
        sum09: {
            sql: `sum09`,
            type: `sum`
        },
        present_year11: {
            sql: `present_year11`,
            type: `sum`
        },
        sum13: {
            sql: `sum13`,
            type: `sum`
        },
        sum14: {
            sql: `sum14`,
            type: `sum`
        }
    },
    
    dimensions: {
        id: {
            sql: `id`,
            type: `number`,
            format: `id`,
            primaryKey: true
        }, 
        formId: {
            sql: `form_id`,
            type: `number`
        }
    
    },
});