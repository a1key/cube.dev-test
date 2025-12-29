cube(`EFkrPrg`, {
    sql_table: `cons_dict.e_fkr_prg`,
    title: 'Program Codes',
    description: 'Codes for Program classification',
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
            title: `Program Code`,
            description: `Program Code Description`,
            sql: `code`,
            type: `string`
        },
        nameRu: {
            sql: `name_ru`,
            type: `string`
        }
    }
});