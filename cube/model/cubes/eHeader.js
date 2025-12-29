cube(`EHeader`, {
    sql_table: `cons_data.e_header`,
    joins: {
        EPeriod: {
            relationship: `many_to_one`,
            sql: `${EHeader}.period_id = ${EPeriod}.id`
        },
        EGu: {
            relationship: `many_to_one`,
            sql: `${EHeader}.gu_id = ${EGu}.id`
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
        periodId: {
            sql: `${EHeader}.period_id`,
            type: `number`
        },
        createdAt: {
            sql: `created_at`,
            type: `time`
        } 
    }
});