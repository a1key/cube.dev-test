cube(`EPeriod`, {
    sql_table: `cons_data.e_period`,
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
        reportDate: {
            sql: `${EPeriod}.report_date`,
            type: `time`
        },
        createdAt: {
            sql: `${EPeriod}.created_at`,
            type: `time`
        } 
    }
});