cube(`EEkrSpec`, {
    sql_table: `cons_dict.e_ekr_spec`,
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
            sql: `${EEkrSpec}.code`,
            type: `string`
        },
        nameRu: {
            sql: `${EEkrSpec}.name_ru`,
            type: `string`
        }
    }
});