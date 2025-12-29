cube(`EAbp`, {
    sql_table: `cons_dict.e_abp`,
    title: 'ABP Codes',
    description: 'Codes for ABP classification',
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
            title: `ABP Code`,
            description: `ABP Code Description`,
            sql: `code`,
            type: `string`
        },
        nameRu: {
            sql: `name_ru`,
            type: `string`
        }
    }
});